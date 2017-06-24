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
      time: moment().format('h:mm A'),
      doNotShowAgain: false,
      showAMPM: true,
      location: '',
    };
  }

  componentDidMount() {
    this.getSettings();
    this.getQuote();
    this.updateTime();
  }

  getSettings() {
    fetch('/api/setting')
      .then(res => res.json())
      .then(data => {
        console.log('data setting', data);
        this.setState({
          showAMPM: data.showampm,
          doNotShowAgain: data.donotshowagain,
          location: data.location,
        });
      })
      .catch(err => console.log('getSettings err', err));
  }

  updateTime() {
    let intervalID = setInterval(() => {
      this.setState({
        time: (this.state.showAMPM) ? moment().format('h:mm A') : moment().format('H:mm'),
      });
    }, 1000*60);
  }

  getQuote() {
    fetch('/api/quotes')
      .then(res => res.json())
      .then(data => {
        console.log('quote data', data);
        this.setState({ quote: data });
      })
      .catch(err => console.log('quote err', err));
  }

  updateClockSetting(event) {
    this.setState({ showAMPM: !this.state.showAMPM }, () => {
      this.setState({
        time: (this.state.showAMPM) ? moment().format('h:mm A') : moment().format('H:mm'),
      });
    });
    // change setting in database
    let payload = this.state;
    fetch('/api/setting', {
      headers: { 'Content-Type' : 'application/json'},
      method: 'post',
      body: JSON.stringify(payload),
    })
      .then(console.log('settings changed', data))
      .catch(err => console.log('failed post for modifying setting', err));
  }
  
  render() {
    return (
      <div className="app-container">
        <Wallpaper 
          quote={this.state.quote} 
          time={this.state.time}
          updateClockSetting={this.updateClockSetting.bind(this)}
        />
      </div>
    );
  }
}