import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, Input } from '../Library';
import { signup } from '../../../redux';

class SignupState extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password1: '',
      password2: ''
    }
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeInput(ev) {
    const { name, value } = ev.target;
    const change = {};
    change[name] = value;
    this.setState(change);
  }

  onSubmit(ev) {
    ev.preventDefault();
    const { email, password1, password2 } = this.state;
    const { signupUser } = this.props;
    signupUser({ email, password: password1 });
  }

  render() {
    const { email, password1, password2 } = this.state;
    const { onChangeInput, onSubmit } = this;
    const { loggedIn } = this.props;
    return (
      <div className='center'>
        {
          !loggedIn
            ? 
              <div>
                <h2>Sign Up!</h2>
                <Input
                  type='email'
                  placeholder='email'
                  name='email'
                  value={email}
                  onChange={onChangeInput}
                />
                <Input
                  type='password'
                  placeholder='password'
                  name='password1'
                  value={password1}
                  onChange={onChangeInput}
                />
                <Input
                  type='password'
                  placeholder='confirm password'
                  name='password2'
                  value={password2}
                  onChange={onChangeInput}
                />
                <br />
                <Button
                  onClick={onSubmit}
                  label='Sign Up'
                  active={true}
                />
              </div>
            : <h2>
                Please log out before creating a new account.
              </h2>
        }
       
      </div>
    );
  }
}

const mapState = ({ user }) => {
  return {
    loggedIn: !!user.id
  }
};

const mapDispatch = dispatch => {
  return {
    signupUser: (credentials) => dispatch(signup(credentials))
  }
}

export default connect(mapState, mapDispatch)(SignupState);