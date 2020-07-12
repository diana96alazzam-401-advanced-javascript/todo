import React from 'react';
import { LoginContext } from '../../../context/auth';
import Show from '../show/';
// helper component for ACL
class Auth extends React.Component {
  constructor(props) {
    super(props);
  }
  static contextType = LoginContext;
  render() {
    let okToRender = false;
    try {
      okToRender =
        this.context.loggedIn && this.props.capability
          ? this.context.user.capabilities.includes(this.props.capability)
          : false;
    } catch (e) {
      console.log('NOT AUTHORIZED', e.message);
    }
    return <Show condition={okToRender}>{this.props.children}</Show>;
  }
}
export default Auth;
