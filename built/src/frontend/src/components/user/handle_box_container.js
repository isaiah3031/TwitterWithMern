"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const handle_box_1 = __importDefault(require("./handle_box"));
const user_actions_1 = require("../../actions/user_actions");
const mapStateToProps = (state, ownProps) => ({
    id: ownProps.id,
    users: state.users
});
const mapDispatchToProps = dispatch => ({
    fetchUser: id => dispatch(user_actions_1.fetchUser(id))
});
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(handle_box_1.default);
//# sourceMappingURL=handle_box_container.js.map