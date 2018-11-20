import React from 'react';

import { connect } from 'react-redux';

const TaskColumn = ({ name, colId, ownTasks }) => {
  // const { ownTasks } = props;
  return (
    <div className='task-col'>
      <h4>{name}</h4>
      {
        ownTasks.map(task => {
          return (
            <div key={task.id} style={{ height: '75px', backgroundColor: 'white', margin: '5px', padding: '5px' }}>
              {task.name}
            </div>
          );
        })
      }
    </div>
  );
}

const mapState = ({ tasks }, { colId }) => {
  const ownTasks = tasks.filter(task => task.colId === colId)
  return {
    ownTasks
  }
}

const mapDispatch = null;

export default connect(mapState, mapDispatch)(TaskColumn);