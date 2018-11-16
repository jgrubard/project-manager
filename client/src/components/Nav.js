import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MainLoginSignup from './Authentication/MainLoginSignup';

import LoginState from './Authentication/LoginState';
import SignupState from './Authentication/SignupState';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      loginModalOpen: false,
      signupModalOpen: false,
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(type) {
    this.setState({ [type]: true });
  }

  closeModal(type) {
    this.setState({ [type]: false });
  }

  render() {
    return (
      <div>
        <div className='nav'>
          <div className='nav-brand'>
            <Link className='nav-brand-link' to='/'>
              Project Manager
            </Link>
          </div>
          <div className='nav-item'>
            <MainLoginSignup openModal={this.openModal} />
          </div>
        </div>
        <div className='modal-container'>
          <LoginState modalOpen={this.state.loginModalOpen} closeModal={this.closeModal}/>
        </div>
      </div>
    );
  }
}

export default Nav;