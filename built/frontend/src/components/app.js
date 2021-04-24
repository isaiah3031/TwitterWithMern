"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const route_util_1 = require("../util/route_util");
const react_router_dom_1 = require("react-router-dom");
const navbar_container_1 = __importDefault(require("./nav/navbar_container"));
const login_form_container_1 = __importDefault(require("./session/login_form_container"));
const signup_form_container_1 = __importDefault(require("./session/signup_form_container"));
const feed_container_1 = __importDefault(require("./feed/feed_container"));
const profile_container_1 = __importDefault(require("./profile/profile_container"));
const tweet_compose_container_1 = __importDefault(require("./tweets/tweet_compose_container"));
const App = () => (<div>
    <navbar_container_1.default />
    <react_router_dom_1.Switch>
      <route_util_1.ProtectedRoute exact path='/' component={feed_container_1.default}/>
      <route_util_1.AuthRoute exact path='/login' component={login_form_container_1.default}/>
      <route_util_1.AuthRoute exact path='/signup' component={signup_form_container_1.default}/>
      <route_util_1.ProtectedRoute exact path="/profile" component={profile_container_1.default}/>
      <route_util_1.ProtectedRoute exact path="/new_tweet" component={tweet_compose_container_1.default}/>
    </react_router_dom_1.Switch>
  </div>);
exports.default = App;
//# sourceMappingURL=app.js.map