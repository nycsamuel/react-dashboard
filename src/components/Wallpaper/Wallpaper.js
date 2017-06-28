import React, { Component } from 'react';
import style from './Wallpaper.css';

import Google from '../Google/Google.js';
import Quote from '../Quote/Quote.js';
import Setting from '../Setting/Setting.js';
import Time from '../Time/Time.js';
import Weather from '../Weather/Weather.js';

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

    fetch('https://api.desktoppr.co/1/wallpapers/random')
      .then(response => response.json())
      .then((data) => {
        // console.log('data', data.response.image.url);
        wp.style.backgroundImage = `url(${data.response.image.url})`;
      })
      .catch(error => console.log('updateWallpaper error', error));
  }

  render() {
    return (
      <div className="wallpaper-container">
        <div id="wallpaper"></div>

        <Weather 
          toggleModal={this.props.toggleModal} 
          saveLocation={this.props.saveLocation}
        />
        <Setting 
          updateClockSetting={this.props.updateClockSetting} 
          activeSettings={this.props.activeSettings}
        />
        <Time time={this.props.time} />
        <Quote quote={this.props.quote} />

        <Google />

      </div>
    );
  }
}