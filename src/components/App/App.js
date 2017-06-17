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
    };
  }

  componentDidMount() {
    this.getQuote();
    this.updateTime();
  }

  updateTime() {
    let intervalID = setInterval(() => {
      this.setState({ time: moment().format('h:mm A') });
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
  
  render() {
    return (
      <div className="app-container">
        <Wallpaper 
          quote={this.state.quote} 
          time={this.state.time}
        />
      </div>
    );
  }
}