import React, { useState } from React;
import { useToast } from 'react-toast-notification';
import './SearchBar.module.css';

const SearchBar = ({ onsubmit }) => {
  const [query, setQuery] = useState('');
  const { addToast } = useToast();

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      addToast('Enter serach query', { appearance: 'warning' });
      return;
    }
    onSubmit(query);
    setQuery('');
  }

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input type="text"
          autoComplete='off'
          autoFocus
          placeholder='Search images and photos'
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
    </header>
  );
  
};

export default SearchBar;

