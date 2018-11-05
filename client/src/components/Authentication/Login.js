import React from 'react';

import { Button } from '../Library';

const Login = ({ email, password, onChangeInput, onSubmit, onLogout, user }) => {
  const loggedIn = !!user.id;
  return (
    <div style={{ textAlign: 'center' }}>
      {
        loggedIn ? (
          <div>
            <h2>Welcome, <i>{user.email}</i>!</h2>
            <Button
              onClick={onLogout}
              label='Log Out'
              active={true}
            />
          </div>
        ) : (
          <div>
            <h2>Log In</h2>
            <input className='input-field' type='email' placeholder='email' name='email' value={email} onChange={onChangeInput}/>
            <input className='input-field' type='password' placeholder='password' name='password' value={password} onChange={onChangeInput}/>
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