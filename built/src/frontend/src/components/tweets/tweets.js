"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const tweet_box_1 = __importDefault(require("./tweet_box"));
const Tweets = ({ tweetList, fetchTweets }) => {
    react_1.useEffect(() => {
        fetchTweets();
    }, []);
    if (tweetList.length === 0) {
        return (<div>There are no tweets</div>);
    }
    else {
        return (<>
        <h2>All Tweets</h2>
        {tweetList.map(tweet => {
                return <tweet_box_1.default key={tweet._id} tweet={tweet}/>;
            })}
      </>);
    }
};
exports.default = Tweets;
//# sourceMappingURL=tweets.js.map