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
    const { user: { id, email }, loggedIn } = this.props;
    return (
      <div className={`${modalOpen ? 'modal-bg' : ''}`}>
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
                <Link className='nav-link' to={`/${id}/dashboard`}>
                  Dashboard
                </Link>
              </div>
          }
          {
            loggedIn &&
              <div className='nav-item nav-text'>
                {email}
              </div>
          }
          {
            !loggedIn &&
              <div className='nav-item'>
                <Button
                  onClick={!!modalOpen ? closeModal : openModal}
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