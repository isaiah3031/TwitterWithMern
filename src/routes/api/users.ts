import validateRegisterInput from '../../validation/register'
import validateLoginInput from '../../validation/login'
import passport from 'passport'
import jwt from 'jsonwebtoken'
import express, { Response, Request } from "express"
const router = express.Router();
import bcrypt from 'bcryptjs'
import User, { IUser, InputUser, IGetUserAuthInfoRequest } from '../../models/User'
import keys from '../../config/keys'
// import { validate } from '../../models/User'

// Checks if the current user has an auth token
router.get('/current',
  passport.authenticate('jwt', { session: false }),
  (req: IGetUserAuthInfoRequest, res: Response) => {
    res.json({
      id: req.user.id,
      handle: req.user.handle,
      email: req.user.email
    });
  })

// Find a user by username
router.get('/:user_id', (req: Request, res: Response) => {
  User.findById(req.params.user_id)
    .then((user: IUser) => res.json(user.handle))
    .catch(err => res.status(404).json({ noUserFound: 'No User Found from router get' }))
})

// Register a user
router.post("/register", async (req: IGetUserAuthInfoRequest, res: Response) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const user = await User.findOne({ email: req.body.email })
  if (user) {
    errors.email = "Email already exists";
    return res.status(400).json(errors);
  } else {
    const newUser = new User({
      handle: req.body.handle,
      email: req.body.email,
      password: req.body.password
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then(user => {
            const payload = { id: user.id, handle: user.handle };

            jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
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
router.post("/login",
  async (req: IGetUserAuthInfoRequest, res: Response) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    const user: IUser = await User.findOne({ email })

    if (!user) {
      errors.email = "User not found";
      return res.status(400).json(errors);
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = user;

        jwt.sign({ payload }, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token
          });
        });
      } else {
        errors.password = "Incorrect password";
        return res.status(400).json(errors);
      }
    });
  });




export default router;