"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const passport_1 = __importDefault(require("passport"));
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const keys_1 = __importDefault(require("./config/keys"));
const db = keys_1.default.mongoURI;
const users_1 = __importDefault(require("./routes/api/users"));
const tweets_1 = __importDefault(require("./routes/api/tweets"));
mongoose_1.default
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(passport_1.default.initialize());
require('./config/passport')(passport_1.default);
app.use("/api/users", users_1.default);
app.use("/api/tweets", tweets_1.default);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
//# sourceMappingURL=app.js.map