import './search_input.css';

function SearchInput({ search, setSearch }) {
    return (
        <form>
            <input className='search_input'
                placeholder="Search tasks"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />
        </form>
      
    );
  }
  
  export default SearchInput;  