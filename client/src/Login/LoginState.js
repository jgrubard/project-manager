import React, { Component } from 'react';
import { connect } from 'react-redux';

import { attemptLogin, logoutUser } from '../../redux';

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
    this.onLogout = this.onLogout.bind(this);
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

  onLogout(ev) {
    ev.preventDefault();
    const { logout } = this.props;
    logout();
  }

  render() {
    const { email, password } = this.state;
    const { onChangeInput, onSubmit, onLogout } = this;
    const { user } = this.props;
    return (
      <Login 
        email={email}
        password={password}
        onChangeInput={onChangeInput}
        onSubmit={onSubmit}
        onLogout={onLogout}
        user={user}
      />
    );
  }
}

const mapState = ({ user }) => {
  // const loggedIn = !!user.id;
  return {
    // loggedIn,
    user
  }
};

const mapDispatch = dispatch => {
  return {
    login: (credentials) => dispatch(attemptLogin(credentials)),
    logout: () => dispatch(logoutUser()),
  }
}

export default connect(mapState, mapDispatch)(LoginState);