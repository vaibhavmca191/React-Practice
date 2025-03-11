import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskApp from './pages/TaskApp';
import { TasksProvider } from './components/TaskContext';
import MovingDot from './pages/MovingDot';
import FeedbackForm1 from './pages/FeedbackForm';
import Menu from './pages/Menu';
import Button from './pages/StyleButton';
import PasswordGenerator from './pages/PasswordGenrator';
import StateTutorial from './pages/counter';


function App() {
 

  return (
   <PasswordGenerator/>
  );
}



export default App;
