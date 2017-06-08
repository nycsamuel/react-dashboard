import React, { Component } from 'react';
import style from './App.css';
import './normalize.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      windowHeight: `${window.innerHeight}px`,
      windowWidth: `${window.innerWidth}px`,
    };
    const wallpaper = document.getElementById('wallpaper');
    this.handleWindowResize = this.handleWindowResize.bind(this);
  }

  componentDidMount() { 
    window.addEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize(event) {
    this.setState({
      windowHeight: `${window.innerHeight}px`,
      windowWidth: `${window.innerWidth}px`, 
    });
  }

  render() {
    return (
      <div className="container">
        <div id="wallpaper"></div>
        <h1>HELLO WORLD</h1>
      </div>
    );
  }
}