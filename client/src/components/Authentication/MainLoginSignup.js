import React, { Component } from 'react';
import { connect } from 'react-redux';

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
          <button className={`login-toggle${ section === 'login' ? ' active' : '' }`} onClick={() => toggleSection('login')}>Login</button>
          <button className={`login-toggle${ section === 'signup' ? ' active' : '' }`} onClick={() => toggleSection('signup')}>Sign Up</button>
        </div>
        { section === 'login' && <LoginState /> }
        { section === 'signup' && <SignupState /> }
      </div>
    );
  }
}

const mapState = ({ user }) => {
  return {
    loggedIn: !!user.id
  }
}

export default connect(mapState)(MainLoginSignup);