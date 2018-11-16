import React from 'react';
import Logout from './Logout';
import { Button, Input } from '../Library';

const Login = ({ email, password, onChangeInput, onSubmit, onLogout, user, closeModal }) => {
  const loggedIn = !!user.id;
  return (
    <div className='login-container'>
      {
        loggedIn ? (
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
            <Button
              onClick={closeModal}
              label='Close Modal'
              active={true}
            />
          </div>
        )
      }
    </div>
  );
}

export default Login;