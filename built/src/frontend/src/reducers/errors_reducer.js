"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const session_errors_reducer_1 = __importDefault(require("./session_errors_reducer"));
exports.default = redux_1.combineReducers({
    session: session_errors_reducer_1.default,
});
//# sourceMappingURL=errors_reducer.js.map