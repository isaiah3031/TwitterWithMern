"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const session_actions_1 = require("../../actions/session_actions");
const login_form_1 = __importDefault(require("./login_form"));
const mapStateToProps = state => {
    return {
        errors: state.errors.session
    };
};
const mapDispatchToProps = dispatch => {
    return {
        login: user => dispatch(session_actions_1.login(user))
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(login_form_1.default);
//# sourceMappingURL=login_form_container.js.map