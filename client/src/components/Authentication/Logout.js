import React from 'react';
import { Button } from '../Library';

const Logout = ({ email, onLogout }) => {
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

export default Logout;