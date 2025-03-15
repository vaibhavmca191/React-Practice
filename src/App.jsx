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
import Advancepass from './pages/UseMemo';
import Memo from './pages/UseMemo';
import UseCallBack from './pages/UseCallBack';
import Product from './pages/Product';
import ProductTab from './pages/ProductTab';
import MsgBox from './pages/MsgBox';




function App() {
 
  return (
    <>
    <MsgBox userName="vaibhav" textColor="yellow"/>
    <MsgBox userName="sanket" textColor="red"/>
    <MsgBox userName="karan" textColor="blue"/>
   <ProductTab/>   
    </> 
  );
}

export default App;
