import React from 'react';
import style from './Search.css';

const Search = props => {
  return (
    <div className="search-container">
      <input 
        type="text" 
        placeholder="Search City or Zip Code" 
        id="weather-input"
      />
      <a 
        className="btn" >
        <i className="text-shadow fa fa-search" id="search-icon"></i>
      </a>
    </div>
  );
};

export default Search;