import './App.css';
import { useState } from 'react';
import TaskList from './Components/TaskList/task_list';
import TaskForm from './Components/TaskForm/task_form';
import SearchInput from './Components/SearchInput/search_input';

function App() {
  const [todo, setTodo] = useState([]);
  const [search, setSearch] = useState("");

  const addTask = (newTask) => {
    setTodo([...todo, newTask]);
  };

  const handleDelete = (indexToDelete) => {
    const updatedTasks = todo.filter((_, index) => index !== indexToDelete);
    setTodo(updatedTasks);
  };

  return (
    <div className='main'>
      <h1>TO DO LIST</h1>
      <SearchInput search={search} setSearch={setSearch} />

      <TaskList todo={todo} search={search} handleDelete={handleDelete} />

      <TaskForm addTask={addTask} />
    </div>
  );
}

export default App;
