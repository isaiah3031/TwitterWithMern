"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const axios_1 = __importDefault(require("axios"));
const getUser = id => {
    return axios_1.default.get(`/api/users/${id}`);
};
exports.getUser = getUser;
//# sourceMappingURL=user_api_util.js.map