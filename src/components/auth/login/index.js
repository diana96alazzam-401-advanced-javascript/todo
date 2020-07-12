import React from 'react';
import { LoginContext } from '../../../context/auth';
import Show from '../show/';

class Login extends React.Component {
  // using contextType will add the context to the "this.context"
  static contextType = LoginContext;
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.context.login(this.state.username, this.state.password);
  };
  render() {
    return (
      <>
        <Show condition={this.context.loggedIn}>
          <button onClick={this.context.logout}> Log Out</button>
        </Show>
        <Show condition={!this.context.loggedIn}>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="password"
              placeholder="Enter Password"
              onChange={this.handleChange}
            />
            <button>Login</button>
          </form>
        </Show>
      </>
    );
  }
}

export default Login;
