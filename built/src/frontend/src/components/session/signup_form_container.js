"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const session_actions_1 = require("../../actions/session_actions");
const signup_form_1 = __importDefault(require("./signup_form"));
const mapStateToProps = (state) => {
    return {
        signedIn: state.session.isSignedIn,
        errors: state.errors.session
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        signup: user => dispatch(session_actions_1.signup(user))
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(signup_form_1.default);
//# sourceMappingURL=signup_form_container.js.map