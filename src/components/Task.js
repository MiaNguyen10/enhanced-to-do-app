import React from "react";
import "./style.css";



const Task = ({ task, onStatus, onDeleteTask, updateDeadline }) => {

  
  return (
    <div className="card card-element" key={task.id}>
      <h5 className="card-header text-center" style={{color: updateDeadline(task.deadline,task.complete)}}>{task.title}</h5>
      <div className="card-body">
        <h5 className="card-title">Description: {task.desc}</h5>
        <p className="card-text">Datetime: {task.date}</p>
        <p className="card-text">Deadline: {task.deadline}</p>
        <p className="card-text">Assigned user: {task.user}</p>
        
        <div>
          <button
            className="btn btn-primary me-3"
            onClick={() => onDeleteTask(task.id)}
          >
            Delete
          </button>
          {task.complete}
          <button
            className="btn btn-outline-primary"
            onClick={() => onStatus(task)}
          >
            {task.complete && "✅"}
            {!task.complete && "⬜"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
