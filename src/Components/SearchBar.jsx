import React, { useState } from 'react';
import './SearchBar.css'; // Create this CSS file for styling

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for products..." 
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
