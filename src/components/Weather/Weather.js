import React, { Component } from 'react';
import style from './Weather.css';

export default class Weather extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      temp: '',
      icon: '',
    };
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
        // console.log(data.weather[0].icon);
        this.setState({ 
          name: data.name,
          temp: this.convertToFah(data.main.temp),
          icon: this.iconURL(data.weather[0].icon),
        });
      })
      .catch(error => console.log('getWeather error', error));

    console.log('after fetch');
  }

  iconURL(icon) {
    const iconURL = 'http://openweathermap.org/img/w/';
    return `${iconURL}${icon}.png`;
  }

  convertToFah(k) {
    return ((k - 273.15) * 1.80 + 32).toFixed(1);
  }

  render() {
    return (
      <div className="weather-wrapper">
        <div className="weather-info">
          <h1>{this.state.name}</h1>
          <p><img src={this.state.icon} alt="Weather Icon"/> {this.state.temp} <span id="fahrenheit">&#8457;</span></p>
        </div>

        <div className="search-container">
          <a className="btn"><i className="fa fa-search" id="search-icon"></i></a>
          <input type="text" id="weather-input"/>
        </div>
      </div>
    );
  }
}