"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const app_1 = __importDefault(require("./app"));
const Root = ({ store }) => (<react_redux_1.Provider store={store}>
    <react_router_dom_1.HashRouter>
      <app_1.default />
    </react_router_dom_1.HashRouter>
  </react_redux_1.Provider>);
exports.default = Root;
//# sourceMappingURL=root.js.map