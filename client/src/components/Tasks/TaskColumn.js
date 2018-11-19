import React from 'react';

const TaskColumn = ({ name }) => {
  return (
    <div className='task-col'>
      <h4>{name}</h4>
    </div>
  );
}

export default TaskColumn;