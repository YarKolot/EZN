import { useState } from 'react';
import './task_form.css';

function TaskForm({ addTask }) {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className='task_form'>
      <input 
        placeholder="New task"
        value={newTask} 
        onChange={(event) => setNewTask(event.target.value)} 
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm;