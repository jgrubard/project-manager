import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsersFromServer, getUserFromToken } from '../../redux'

import MainLoginSignup from './Authentication/MainLoginSignup';

class App extends Component {
  componentDidMount() {
    const { loadUser, loadUsers } = this.props;
    loadUser();
    loadUsers();
  }
  render() {
    return(
      <MainLoginSignup />
    ); 
  }
}

const mapState = null;

const mapDispatch = dispatch => {
  return {
    loadUser: () => {
      const token = window.localStorage.getItem('token');
      if(token) {
        dispatch(getUserFromToken(token));
      }
    },
    loadUsers: () => dispatch(fetchUsersFromServer())
  }
}

export default connect(mapState, mapDispatch)(App);