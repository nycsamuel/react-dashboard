import React, { Component } from 'react';
import style from './Wallpaper.css';

export default class Wallpaper extends Component {
  constructor(props) {
    super(props);
    this.state = {}; // somehow the backgroundImage doesn't work if there is no state.
  }

  componentDidMount() {
    this.updateWallpaper();
  }

  updateWallpaper() {
    let img = this.state.backgroumdImage;
    let wp = document.getElementById('wallpaper');
    wp.style.backgroundImage = `url(${this.props.wallpaperImg})`;
  }

  render() {
    return (
      <div id="wallpaper"></div>
    );
  }
}