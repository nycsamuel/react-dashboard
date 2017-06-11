import React, { Component } from 'react';
import style from './Weather.css';

export default class Weather extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      temp: '',
      icon: '',
      display: 'hide',
    };
  }

  getWeather(val) {
    fetch(`/api/weather/${val}`)
      .then(res => res.json())
      .then(data => {
        console.log('weather data', data);
        // console.log(data.weather[0].icon);
        this.setState({ 
          name: data.name,
          temp: this.convertToFah(data.main.temp),
          icon: this.iconURL(data.weather[0].icon),
          display: 'true',
        });
      })
      .catch(error => console.log('getWeather error', error));
  }

  handleKeyPress(event) {
    let weatherInput = document.getElementById('weather-input');
    if (event.key === 'Enter') {
      this.getWeather(weatherInput.value);
    } else if (event.type === 'click') {
      // check if the input is empty
      if (weatherInput.value.trim() !== '') {
        this.getWeather(weatherInput.value);
      }
    }
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
        <div className="search-container">
          <a className="btn" onClick={this.handleKeyPress.bind(this)} ><i className="fa fa-search" id="search-icon"></i></a>
          <input 
            type="text" 
            placeholder="Search City or Zip Code" 
            id="weather-input"
            onKeyPress={this.handleKeyPress.bind(this)}
          />
        </div>
        
        <div className="weather-info">
          <span className="city-name">{this.state.name}</span>
          <span className={`${this.state.display} temp-info`}><img id="weather-icon" src={this.state.icon} alt="Weather Icon"/><span id="temp-value">{this.state.temp}</span><span id="fahrenheit">&#8457;</span></span>
        </div>
      </div>
    );
  }
}