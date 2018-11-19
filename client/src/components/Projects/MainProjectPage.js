import React, { Component } from 'react';

import TaskColumn from '../Tasks/TaskColumn';

class MainProjectPage extends Component {
  render() {
    const { project, toggleDashboard, showDash } = this.props;
    const toggleMessage = showDash ? 'hide' : 'show'
    return (
      <div>
        <div>
          <h2>Main Project Page: {project.name}</h2>
          <span style={{ cursor: 'pointer' }} onClick={toggleDashboard}>({toggleMessage} dashboard menu)</span>
        </div>
        <div className='task-row'>
          <TaskColumn name='New Tasks' />
          <TaskColumn name='In-Progress' />
          <TaskColumn name='Review' />
          <TaskColumn name='Completed' />
        </div>
      </div>
    );
  }
}

export default MainProjectPage;