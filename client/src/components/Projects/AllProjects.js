import React, { Component } from 'react';
import ProjectForm from './ProjectForm';

class AllProjects extends Component {
  render() {
    return (
      <div>
      <div style={{ padding: '10', marginTop: '10px' }}>
        <h2>All Projects</h2>
        <ProjectForm />
      </div>
    </div>
    );
  }
}

export default AllProjects;