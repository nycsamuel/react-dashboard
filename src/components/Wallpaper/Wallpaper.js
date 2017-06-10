import React, { Component } from 'react';
import style from './Wallpaper.css';

export default class Wallpaper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // height: this.props.height,
      // width: this.props.width,
      // backgroumdImage: this.props.wallpaperImg,
    };
  }

  componentDidMount() {
    this.updateWallpaper();
  }

  updateWallpaper() {
    let img = this.state.backgroumdImage;
    let wp = document.getElementById('wallpaper');
    wp.style.backgroundImage = `url(${this.props.wallpaperImg})`;
    // console.log('wallpaper', img);
    // console.log('wp', wp);
  }

  render() {
    return (
      <div id="wallpaper"></div>
    );
  }
}