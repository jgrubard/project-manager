import React, { Component } from 'react';
import { Button } from '../Library';

class Logout extends Component {
  
  render() {
    const { email, onLogout } = this.props;
    return (
      <div>
        <h2>Welcome, <i>{email}</i>!</h2>
        <Button
          onClick={onLogout}
          label='Log Out'
          active={true}
        />
      </div>
    );
  }
}

export default Logout;