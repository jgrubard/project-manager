import React from 'react';

const Login = ({ email, password, onChangeInput, onSubmit, onLogout, user }) => {
  const loggedIn = !!user.id;
  return (
    <div>
      {
        loggedIn ? (
          <div>
            <h1>Welcome, {user.email}</h1>
            <button onClick={onLogout}>log out</button>
          </div>
        ) : (
          <div>
            <h1>Login</h1>
            <input type='email' placeholder='email' name='email' value={email} onChange={onChangeInput}/>
            <input type='password' placeholder='password' name='password' value={password} onChange={onChangeInput}/>
            <button onClick={onSubmit}>log in</button>
          </div>
        )
      }
    </div>
  );
}

export default Login;