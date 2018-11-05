import React, { Component } from 'react';

class SignUpState extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>Sign Up!</h2>
        <input className='input-field' type='email' placeholder='Enter email address'/>
        <input className='input-field' type='password' placeholder='enter password'/>
        <input className='input-field' type='password' placeholder='enter password again'/>
        <br />
        <button className='login-toggle active'>Sign Up</button>
      </div>
    );
  }
}

export default SignUpState;