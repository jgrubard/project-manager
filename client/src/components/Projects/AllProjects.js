import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProjectForm from './ProjectForm';
import EditProject from './EditProject';
import { Button } from '../Library';

class AllProjects extends Component {
  constructor() {
    super();
    this.state = {
      isEditing: false,
      project: ''
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(project) {
    const  { isEditing } = this.state;
    project ? project : '';
    this.setState({ isEditing: !isEditing, project });
  }

  render() {
    const { projects } = this.props;
    const { isEditing, project } = this.state;
    const { toggleModal } = this;
    return (
      <div>
      <div style={{ padding: '10', marginTop: '10px' }}>
        <h2>All Projects</h2>
        {
          isEditing &&
            <EditProject toggleModal={toggleModal} project={project}/>
        }
        <ProjectForm />
        {
          projects.map(p => {
            return (
              <div key={p.id}>
                {p.name}
                <Button
                  label='Edit'
                  onClick={() => toggleModal(p)}
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

const mapDispatch = null;

export default connect(mapState, mapDispatch)(AllProjects);