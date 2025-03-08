import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskApp from './pages/TaskApp';
import { TasksProvider } from './components/TaskContext';
import MovingDot from './pages/MovingDot';
import FeedbackForm1 from './pages/FeedbackForm';


function App() {
 

  return (
   <FeedbackForm1/>
  );
}

export default App;
