import React, { Component } from 'react';
import style from './App.css';
import './normalize.css';

import Wallpaper from '../Wallpaper/Wallpaper.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  
  render() {
    return (
      <div className="app-container">
        <Wallpaper />
      </div>
    );
  }
}