import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProjectForm from './ProjectForm';
import { Button } from '../Library';
import { deleteProjectFromServer } from '../../../redux';

class AllProjects extends Component {
  
  render() {
    const { projects, deleteProject, userId } = this.props;
    return (
      <div>
      <div style={{ padding: '10', marginTop: '10px' }}>
        <h2>All Projects</h2>
        <ProjectForm />
        {
          projects.map(p => {
            return (
              <div key={p.id}>
                {p.name}
                <Button
                  label='Edit'
                  onClick={() => console.log('edit project')}
                  active={true}
                />
                <Button
                  label='Delete'
                  onClick={() => deleteProject(p.id, userId)}
                  active={true}
                />
              </div>
            );
          })
        }
      </div>
    </div>
    );
  }
}

const mapState = ({ projects, user }) => ({ projects, userId: user.id });

const mapDispatch = dispatch => {
  return {
    deleteProject: (projectId, userId) => dispatch(deleteProjectFromServer(projectId, userId))
  }
};

export default connect(mapState, mapDispatch)(AllProjects);