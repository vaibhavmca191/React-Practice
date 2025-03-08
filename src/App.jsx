import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskApp from './pages/TaskApp';
import { TasksProvider } from './components/TaskContext';

function App() {
 

  return (
    <TasksProvider>
      <TaskApp />
    </TasksProvider>
  );
}

export default App;
