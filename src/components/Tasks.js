import React from 'react';
import Task from './Task';

const Tasks = ({ tasks, onStatus, onDeleteTask, updateDeadline }) => {
  return (
    <div className="py-3">
      {tasks.map((task) => (
        <div key={task.id}>
          <Task task={task} onStatus={onStatus} onDeleteTask={onDeleteTask} updateDeadline ={updateDeadline} />
        </div>
      ))}
    </div>
  );
};

export default Tasks;
