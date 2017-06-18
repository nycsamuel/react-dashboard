// functional stateless react component
import React from 'react';
import style from './Quote.css';

const Quote = props => {
  return (
    <div className="quote-container">
      <h1 className="q-text text-shadow">{props.quote.quoteText}</h1>
      <h4 className="q-author text-shadow">{props.quote.quoteAuthor}</h4>
    </div>
  );
};

export default Quote;