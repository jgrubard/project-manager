import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Input, Button, CloseButton } from '../Library';
import { updateProjectOnServer, deleteProjectFromServer, getAllUsersOnProjectFromServer } from '../../../redux';

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

  async componentDidMount() {
    const { project, userId, users, loadProjectUsers } = this.props;
    if(project) {
      const { name, id } = project;
      this.setState({ id, name });
      const userProjects = await loadProjectUsers(id, userId);
      const ownUsers = userProjects.reduce((memo, proj) => {
        const user = users.find(user => user.id === proj.userId && userId !== user.id);
        if(user) memo.push(user);
        return memo;
      }, []);
      this.setState({ usersToAdd: ownUsers });
    }

  }

  render() {
    const { toggleModal, project, deleteProject, userId } = this.props;
    const { name, usersToAdd } = this.state;
    const { handleChange, onSubmit, addUser, removeUser } = this;
    return (
      <div className='modal-container modal-project'>
        <div className='button-close'>
          <CloseButton
            onClick={toggleModal}
            label='X'
            active={true}
          />
        </div>
        <h2>Edit Project: <i>{project.name}</i></h2>
        <br />
        Change Project Name
        <br />
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
        <br />
        <br />
        <AddUserToProject addUser={addUser} />
        {
          usersToAdd.map((user, i) => {
            const color = i % 2 === 0 ? ' user-list-white' : ' user-list-offwhite';
            return (
              <div key={user.id} className={`user-list${color}`}>
                <div className='name-remove-pair'>
                  < Button
                    label='remove'
                    onClick={() => removeUser(user.id)}
                    active={true}
                  />
                  <span className='name-space'>{user.email}</span>
                </div>
              </div>
            );
          })
        }
        <br />
        <Button
          label='Delete Project'
          onClick={() => deleteProject(project.id, userId, toggleModal)}
          active={true}
          long={true}
        />
      </div>
    );
  }
}

const mapState = ({ user, users }) => ({ userId: user.id, users });
const mapDispatch = dispatch => {
  return {
    updateProject: (project, userId, userIds) => dispatch(updateProjectOnServer(project, userId, userIds)),
    deleteProject: async (projectId, userId, toggleModal) => {
      dispatch(deleteProjectFromServer(projectId, userId));
      await toggleModal();
    },
    loadProjectUsers: (projectId, userId) => dispatch(getAllUsersOnProjectFromServer(projectId, userId))
  }
};

export default connect(mapState, mapDispatch)(EditProject);