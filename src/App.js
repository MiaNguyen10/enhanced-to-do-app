import React, { useState } from 'react';
import Tasks from './components/Tasks';
import TaskEdit from './components/TaskEdit';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import './components/style.css';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Learn React',
      desc: 'Learn React',
      date: '06/03/2022',
      deadline: '07/03/2022',
      user: 'C',
      complete: false,
    },
    {
      id: 2,
      title: 'Learn React Hook',
      desc: 'Learn React hook',
      date: '05/03/2022',
      deadline: '10/03/2022',
      user: 'A',
      complete: true,
    },
    {
      id: 3,
      title: 'Learn MUI',
      desc: 'Learn MUI',
      date: '12/04/2022',
      deadline: '24/04/2022',
      user: 'B',
      complete: false,
    },
  ]);

  const users = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
  ];

  const onStatus = (task) => {
    console.log('completing task');
    setTasks(
      tasks.map((chkTask) => {
        chkTask.complete =
          task.id === chkTask.id ? !chkTask.complete : chkTask.complete;
        return chkTask;
      })
    );
  };

  const [showTaskEdit, setShowTaskEdit] = useState(false);

  const onSaveTask = ({ title, desc, date, deadline }) => {
    console.log('saving tasks');
    setTasks([
      {
        title: title,
        desc: desc,
        date: date,
        deadline: deadline,
        id: Date.now(),
        complete: false,
      },
      ...tasks,
    ]);
  };

  const onDeleteTask = (idToDelete) => {
    setTasks((prevState) => prevState.filter(({ id }) => id !== idToDelete));
  };

  const sortByDeadline = (tasks) => {
    tasks.sort((a, b) => (
      a.deadline
        .split('/')
        .reverse()
        .join()
        .localeCompare(b.deadline.split('/').reverse().join()))
    );
  };

  function compare(a, b) {
    if (a.user < b.user)
      return -1;
    if (a.user > b.user)
      return 1;
    return 0;
  }

  const updateDeadline = (deadline, isComplete) => {
    if (deadline < Date.now() && isComplete === false) {
      return "red";
    }
  }


  return (
    <div>
      <h2 className="text-center">Enhanced to do list</h2>

      <div className="container">
        <div className="col-12 text-right gx-3 card-element">
          <button
            className="btn btn-primary"
            onClick={() => setShowTaskEdit(!showTaskEdit)}
          >
            {!showTaskEdit && 'New'}
            {showTaskEdit && '➖'}
          </button>
        </div>
        {showTaskEdit && <TaskEdit task={{}} onSaveTask={onSaveTask} />}
        <Button variant="text" onClick={tasks.sort(compare)}>
          Sort by user
        </Button>
        <Button variant="text" onClick={() => sortByDeadline(tasks)}>Sort by deadline</Button>
        <Tasks
          tasks={tasks}
          users={users}
          onStatus={onStatus}
          onDeleteTask={onDeleteTask}
          updateDeadline={updateDeadline}
        ></Tasks>
      </div>
    </div>
  );
};

export default App;
