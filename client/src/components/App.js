import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { fetchUsersFromServer, getUserFromToken } from '../../redux';

import Nav from './Nav';
import Home from './Home';
import AllProjects from './Projects/AllProjects';
import Dashboard from './DashBoard/Dashboard';

class App extends Component {
  componentDidMount() {
    const { loadUser, loadUsers } = this.props;
    loadUser();
    loadUsers();
  }
  render() {
    return(
      <Router>
        <div>
          <Nav />
          <div className='main-container'>
            <Route exact path='/' render={({ history }) => <Home history={ history } />} />
            <Route exact path='/projects' render={() => <AllProjects />} />
            <Route exact path='/:id/dashboard' render={({ match }) => <Dashboard id={match.params.id}/>} />
          </div>
        </div>
      </Router>
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