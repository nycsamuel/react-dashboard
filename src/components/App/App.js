import React, { Component } from 'react';
import style from './App.css';
import './normalize.css';

import Wallpaper from '../Wallpaper/Wallpaper.js';

// var wallpaperStyle = {
//   backgroundImage: 'url("http://images.all-free-download.com/images/graphiclarge/water_waterfall_nature_214751.jpg")',
//   height: `${window.innerHeight}px`,
//   width: `${window.innerWidth}px`,
// };

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      winHeight: `${window.innerHeight}px`,
      winWidth: `${window.innerWidth}px`,
    };
    // wallpaperStyle = {
    //   backgroundImage: 'url("http://images.all-free-download.com/images/graphiclarge/water_waterfall_nature_214751.jpg")',
    //   height: this.state.winHeight,
    //   width: this.state.winWidth,  
    // };

    this.updateWindowSize = this.updateWindowSize.bind(this);
  }

  componentDidMount() { 
    window.addEventListener('resize', this.updateWindowSize);
  }

  updateWindowSize(event) {
    // console.log(event.srcElement.innerWidth);
    this.setState({
      winHeight: `${event.srcElement.innerHeight}px`,
      winWidth: `${event.srcElement.innerWidth}px`,
    });

    // console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <Wallpaper 
          height={this.state.winHeight}
          width={this.state.winWidth}
          wallpaperImg="http://images.all-free-download.com/images/graphiclarge/water_waterfall_nature_214751.jpg"
        />
      </div>
    );
  }
}