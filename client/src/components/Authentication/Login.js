import React from 'react';
import Logout from './Logout';
import { Button, Input } from '../Library';

const Login = ({ email, password, onChangeInput, onSubmit, onLogout, user }) => {
  const loggedIn = !!user.id;
  return (
    <div className='center'>
      {
        loggedIn ? (
          // <div>
          //   <h2>Welcome, <i>{user.email}</i>!</h2>
          //   <Button
          //     onClick={onLogout}
          //     label='Log Out'
          //     active={true}
          //   />
          // </div>
          <Logout onLogout={onLogout} email={user.email} />
        ) : (
          <div>
            <h2>Log In</h2>
            <Input
              type='email'
              placeholder='email'
              name='email'
              value={email}
              onChange={onChangeInput}
            />
            <Input
              type='password'
              placeholder='password'
              name='password'
              value={password}
              onChange={onChangeInput}
            />
            <br />
            <Button
              onClick={onSubmit}
              label='Log In'
              active={true}
            />
          </div>
        )
      }
    </div>
  );
}

export default Login;