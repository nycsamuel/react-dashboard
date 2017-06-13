import React from 'react';
import style from './Time.css';

const Time = props => {
  return (
    <div className="time-container">
      <h1 className="text-shadow">{props.time}</h1>
    </div>
  );
}

export default Time;