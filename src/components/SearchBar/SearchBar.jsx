import React from 'react';
import PropTypes from 'prop-types';
import style from './SearchBar.module.scss';

const SearchBar = ({ handleInput, handleSubmit, searchValue }) => {
  return (
    <form onSubmit={handleSubmit} className={style.searchForm}>
      <input
        type="search"
        value={searchValue}
        onChange={handleInput}
        required
      />
      <button type="submit">Search</button>
    </form>
  );
};

SearchBar.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default SearchBar;
