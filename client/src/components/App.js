import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { fetchUsersFromServer, getUserFromToken, fetchProjectsFromServer } from '../../redux';

import Nav from './Nav';
import Home from './Home';

// import AllProjects from './Projects/AllProjects';
// import Dashboard from './MainDashboard/Dashboard';
import AuthRoute from './Authorization/AuthRoute';
import MainProjectPage from './Projects/MainProjectPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dashNavOpen: false,
    }
    this.grabNavStatus = this.grabNavStatus.bind(this);
  }

  grabNavStatus(status) {
    this.setState({ dashNavOpen: status });
  }

  componentDidMount() {
    const { loadUser, loadUsers, loggedIn, user, loadProjects } = this.props;
    loadUser();
    loadUsers();
    // console.log('LOGGED IN:', loggedIn);
    // if(loggedIn) {
    console.log('USER:', user, loggedIn);
    loadProjects(user.id);
    // }
  }

  render() {

    // const AuthDashboard = AuthRoute(Dashboard);

    const AuthProject = AuthRoute(MainProjectPage);
    const { loggedIn, loadProjects, user } = this.props;
    console.log('LOGGED IN:'. loggedIn)
    const checkDashNav = loggedIn && !this.state.dashNavOpen ? ' dash-nav-move' : '';
    // if(loggedIn) loadProjects(user.id);
    return (
      
      <Router>
        <div>
          <Nav grabNavStatus={this.grabNavStatus} />
          <div className={`main-container${checkDashNav}`}>
            <Route exact path='/' render={({ history }) => <Home history={ history } />} />
            {/* <Route exact path='/:id/dashboard' render={({ match }) => <AuthDashboard id={match.params.id} />} /> */}
            <Route exact path='/:userId/projects/:projectId' render={({ match }) => <AuthProject userId={match.params.userId * 1} projectId={match.params.projectId * 1} />} />
            {/* <Route exact path='/:id/projects' render={() => <AllProjects />} /> */}
          </div>
        </div>
      </Router>
    ); 
  }
}

const mapState = ({ user }) => ({ user, loggedIn: !!user.id });

const mapDispatch = dispatch => {
  return {
    loadUser: () => {
      const token = window.localStorage.getItem('token');
      if(token) {
        dispatch(getUserFromToken(token));
      }
    },
    loadUsers: () => dispatch(fetchUsersFromServer()),
    loadProjects: (userId) => {
      console.log('testing project load', userId)
      if(userId) {
        dispatch(fetchProjectsFromServer(userId));
      }
    }
  }
}

export default connect(mapState, mapDispatch)(App);