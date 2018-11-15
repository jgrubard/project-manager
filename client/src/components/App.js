import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { fetchUsersFromServer, getUserFromToken } from '../../redux';

import MainLoginSignup from './Authentication/MainLoginSignup';
import Nav from './Nav';
import AllProjects from './Projects/AllProjects';

class App extends Component {
  componentDidMount() {
    const { loadUser, loadUsers } = this.props;
    loadUser();
    loadUsers();
  }
  render() {
    const { user } = this.props;
    return(
      <Router>
        <div>
          {/* { */}
            {/* !user.id ? ( */}
              <Route exact path='/' render={({ history }) => <MainLoginSignup history={ history } />} />
            {/* ) : ( */}
              <div>
                <Nav />
                <Route exact path='/projects' render={() => <AllProjects />} />
              </div>
            {/* ) */}
          {/* } */}
          
        </div>
      </Router>
      
    ); 
  }
}

const mapState = ({ user }) => ({ user });

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