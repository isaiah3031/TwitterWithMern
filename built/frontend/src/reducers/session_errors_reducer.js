"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const session_actions_1 = require("../actions/session_actions");
const _nullErrors = [];
const SessionErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case session_actions_1.RECEIVE_SESSION_ERRORS:
            return action.errors;
        case session_actions_1.RECEIVE_CURRENT_USER:
            return _nullErrors;
        default: return state;
    }
};
exports.default = SessionErrorsReducer;
//# sourceMappingURL=session_errors_reducer.js.map