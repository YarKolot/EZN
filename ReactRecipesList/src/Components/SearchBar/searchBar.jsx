import React from 'react';
import './searchBar.css';

function SearchBar({ dispatch }) {
  const handleSearch = (event) => {
    dispatch({ type: 'SEARCH_RECIPE', payload: event.target.value });
  };

  return (
    <input
        className='input'
        type="text"
        placeholder="Search by title"
        onChange={handleSearch}
      />
  );
}

export default SearchBar;
