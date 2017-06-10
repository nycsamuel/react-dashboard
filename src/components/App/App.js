import React, { Component } from 'react';
import style from './App.css';
import './normalize.css';

import Wallpaper from '../Wallpaper/Wallpaper.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      winHeight: `${window.innerHeight}px`,
      winWidth: `${window.innerWidth}px`,
    };

    this.updateWindowSize = this.updateWindowSize.bind(this);
  }

  componentDidMount() { 
    window.addEventListener('resize', this.updateWindowSize);
  }

  updateWindowSize(event) {
    this.setState({
      winHeight: `${event.srcElement.innerHeight}px`,
      winWidth: `${event.srcElement.innerWidth}px`,
    });
  }

  render() {
    return (
      <div className="container">
        <Wallpaper 
          height={this.state.winHeight}
          width={this.state.winWidth}
        />
      </div>
    );
  }
}