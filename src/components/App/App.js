import React, { Component } from 'react';
import style from './App.css';
import './normalize.css';

import moment from '../../vendor/moment.js';

import Wallpaper from '../Wallpaper/Wallpaper.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      quote: '',
      amSetting: true,
      time: moment().format('h:mm A'),
      time2: moment().format('H:mm'),
    };
  }

  componentDidMount() {
    this.getQuote();
    this.updateTime();
  }

  updateTime() {
    let intervalID = setInterval(() => {
      this.state.amSetting ? this.setState({ time: moment().format('h:mm A') }) : this.setState({ time2: moment().format('H:mm') })
    }, 1000*60);
  }

  getQuote() {
    // console.log(moment().format('h:mm'))
    fetch('/api/quotes')
      .then(res => res.json())
      .then(data => {
        console.log('quote data', data);
        this.setState({ quote: data });
      })
      .catch(err => console.log('quote err', err));
  }

  updateClockSetting(event) {
    // console.log('triggered clock setting!', event);
    this.setState({ amSetting: !this.state.amSetting });
  }
  
  render() {
    return (
      <div className="app-container">
        <Wallpaper 
          quote={this.state.quote} 
          time={this.state.amSetting ? this.state.time : this.state.time2}
          updateClockSetting={this.updateClockSetting.bind(this)}
        />
      </div>
    );
  }
}