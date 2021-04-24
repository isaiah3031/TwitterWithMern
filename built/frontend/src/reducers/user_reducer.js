"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_actions_1 = require("../actions/user_actions");
const UserReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case user_actions_1.RECEIVE_USER:
            return Object.assign({}, state, action.user);
        default: return state;
    }
};
exports.default = UserReducer;
//# sourceMappingURL=user_reducer.js.map