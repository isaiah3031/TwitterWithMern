"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const register_1 = __importDefault(require("../../validation/register"));
const login_1 = __importDefault(require("../../validation/login"));
const passport_1 = __importDefault(require("passport"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const User_1 = __importDefault(require("../../models/User"));
const keys_1 = __importDefault(require("../../config/keys"));
// import { validate } from '../../models/User'
// Checks if the current user has an auth token
router.get('/current', passport_1.default.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        handle: req.user.handle,
        email: req.user.email
    });
});
// Find a user by username
router.get('/:user_id', (req, res) => {
    User_1.default.findById(req.params.user_id)
        .then((user) => res.json(user.handle))
        .catch(err => res.status(404).json({ noUserFound: 'No User Found from router get' }));
});
// Register a user
router.post("/register", async (req, res) => {
    const { errors, isValid } = register_1.default(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const user = await User_1.default.findOne({ email: req.body.email });
    if (user) {
        errors.email = "Email already exists";
        return res.status(400).json(errors);
    }
    else {
        const newUser = new User_1.default({
            handle: req.body.handle,
            email: req.body.email,
            password: req.body.password
        });
        bcryptjs_1.default.genSalt(10, (err, salt) => {
            bcryptjs_1.default.hash(newUser.password, salt, (err, hash) => {
                if (err)
                    throw err;
                newUser.password = hash;
                newUser
                    .save()
                    .then(user => {
                    const payload = { id: user.id, handle: user.handle };
                    jsonwebtoken_1.default.sign(payload, keys_1.default.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    });
                })
                    .catch(err => console.log(err));
            });
        });
    }
});
// login a user
router.post("/login", async (req, res) => {
    const { errors, isValid } = login_1.default(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;
    const user = await User_1.default.findOne({ email });
    if (!user) {
        errors.email = "User not found";
        return res.status(400).json(errors);
    }
    bcryptjs_1.default.compare(password, user.password).then(isMatch => {
        if (isMatch) {
            const payload = user;
            jsonwebtoken_1.default.sign({ payload }, keys_1.default.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                res.json({
                    success: true,
                    token: "Bearer " + token
                });
            });
        }
        else {
            errors.password = "Incorrect password";
            return res.status(400).json(errors);
        }
    });
});
exports.default = router;
//# sourceMappingURL=users.js.map