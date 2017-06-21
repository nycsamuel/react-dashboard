import React from 'react';
import style from './Google.css';

const Google = () => {
  return (
    <div className="google-container">
      <input 
        id="google-search-input"
        type="text" 
        className="search-google" 
        placeholder='What would you like to search?'
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            let search = document.getElementById('google-search-input');
            if (search.value.trim() === '') return;

            const googleURL = 'https://www.google.com/#q=';
            let query = search.value.split(' ').join('+');
            query = (query[query.length - 1] === '+') ? query.slice(0, -1) : query;
            window.open(`${googleURL}${query}`, '_blank');
            search.value = '';
          }
        }}
      />
    </div>
  );
}

export default Google;