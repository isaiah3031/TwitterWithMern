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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const TweetCompose = ({ composeTweet }) => {
    const [text, setText] = react_1.useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        let tweet = {
            "text": text
        };
        composeTweet(tweet).then(() => setText(''));
    };
    return (<div>
      <form className='tweet_compose' onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input type="textarea" value={text} onChange={e => setText(e.target.value)} placeholder="Write your tweet..."/>
          <input type="submit" value="Submit"/>
        </div>
      </form>
    </div>);
};
exports.default = TweetCompose;
//# sourceMappingURL=tweet_compose.js.map