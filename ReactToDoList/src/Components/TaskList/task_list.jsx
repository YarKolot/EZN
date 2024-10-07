import './task_list.css';

function TaskList({ todo, search, handleDelete }) {
    return (
      <ul className='tasklist'>
        {todo
          .filter((item) => item.toLowerCase().includes(search.toLowerCase()))
          .map((item, index) => (
            <li key={index}>
                <div>{item}</div>
                <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
      </ul>
    );
}

export default TaskList;