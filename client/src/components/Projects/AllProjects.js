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
    const { projects, loadProject } = this.props;
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
          projects.map((p, i) => {
            const color = i % 2 === 0 ? 'row-color-white' : 'row-color-none';
            return (
              <div key={p.id} className={color}>
                <Button
                  label='project settings'
                  onClick={() => toggleModal(p)}
                  active={true}
                  long={true}
                  type='info'
                />
                <Button
                  label='launch project'
                  onClick={() => loadProject(p)}
                  active={true}
                  long={true}
                />
                <span className='project-name-margin'>{p.name}</span>
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