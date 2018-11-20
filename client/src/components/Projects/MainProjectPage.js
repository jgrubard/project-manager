import React, { Component } from 'react';
import { connect } from 'react-redux';

import TaskColumn from '../Tasks/TaskColumn';
import CreateTask from '../Tasks/CreateTask';
import { getTasksFromServer } from '../../../redux';

import { Button } from '../Library';

class MainProjectPage extends Component {
  constructor() {
    super();
    this.state = {
      modalActive: false
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    const { loadTasks, project } = this.props;
    loadTasks(project.id);
  }

  toggleModal(ev) {
    ev.preventDefault();
    this.setState({ modalActive: !this.state.modalActive });
  }

  render() {
    const { project, toggleDashboard, showDash } = this.props;
    const { toggleModal } = this;
    const toggleMessage = showDash ? 'hide' : 'show'
    return (
      <div>
        <div>
          <h2>Main Project Page: {project.name}</h2>
          <span style={{ cursor: 'pointer' }} onClick={toggleDashboard}>({toggleMessage} dashboard menu)</span>
          <Button
            label='New Task'
            onClick={toggleModal}
            active={true}
          />
        </div>
        <div className='task-row'>
          <TaskColumn name='New Tasks' colId={1} />
          <TaskColumn name='In-Progress' colId={2} />
          <TaskColumn name='Review' colId={3} />
          <TaskColumn name='Completed' colId={4} />
        </div>
        <div>
        {
          this.state.modalActive &&
            <div className='modal-container modal-project'>
              <CreateTask toggleModal={toggleModal} project={project} />
            </div>
        }
        </div>

      </div>
    );
  }
}

const mapState = null;
const mapDispatch = dispatch => {
  return {
    loadTasks: (projectId) => dispatch(getTasksFromServer(projectId))
  }
}

export default connect(mapState, mapDispatch)(MainProjectPage);