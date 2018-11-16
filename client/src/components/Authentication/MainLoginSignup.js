import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button } from '../Library';

import LoginState from './LoginState';
import SignupState from './SignupState';

class MainLoginSignup extends Component {
  constructor() {
    super();
    this.state = {
      section: 'login'
    }
    this.toggleSection = this.toggleSection.bind(this);
  }

  toggleSection(status) {
    this.setState({ section: status });
  }

  render() {
    const { section } = this.state;
    // const { history } = this.props;
    const { toggleSection } = this;
    const { openModal } = this.props;
    return (
    
        <div className='toggle-container'>
          <Button
            // onClick={() => toggleSection('login')}
            onClick={() => openModal('loginModalOpen')}
            label='Log In'
            active={ section === 'login'}
          />
          <Button
            onClick={() => toggleSection('signup')}
            label='Sign Up'
            active={section === 'signup'}
          />
        </div>
    
    );
  }
}

const mapState = (state, { history }) => ({ history });

const mapDispatch = null;

export default connect(mapState, mapDispatch)(MainLoginSignup);