import React, { useState } from 'react';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

const TaskEdit = ({ onSaveTask, users }) => {
  const [date, setDate] = useState(new Date('2022-04-10'));
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [deadline, setDeadline] = useState(new Date('2022-04-10'));
  const [user, setUser] = useState('');

  const saveTask = (e) => {
    e.preventDefault();
    onSaveTask({ title: title, desc: desc, date: date, deadline: deadline, user:user });

    setDesc('');
    setDate('');
    setTitle('');
    setDeadline('');
    setUser('');
  };

  return (
    <div>
      <div className="mb-3">
        <label for="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          placeholder="Enter title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label for="desc" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="desc"
          value={desc}
          placeholder="Enter description"
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <DesktopDatePicker
              inputFormat="dd/MM/yyyy"
              label="Datetime"
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
            <DesktopDatePicker
              inputFormat="dd/MM/yyyy"
              label="Deadline"
              value={deadline}
              onChange={(newValue) => {
                setDeadline(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
      </div>

      <select className="form-select" aria-label="Default select example" onChange={(e) => setUser(e.target.value)}>
        <option selected>Assigned user</option>
        {users.map(user => (
          <option value={user.id}>{user.name}</option>
        ))}
      </select>
      <div className="mb-3 text-right">
        <button className="button dark" onClick={saveTask}>
          Save
        </button>
      </div>
    </div>
  );
};

export default TaskEdit;
