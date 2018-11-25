import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Button } from './Library';
import LoginSignupModal from './Authentication/LoginSignupModal';
import Logout from './Authentication/Logout';

import DashNav from './MainDashboard/DashNav';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false,
      dashNavOpen: true
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.toggleDashNav = this.toggleDashNav.bind(this);
  }

  openModal(ev) {
    ev.preventDefault();
    this.setState({ modalOpen: true });
  }

  closeModal(ev) {
    ev.preventDefault();
    this.setState({ modalOpen: false });
  }

  toggleDashNav() {
    this.setState({ dashNavOpen: !this.state.dashNavOpen })
    ;
    this.props.grabNavStatus(this.state.dashNavOpen)
  }

  render() {
    const { openModal, closeModal, toggleDashNav } = this;
    const { modalOpen, dashNavOpen } = this.state;
    const { user: { id, email }, loggedIn } = this.props;
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
              <div className='nav-item nav-text' onClick={this.toggleDashNav} style={{ cursor: 'pointer' }}>
                {/* <Link className='nav-link' to={`/${id}/dashboard`}> */}
                  <span className='nav-link'>Settings</span>
                {/* </Link> */}
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
            <LoginSignupModal modalOpen={modalOpen} closeModal={closeModal} />
        }
        {
          loggedIn && dashNavOpen &&
            <div>
              <DashNav dashNavOpen={dashNavOpen} toggleDashNav={toggleDashNav} />
            </div>
        }
        {
          loggedIn &&
            <div className='toggle-dash-nav'>
              <div onClick={toggleDashNav}>
                {dashNavOpen ? 'hide' : 'show'} settings
              </div>
            </div>
        }
      </div>
    );
  }
}

const mapState = ({ user }) => ({ user, loggedIn: !!user.id });

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Nav);