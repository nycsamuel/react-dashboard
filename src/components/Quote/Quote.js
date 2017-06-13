// functional stateless react component
import React from 'react';
import style from './Quote.css';

const Quote = props => {
  return (
    <div className="quote-container">
      <h3 className="q-text">{props.quote.quoteText}</h3>
    </div>
  );
};

export default Quote;