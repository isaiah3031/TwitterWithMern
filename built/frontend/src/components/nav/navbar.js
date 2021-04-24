"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("./navbar.scss");
const NavBar = ({ logout, loggedIn }) => {
    const logoutUser = (e) => {
        e.preventDefault();
        logout();
    };
    const getLinks = () => {
        if (loggedIn) {
            return (<div>
          <react_router_dom_1.Link to={'/tweets'}>All Tweets</react_router_dom_1.Link>
          <react_router_dom_1.Link to={'/profile'}>Profile</react_router_dom_1.Link>
          <react_router_dom_1.Link to={'/new_tweet'}>Write a Tweet</react_router_dom_1.Link>
          <button onClick={e => logoutUser(e)}>Logout</button>
        </div>);
        }
        else {
            return (<div>
          <react_router_dom_1.Link to={'/signup'}>Signup</react_router_dom_1.Link>
          <react_router_dom_1.Link to={'/login'}>Login</react_router_dom_1.Link>
        </div>);
        }
    };
    return (<div className='navbar'>
      <h1>Chirper</h1>
      {getLinks()}
    </div>);
};
exports.default = NavBar;
//# sourceMappingURL=navbar.js.map