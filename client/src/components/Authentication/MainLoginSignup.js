import React, { Component } from 'react';

import { Button } from '../Library';

import LoginState from './LoginState';
import SignupState from './SignupState';

class MainLoginSignup extends Component {
  constructor() {
    super();
    this.state = {
      section: 'signup'
    }
    this.toggleSection = this.toggleSection.bind(this);
  }

  toggleSection(status) {
    this.setState({ section: status });
  }

  render() {
    const { section } = this.state;
    const { toggleSection } = this;
    return (
      <div className='login-container'>
        <div className='toggle-container'>
          <Button
            onClick={() => toggleSection('login')}
            label='Log In'
            active={ section === 'login'}
          />
          <Button
            onClick={() => toggleSection('signup')}
            label='Sign Up'
            active={section === 'signup'}
          />
        </div>
        { section === 'login' && <LoginState /> }
        { section === 'signup' && <SignupState /> }
      </div>
    );
  }
}

export default MainLoginSignup;