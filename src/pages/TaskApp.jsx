import { useReducer } from 'react';
import AddTask from '../components/AddTask.jsx';
import {TaskList}  from '../components/TaskList.jsx';


export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({ type: 'added', id: nextId++, text });
  }

  function handleChangeTask(task) {
    dispatch({ type: 'changed', task });
  }

  function handleDeleteTask(taskId) {
    dispatch({ type: 'deleted', id: taskId });
  }

  return (
    <>
      <h1>City </h1>
      
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
    </>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added':
      return [...tasks, { id: action.id, text: action.text, done: false }];
    case 'changed':
      return tasks.map(t => (t.id === action.task.id ? action.task : t));
    case 'deleted':
      return tasks.filter(t => t.id !== action.id);
    default:
      throw new Error('Unknown action: ' + action.type);
  }
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Pune', done: true },
  { id: 1, text: 'Parbhani', done: false },
  { id: 2, text: 'Banglore', done: false }
];
