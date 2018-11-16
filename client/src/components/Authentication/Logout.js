import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button } from '../Library';
import { logoutUser } from '../../../redux';

class Logout extends Component {
  constructor() {
    super();
    this.onLogout = this.onLogout.bind(this);
  }
  
  onLogout(ev) {
    ev.preventDefault();
    const { logout, closeModal } = this.props;
    logout();
    closeModal(ev);
  }

  render() {
    const { onLogout } = this;
    return (
      <Button
        onClick={onLogout}
        label='Log Out'
        active={true}
      />
    );
  }
}

const mapState = null;

const mapDispatch = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser()),
  }
}

export default connect(mapState, mapDispatch)(Logout);