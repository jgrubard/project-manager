import React, { Component } from 'react';
import { connect } from 'react-redux';

import { attemptLogin } from '../../redux';

class Login extends Component {
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
    const { onChangeInput, onSubmit } = this;
    return (
      <div>
        <h1>Login</h1>
        <input type='email' placeholder='email' name='email' value={email} onChange={onChangeInput}/>
        <input type='password' placeholder='password' name='password' value={password} onChange={onChangeInput}/>
        <button onClick={onSubmit}>log in</button>
      </div>
    );
  }
}

const mapState = null;

const mapDispatch = dispatch => {
  return {
    login: (credentials) => dispatch(attemptLogin(credentials))
  }
}

export default connect(mapState, mapDispatch)(Login);