import React, { Component } from 'react';
import ProjectForm from './ProjectForm';

import { connect } from 'react-redux';

class AllProjects extends Component {
  
  render() {
    const { projects } = this.props;
    let order = 1;
    return (
      <div>
      <div style={{ padding: '10', marginTop: '10px' }}>
        <h2>All Projects</h2>
        <ProjectForm />
        { projects.map(p => <div key={p.id}>{order++}. {p.name}</div>) }
      </div>
    </div>
    );
  }
}

const mapState = ({ projects }) => ({ projects });

const mapDispatch = null;

export default connect(mapState, mapDispatch)(AllProjects);