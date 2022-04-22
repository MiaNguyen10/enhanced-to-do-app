import React from 'react';
import Task from './Task';

const Tasks = ({ tasks, onStatus, onDeleteTask }) => {
  return (
    <div className="py-3">
      {tasks.map((task) => (
        <div key={task.id}>
          <Task task={task} onStatus={onStatus} onDeleteTask={onDeleteTask} />
        </div>
      ))}
    </div>
  );
};

export default Tasks;
