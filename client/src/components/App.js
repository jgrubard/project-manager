import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsersFromServer } from '../../redux'

import Login from './Login';
import Users from './Users';

class App extends Component {
  componentDidMount() {
    const { loadUsers } = this.props;
    loadUsers();
  }
  render() {
    return(
      <Login />
    ); 
  }
}

const mapState = null;

const mapDispatch = dispatch => {
  return {
    loadUsers: () => dispatch(fetchUsersFromServer())
  }
}

export default connect(mapState, mapDispatch)(App);