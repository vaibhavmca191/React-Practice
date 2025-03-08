import { useState } from 'react';
import { useTasksDispatch } from './TaskContext';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();

  function handleAddClick() {
    if (text.trim() !== '') {
      dispatch({ type: 'added', id: Date.now(), text }); 
      setText('');
    }
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task..."
      />
      <button onClick={handleAddClick}>Add Task</button>
    </div>
  );
}
