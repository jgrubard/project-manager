import React, { Component } from 'react';
import { connect } from 'react-redux';

// import DashNav from './DashNav';
import AllProjects from '../Projects/AllProjects';

import { fetchProjectsFromServer } from '../../../redux';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      pageLoad: 'projects'
    }
  }

  componentDidMount() {
    const { loadProjects, userId } = this.props;
    loadProjects(userId);
  }

  render() {
    let projectName;
    const { pageLoad } = this.state;
    return (
      <div className='dashboard-container'>
        <h2>Dashboard</h2>
        <div className='dash-nav-container'>
          <div>
            <div className='dash-nav-item'>
              Projects
            </div>
            <div className='dash-nav-item'>
              Tab 2
            </div>
            <div className='dash-nav-item'>
              Tab 3
            </div>
            <div className='dash-nav-item project-name'>
              { !!projectName ? projectName : 'No Project Selected' }
            </div>
          </div>
        </div>
        {
          pageLoad === 'projects' &&
            <AllProjects />
        }
      </div>
    );
  }
}

const mapState = ({ user }) => ({ userId: user.id });

const mapDispatch = dispatch => {
  return {
    loadProjects: (userId) => dispatch(fetchProjectsFromServer(userId))
  }
}

export default connect(mapState, mapDispatch)(Dashboard);


/* 

import React, { Component } from 'react';

import AllProjects from '../Projects/AllProjects';

class DashNav extends Component {
  constructor() {
    super();
    this.state = {
      pageLoad: 'projects'
    }
  }
  
  render() {
    let projectName;
    const { pageLoad } = this.state;
    return (
      <div>
        <div className='dash-nav-item'>
          Projects
        </div>
        <div className='dash-nav-item'>
          Tab 2
        </div>
        <div className='dash-nav-item'>
          Tab 3
        </div>
        <div className='dash-nav-item project-name'>
          { !!projectName ? projectName : 'No Project Selected' }
        </div>
        {
          pageLoad === 'projects' &&
            <AllProjects />
        }
      </div>
    );
  }
}

export default DashNav;

*/