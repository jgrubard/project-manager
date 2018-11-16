import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Button } from './Library';
import LoginSignupModal from './Authentication/LoginSignupModal';
import Logout from './Authentication/Logout';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false,
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(ev) {
    ev.preventDefault();
    this.setState({ modalOpen: true });
  }

  closeModal(ev) {
    ev.preventDefault();
    this.setState({ modalOpen: false });
  }

  render() {
    const { openModal, closeModal } = this;
    const { modalOpen } = this.state;
    const { user, loggedIn } = this.props;
    return (
      <div>
        <div className='nav'>
          <div className='nav-brand'>
            <Link className='nav-brand-link' to='/'>
              Project Manager
            </Link>
          </div>
          {
            loggedIn &&
              <div className='nav-item'>
                <Logout closeModal={closeModal} />
              </div>
          }
          {
            loggedIn &&
              <div className='nav-item nav-text'>
                {user.email}
              </div>
          }
          {
            !loggedIn &&
              <div className='nav-item'>
                <Button
                  onClick={openModal}
                  label='Login/Signup'
                  active={true}
                  long={true}
                />
              </div>
          }
        </div>
        {
          !loggedIn && !!modalOpen &&
            <div className='modal-container'>
              <LoginSignupModal modalOpen={modalOpen} closeModal={closeModal} />
            </div>
        }
      </div>
    );
  }
}

const mapState = ({ user }) => ({ user, loggedIn: !!user.id });

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Nav);