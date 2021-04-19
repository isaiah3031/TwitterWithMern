"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtectedRoute = exports.AuthRoute = void 0;
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const Auth = ({ component: Component, path, loggedIn, exact }) => (<react_router_dom_1.Route path={path} exact={exact} render={(props) => (!loggedIn ? (<Component {...props}/>) : (<react_router_dom_1.Redirect to="/tweets"/>))}/>);
const Protected = ({ component: Component, loggedIn, ...rest }) => (<react_router_dom_1.Route {...rest} render={props => loggedIn ? (<Component {...props}/>) : (<react_router_dom_1.Redirect to="/login"/>)}/>);
const mapStateToProps = state => ({ loggedIn: state.session.isAuthenticated });
exports.AuthRoute = react_router_dom_1.withRouter(react_redux_1.connect(mapStateToProps)(Auth));
exports.ProtectedRoute = react_router_dom_1.withRouter(react_redux_1.connect(mapStateToProps)(Protected));
//# sourceMappingURL=route_util.js.map