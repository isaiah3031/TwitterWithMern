"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
class SignupForm extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            handle: '',
            password: '',
            password2: '',
            errors: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/login');
        }
        this.setState({ errors: nextProps.errors });
    }
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            handle: this.state.handle,
            password: this.state.password,
            password2: this.state.password2
        };
        this.props.signup(user, this.props.history);
    }
    renderErrors() {
        return (<ul>
        {Object.keys(this.state.errors).map((error, i) => (<li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>))}
      </ul>);
    }
    render() {
        return (<div className="signup-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="signup-form">
            <br />
            <input type="text" value={this.state.email} onChange={this.update('email')} placeholder="Email"/>
            <br />
            <input type="text" value={this.state.handle} onChange={this.update('handle')} placeholder="Handle"/>
            <br />
            <input type="password" value={this.state.password} onChange={this.update('password')} placeholder="Password"/>
            <br />
            <input type="password" value={this.state.password2} onChange={this.update('password2')} placeholder="Confirm Password"/>
            <br />
            <input type="submit" value="Submit"/>
            {this.renderErrors()}
          </div>
        </form>
      </div>);
    }
}
exports.default = react_router_dom_1.withRouter(SignupForm);
//# sourceMappingURL=signup_form.js.map