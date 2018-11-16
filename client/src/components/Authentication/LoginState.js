import React, { Component } from 'react';
import { connect } from 'react-redux';

import { attemptLogin } from '../../../redux';
import Login from './Login';

class LoginState extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeInput(ev) {
    const { name, value } = ev.target;
    const change = {}
    change[name] = value;
    this.setState(change);
  }

  onSubmit(ev) {
    ev.preventDefault();
    const { email, password } = this.state;
    const { login } = this.props;
    login({ email, password });
    this.setState({ email: '', password: '' });
  }

  render() {
    const { email, password } = this.state;
    const { onChangeInput, onSubmit, onLogout } = this;
    const { user } = this.props;
    return (
      <div>
        <Login 
          email={email}
          password={password}
          onChangeInput={onChangeInput}
          onSubmit={onSubmit}
          onLogout={onLogout}
          user={user}
        />
      </div>
    );
  }
}

const mapState = ({ user }) => ({ user });

const mapDispatch = (dispatch, { history }) => {
  return {
    login: (credentials) => dispatch(attemptLogin(credentials, history)),
  }
}

export default connect(mapState, mapDispatch)(LoginState);