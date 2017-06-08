import React, { Component } from 'react';
import style from './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = { test: "test" };
  }

  render() {
    return (
      <div className="test">
        <h1>TESTING</h1>
      </div>
    );
  }
}