import React from 'react';
import { Button, Input } from '../Library';

const Login = ({ email, password, onChangeInput, onSubmit }) => {
  return (
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
  );
}

export default Login;