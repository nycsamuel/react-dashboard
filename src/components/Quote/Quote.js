// functional stateless react component
import React from 'react';
import style from './Quote.css';

const Quote = props => {
  return (
    <div className="quote-container">
      <h1 className="q-text">{props.quote.quoteText}</h1>
    </div>
  );
};

export default Quote;