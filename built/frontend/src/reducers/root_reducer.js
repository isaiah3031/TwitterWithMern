"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const session_reducer_1 = __importDefault(require("./session_reducer"));
const errors_reducer_1 = __importDefault(require("./errors_reducer"));
const tweet_reducer_1 = __importDefault(require("./tweet_reducer"));
const user_reducer_1 = __importDefault(require("./user_reducer"));
const RootReducer = redux_1.combineReducers({
    session: session_reducer_1.default,
    tweets: tweet_reducer_1.default,
    users: user_reducer_1.default,
    errors: errors_reducer_1.default
});
exports.default = RootReducer;
//# sourceMappingURL=root_reducer.js.map