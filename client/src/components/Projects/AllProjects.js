import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

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
    const { projects, loadProject, project } = this.props;
    const { isEditing } = this.state;
    const { toggleModal } = this;
    // if(!project) return null;
    return (
      <div>
      <div>
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
                {/* <Button
                  label='project settings'
                  onClick={() => toggleModal(p)}
                  active={true}
                  long={true}
                  type='info'
                />
                <Button
                  label='launch project'
                  onClick={() => this.props.history.push(`/${this.props.userId}/projects/${p.id}`)}
                  active={true}
                  long={true}
                /> */}
                <Link to={`/${this.props.userId}/projects/${p.id}`}>
                  <span className='project-name-margin'>
                    {p.name}
                  </span>
                </Link>
              </div>
            );
          })
        }
      </div>
    </div>
    );
  }
}

const mapState = ({ projects, user }) => {
  // const project = projects.find(p => p.id === projectId);
  const userId = user.id;
  return {
    projects, userId
  }
}

const mapDispatch = null;

export default withRouter(connect(mapState, mapDispatch)(AllProjects));