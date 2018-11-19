import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Input, Button, CloseButton } from '../Library';
import { updateProjectOnServer, deleteProjectFromServer } from '../../../redux';

import AddUserToProject from './AddUserToProject';

class EditProject extends Component {
  constructor() {
    super();
    this.state = {
      id: undefined,
      name: '',
      usersToAdd: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.addUser = this.addUser.bind(this);
    this.removeUser = this.removeUser.bind(this);
  }

  handleChange(ev) {
    const { name, value } = ev.target;
    this.setState({ [name]: value });
  }

  onSubmit(ev) {
    ev.preventDefault();
    const { project: { id }, updateProject, userId, toggleModal } = this.props;
    const { name, usersToAdd } = this.state;
    const userIds = usersToAdd.map(user => user.id);
    updateProject({ id, name }, userId, userIds);
    toggleModal();
  }

  addUser(user) {
    const users = this.state.usersToAdd;
    this.setState({ usersToAdd: [ ...users, user ] });
  }

  removeUser(userId) {
    const { usersToAdd } = this.state;
    const users = usersToAdd.filter(user => user.id !== userId);
    this.setState({ usersToAdd: users });
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
    const { name, usersToAdd } = this.state;
    const { handleChange, onSubmit, addUser, removeUser } = this;
    console.log(this.state.usersToAdd);
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
        <AddUserToProject addUser={addUser} />
        {
          usersToAdd.map(user => {
            return (
              <div key={user.id}>
                { user.email }
                < Button
                  label='remove'
                  onClick={() => removeUser(user.id)}
                  active={true}
                />
              </div>
            );
          })
        }
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
    updateProject: (project, userId, userIds) => dispatch(updateProjectOnServer(project, userId, userIds)),
    deleteProject: async (projectId, userId, toggleModal) => {
      dispatch(deleteProjectFromServer(projectId, userId));
      await toggleModal();
    }
  }
};

export default connect(mapState, mapDispatch)(EditProject);