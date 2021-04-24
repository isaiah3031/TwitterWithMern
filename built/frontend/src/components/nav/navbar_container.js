"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const session_actions_1 = require("../../actions/session_actions");
const navbar_1 = __importDefault(require("./navbar"));
const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated
});
exports.default = react_redux_1.connect(mapStateToProps, { logout: session_actions_1.logout })(navbar_1.default);
//# sourceMappingURL=navbar_container.js.map