"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_thunk_1 = __importDefault(require("redux-thunk"));
const redux_logger_1 = __importDefault(require("redux-logger"));
const root_reducer_1 = __importDefault(require("../reducers/root_reducer"));
const configureStore = (preloadedState = {}) => (redux_1.createStore(root_reducer_1.default, preloadedState, redux_1.applyMiddleware(redux_thunk_1.default, redux_logger_1.default)));
exports.default = configureStore;
//# sourceMappingURL=store.js.map