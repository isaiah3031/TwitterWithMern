"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signup = exports.setAuthToken = void 0;
const axios_1 = __importDefault(require("axios"));
const setAuthToken = token => {
    if (token) {
        axios_1.default.defaults.headers.common['Authorization'] = token;
    }
    else {
        delete axios_1.default.defaults.headers.common['Authorization'];
    }
};
exports.setAuthToken = setAuthToken;
const signup = userData => {
    return axios_1.default.post('/api/users/register', userData);
};
exports.signup = signup;
const login = userData => {
    return axios_1.default.post('/api/users/login', userData);
};
exports.login = login;
//# sourceMappingURL=session_api_util.js.map