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
      timeAM: moment().format('h:mm A'),
      time24: moment().format('H:mm'),
      doNotShowAgain: false,
      showAMPM: true,
      location: '',
      modalDisplay: false,
    };
  }

  componentWillMount() {}

  componentDidMount() {
    this.getSettings();
    this.getQuote();
    this.updateTime();
  }

  getSettings() {
    fetch('/api/setting')
      .then(res => res.json())
      .then(data => {
        // console.log('get settings: ', data);
        if (data.length > 0) {
          this.setState({
            showAMPM: data[0].showampm,
            doNotShowAgain: data[0].donotshowagain,
            location: data[0].location,
          });
        } else {
          console.log('empty setting');
        }
      })
      .catch(err => console.log('getSettings err', err));
  }

  updateTime() {
    let intervalID = setInterval(() => {
      (this.state.showAMPM) ? this.setState({ timeAM: moment().format('h:mm A') }) : this.setState({ time24: moment().format('H:mm') });
    }, 1000*60);
  }

  getQuote() {
    fetch('/api/quotes')
      .then(res => res.json())
      .then(data => {
        this.setState({ quote: data });
      })
      .catch(err => console.log('quote err', err));
  }

  updateClockSetting(event) {
    this.setState({ showAMPM: !this.state.showAMPM }, this.updateSettings);
  }

  updateSettings() {
    // change setting in database
    let payload = {
      location: this.state.location,
      donotshowagain: this.state.doNotShowAgain,
      showampm: this.state.showAMPM,
    };
    fetch('/api/setting', {
      headers: { 'Content-Type' : 'application/json'},
      method: 'post',
      body: JSON.stringify(payload),
    })
      .then()
      .catch(err => console.log('failed post for modifying setting', err));
  }

  toggleModal(event) {
    this.setState({ modalDisplay: !this.state.modalDisplay });
  }

  modalChoice(event) {
    if (event.target.dataset.choice === 'yes') {
      console.log('update setting');
      this.setState({ doNotShowAgain: true }, this.updateSettings);
    } else if (event.target.dataset.choice === 'no') {
      this.setState({ location: '', doNotShowAgain: false }); 
    } else {
      console.log('modalChoice exceptions'); // catch exceptions
    }
    this.setState({ modalDisplay: !this.state.modalDisplay }); // close modal
  }

  saveLocation(val) {
    console.log('save location function', val);
    this.setState({ location: val });
  }
  
  render() {
    let activeSettings = {
      doNotShowAgain: this.state.doNotShowAgain,
      showAMPM: this.state.showAMPM,
    };

    return (
      <div className="app-container">
        <Wallpaper 
          quote={this.state.quote} 
          time={this.state.showAMPM ? this.state.timeAM : this.state.time24}
          location={this.state.location}
          activeSettings={activeSettings}
          updateClockSetting={this.updateClockSetting.bind(this)}
          toggleModal={this.toggleModal.bind(this)}
          saveLocation={this.saveLocation.bind(this)}
        />
        <div className={`modal ${this.state.modalDisplay ? 'show' : 'hide'}`}>
          <h3>Would you like to save your location?</h3>
          <a className="modalBtn" onClick={this.modalChoice.bind(this)} data-choice="yes">YES</a>
          <a className="modalBtn" onClick={this.modalChoice.bind(this)} data-choice="no">NO</a>
        </div>

      </div>
    );
  }
}