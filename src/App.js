import React, { useEffect, useState } from 'react';
import Tasks from './components/Tasks';
import TaskEdit from './components/TaskEdit';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import './components/style.css';
import * as moment from 'moment';

const App = () => {
  // const [render, setRender] = useState(true);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Learn React',
      desc: 'Learn React',
      date: '06/03/2022',
      deadline: '12/03/2022',
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
      deadline: '25/04/2022',
      user: 'B',
      complete: false,
    },
  ]);

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

  const onSaveTask = ({ title, desc, date, deadline, user }) => {
    console.log('saving tasks');
    setTasks([
      {
        title: title,
        desc: desc,
        date: moment(date).format('D/MM/YYYY'),
        deadline: moment(deadline).format('D/MM/YYYY'),
        id: Date.now(),
        user: user,
        complete: false,
      },
      ...tasks,
    ]);
  };

  const onDeleteTask = (idToDelete) => {
    setTasks((prevState) => prevState.filter(({ id }) => id !== idToDelete));
  };

  function compareDeadline(a, b) {
    if (a.deadline < b.deadline) return -1;
    if (a.deadline > b.deadline) return 1;
    return 0;
  }

  function compare(a, b) {
    if (a.user < b.user) return -1;
    if (a.user > b.user) return 1;
    return 0;
  }

  useEffect((deadline, title) => {
    var x = new moment();
    var y = moment([2022, 4, 24]);
    var duration = moment(y.diff(x)).format('mm');
    console.log(moment(x).format('dddd, MMMM Do YYYY, h:mm:ss a'));
    console.log(duration);
    if (moment(duration).isSameOrAfter('30', 'minute') === true) {
      alert(title + 'need to do');
    }
  }, []);

  const updateDeadline = (deadline, complete) => {
    let currentDate = new Date();
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();
    let date = cDay + '/' + cMonth + '/' + cYear;
    if (deadline <= date && complete === false) {
      return 'red';
    }
  };

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
        <Button
          variant="text"
          onClick={() => {
            let task = tasks.sort(compare);
            setTasks([...task]);
          }}
        >
          Sort by user
        </Button>
        <Button
          variant="text"
          onClick={() => {
            let task = tasks.sort(compareDeadline);
            setTasks([...task]);
          }}
        >
          Sort by deadline
        </Button>
        <Tasks
          tasks={tasks}
          onStatus={onStatus}
          onDeleteTask={onDeleteTask}
          updateDeadline={updateDeadline}
        ></Tasks>
      </div>
    </div>
  );
};

export default App;
