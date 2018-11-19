import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Input, Button, CloseButton } from '../Library';
import { updateProjectOnServer, deleteProjectFromServer } from '../../../redux';

class EditProject extends Component {
  constructor() {
    super();
    this.state = {
      id: undefined,
      name: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(ev) {
    const { name, value } = ev.target;
    this.setState({ [name]: value });
  }

  onSubmit(ev) {
    ev.preventDefault();
    const { project: { id }, updateProject, userId, toggleModal } = this.props;
    const { name } = this.state; 
    updateProject({ id, name }, userId);
    toggleModal();
  }

  componentDidMount() {
    const { project } = this.props;
    if(project) {
      const { name, id } = project;
      this.setState({ id, name });
    }
  }

  render() {
    const { toggleModal, project, deleteProject, userId } = this.props;
    const { name } = this.state;
    const { handleChange, onSubmit } = this;
    return (
      <div className='modal-container'>
        <div className='button-close'>
          <CloseButton
            onClick={toggleModal}
            label='X'
            active={true}
          />
        </div>
        <h4>Edit Project:</h4>
        <Input
          placeholder='Project Name'
          name='name'
          value={name}
          onChange={handleChange}
        />
        <Button
          onClick={onSubmit}
          label='submit'
          active={true}
        />
        <Button
          label='Delete'
          onClick={() => deleteProject(project.id, userId, toggleModal)}
          active={true}
        />
      </div>
    );
  }
}

const mapState = ({ user }) => ({ userId: user.id });
const mapDispatch = dispatch => {
  return {
    updateProject: (project, userId) => dispatch(updateProjectOnServer(project, userId)),
    deleteProject: async (projectId, userId, toggleModal) => {
      dispatch(deleteProjectFromServer(projectId, userId));
      await toggleModal();
    }
  }
};

export default connect(mapState, mapDispatch)(EditProject);