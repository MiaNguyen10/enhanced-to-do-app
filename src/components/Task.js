import React from "react";
import "./style.css";



const Task = ({ task, users, onStatus, onDeleteTask, updateDeadline }) => {
  return (
    <div class="card card-element" key={task.id}>
      <h5 class="card-header text-center" style={{color: updateDeadline(task.deadline,task.isComplete)}}>{task.title}</h5>
      <div class="card-body">
        <h5 class="card-title">Description: {task.desc}</h5>
        <p class="card-text">Datetime: {task.date}</p>
        <p class="card-text">Deadline: {task.deadline}</p>
        <select class="form-select" aria-label="Default select example">
          <option selected>Assigned user</option>
          {users.map(user => (
            <option value={user.id}>{user.name}</option>
          ))}
        </select>
        <div>
          <button
            class="btn btn-primary me-3"
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
