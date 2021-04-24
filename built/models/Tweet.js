"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const TweetSchema = new Schema({
    user: {
        id: {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'users'
        },
        handle: {
            type: String
        }
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    likedBy: [{
            id: {
                type: mongoose_1.default.Schema.Types.ObjectId,
                ref: 'User', handle: String
            },
            handle: {
                type: String,
                required: true
            }
        }]
});
exports.default = mongoose_1.default.model('Tweet', TweetSchema);
//# sourceMappingURL=Tweet.js.map