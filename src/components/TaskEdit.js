import React, { useState } from 'react';
import { Button } from '@mui/material';


const TaskEdit = ({ task, onSaveTask }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');
  const [deadline, setDeadline] = useState('');
  const [user, setUser] = useState('');
  const users = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'C' },
  ];

  const saveTask = (e) => {
    e.preventDefault();
    onSaveTask({
      title: title,
      desc: desc,
      date: date,
      deadline: deadline,
      user: user,
    });

    setDesc('');
    setTitle('');
    setDate('');
    setDeadline('');
    setUser('');
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={title}
            placeholder="Enter title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            name="desc"
            value={desc}
            placeholder="Enter description"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            type="date"
            min="2021-04-01"
            max="2025-12-31"
            className="form-control"
            id="date"
            name="date"
            value={date}
            placeholder="dd/mm/yyyy"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="deadline" className="form-label">
            Deadline
          </label>
          <input
            type="date"
            className="form-control"
            id="deadline"
            name="deadline"
            placeholder="dd/mm/yyyy"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>
        

        <div className="mb-3">
          <label htmlFor="user" className="form-label">
            Assigned user
          </label>
          <select
            value={user}
            className="form-select"
            onChange={(e) => setUser(e.target.value)}
          >
            {!user && <option value="">Choose user</option>}
            {users.map((el) => {
              return (
                <option key={el.id} value={el.name}>
                  {el.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mb-3 text-right">
          <Button variant="outlined" onClick={saveTask}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskEdit;
