import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    const { loggedIn } = this.props;
    return (
      <div className='login-container'>
        <div className='toggle-container'>
          <Button
            onClick={() => toggleSection('login')}
            label='Log In'
            active={loggedIn || section === 'login'}
          />
          { !loggedIn && 
            <Button
              onClick={() => toggleSection('signup')}
              label='Sign Up'
              active={section === 'signup'}
            />
          }
        </div>
        { section === 'login' && <LoginState /> }
        { loggedIn || section === 'signup' && <SignupState /> }
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