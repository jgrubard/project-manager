import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, CloseButton } from '../Library';

import LoginState from './LoginState';
import SignupState from './SignupState';

class LoginSignupModal extends Component {
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
    const { history, modalOpen, closeModal } = this.props;
    const { toggleSection } = this;
    return (
      <div>
        {
          modalOpen &&
            <div className='login-container'>
              <div className='x-button'> 
                <CloseButton
                  onClick={closeModal}
                  label='X'
                  active={true}
                />
              </div>
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
              { section === 'login' && <LoginState history={history}/> }
              { section === 'signup' && <SignupState /> }
            </div>
        }
      </div>
    );
  }
}

const mapState = (state, { history }) => ({ history });

const mapDispatch = null;

export default connect(mapState, mapDispatch)(LoginSignupModal);

/*        <div className='toggle-container'>
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
        </div> */