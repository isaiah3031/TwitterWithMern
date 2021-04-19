"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const root_1 = __importDefault(require("./components/root"));
const store_1 = __importDefault(require("./store/store"));
const jwt_decode_1 = __importDefault(require("jwt-decode"));
const session_api_util_1 = require("./util/session_api_util");
const session_actions_1 = require("./actions/session_actions");
document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (localStorage.jwtToken) {
        session_api_util_1.setAuthToken(localStorage.jwtToken);
        const decodedUser = jwt_decode_1.default(localStorage.jwtToken);
        const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };
        store = store_1.default(preloadedState);
        const currentTime = Date.now() / 1000;
        if (decodedUser.exp < currentTime) {
            store.dispatch(session_actions_1.logout());
            window.location.href = '/login';
        }
    }
    else {
        store = store_1.default({});
    }
    const root = document.getElementById('root');
    react_dom_1.default.render(<root_1.default store={store}/>, root);
});
//# sourceMappingURL=index.js.map