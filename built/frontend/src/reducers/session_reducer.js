"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const session_actions_1 = require("../actions/session_actions");
const initialState = {
    isAuthenticated: false,
    user: {}
};
const SessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case session_actions_1.RECEIVE_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !!action.currentUser,
                user: action.currentUser
            };
        case session_actions_1.RECEIVE_USER_LOGOUT:
            return {
                isAuthenticated: false,
                user: undefined
            };
        case session_actions_1.RECEIVE_USER_SIGN_IN:
            return {
                ...state,
                isSignedIn: true
            };
        default: return state;
    }
};
exports.default = SessionReducer;
//# sourceMappingURL=session_reducer.js.map