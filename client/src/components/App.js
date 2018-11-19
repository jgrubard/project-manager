import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { fetchUsersFromServer, getUserFromToken } from '../../redux';

import Nav from './Nav';
import Home from './Home';

import AllProjects from './Projects/AllProjects';
import Dashboard from './MainDashboard/Dashboard';
import AuthRoute from './Authorization/AuthRoute';

class App extends Component {
  componentDidMount() {
    const { loadUser, loadUsers } = this.props;
    loadUser();
    loadUsers();
  }
  render() {

    const AuthDashboard = AuthRoute(Dashboard);


    return (
      <Router>
        <div>
          <Nav />
          <div className='main-container'>
            <Route exact path='/' render={({ history }) => <Home history={ history } />} />
            <Route exact path='/:id/dashboard' render={({ match }) => <AuthDashboard id={match.params.id} />} />
            {/* <Route exact path='/:id/projects' render={() => <AllProjects />} /> */}
          </div>
        </div>
      </Router>
    ); 
  }
}

const mapState = ({ user }) => ({ loggedIn: !!user.id });

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