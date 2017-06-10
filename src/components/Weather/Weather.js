import React, { Component } from 'react';
import style from './Weather.css';

export default class Weather extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.getWeather();
  }

  getWeather() {
    console.log('make api call to server');
    fetch('/api/weather')
      .then(res => res.json())
      .then(data => {
        console.log('weather data', data);
      })
      .catch(error => console.log('getWeather error', error));

    console.log('after fetch');
  }

  render() {
    return (
      <div></div>
    );
  }
}