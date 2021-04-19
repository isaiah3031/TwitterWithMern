"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = exports.signup = exports.logoutUser = exports.receiveErrors = exports.receiveUserSignIn = exports.receiveCurrentUser = exports.RECEIVE_USER_SIGN_IN = exports.RECEIVE_USER_LOGOUT = exports.RECEIVE_SESSION_ERRORS = exports.RECEIVE_CURRENT_USER = void 0;
const APIUtil = __importStar(require("../util/session_api_util"));
const jwt_decode_1 = __importDefault(require("jwt-decode"));
exports.RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
exports.RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
exports.RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
exports.RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";
const receiveCurrentUser = currentUser => ({
    type: exports.RECEIVE_CURRENT_USER,
    currentUser
});
exports.receiveCurrentUser = receiveCurrentUser;
const receiveUserSignIn = () => ({
    type: exports.RECEIVE_USER_SIGN_IN
});
exports.receiveUserSignIn = receiveUserSignIn;
const receiveErrors = errors => ({
    type: exports.RECEIVE_SESSION_ERRORS,
    errors
});
exports.receiveErrors = receiveErrors;
const logoutUser = () => ({
    type: exports.RECEIVE_USER_LOGOUT
});
exports.logoutUser = logoutUser;
const signup = user => dispatch => (APIUtil.signup(user).then(() => (dispatch(exports.receiveUserSignIn())), err => (dispatch(exports.receiveErrors(err.response.data)))));
exports.signup = signup;
const login = user => dispatch => (APIUtil.login(user).then(res => {
    const { token } = res.data;
    localStorage.setItem('jwtToken', token);
    APIUtil.setAuthToken(token);
    const decoded = jwt_decode_1.default(token);
    dispatch(exports.receiveCurrentUser(decoded));
})
    .catch(err => {
    dispatch(exports.receiveErrors(err.response.data));
}));
exports.login = login;
const logout = () => dispatch => {
    localStorage.removeItem('jwtToken');
    APIUtil.setAuthToken(false);
    dispatch(exports.logoutUser());
};
exports.logout = logout;
//# sourceMappingURL=session_actions.js.map