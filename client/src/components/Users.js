import React from 'react';
import { connect } from 'react-redux';

const Users = ({ users }) => {
  return (
    <div>
      <h1>Users Page</h1>
      {
        users.map(user => {
          return (
            <div key={user.id}>
              <h4>User {user.id}: {user.email}</h4>
            </div>
          );
        })
      }
    </div>
  );
}

const mapState = ({ users }) => {
  // console.log(users);
  return { users }
}

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Users);