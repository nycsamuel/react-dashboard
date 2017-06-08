import React, { Component } from 'react';
import style from './App.css';
import './normalize.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = { test: "test" };
  }

  render() {
    return (
      <div className="container">
        <h1>HELLO WORLD!</h1>
      </div>
    );
  }
}