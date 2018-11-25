import React, { Component } from 'react';
import { connect } from 'react-redux';

import AllProjects from '../Projects/AllProjects';

class DashNav extends Component {
  constructor() {
    super();
    this.state = {
      // pageLoad: 'projects'
    }
  }
  
  render() {
    // const { pageLoad } = this.state;

    // const { dashNavOpen } = this.props;
    // const active = dashNavOpen ? ' active' : '';
    return (
      <div className={`dash-nav`}>
        <br />
        <br />
        <div className='dash-nav-item'>
          Dash Nav
        </div>
        <AllProjects />
        {/* {
          !this.props.projects.length ? (
            <div>You have no projects</div>
          ) : (
            this.props.projects.map(p => <p>p.name</p>)
          )
        } */}
      </div>
    );
  }
}

const mapState = ({ projects }) => ({ projects });
const mapDispatch = null;

export default connect(mapState, mapDispatch)(DashNav);