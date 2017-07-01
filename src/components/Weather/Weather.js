import React, { Component } from 'react';
import style from './Weather.css';

import {
  TransitionMotion, 
  Motion,
  spring, 
  presets, 
} from 'react-motion';

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      temp: '',
      icon: '',
      weatherDisplay: 'hide',
      searchDisplay: 'hide',
      visible: false,
    };
    // console.log('weather props', this.props);
  }

  componentWillUpdate(nextProps, nextState) {
    (nextProps.location !== this.props.location) ? this.getWeather(nextProps.location) : console.log('location not found');
  }

  getWeather(val) {
    this.props.saveLocation(val); // save location to app component
    // check val is zip or city
    let param = isNaN(Number(val)) ? 'city' : 'zip';
    console.log('param', param);
    fetch(`/api/weather/${param}/${val}`)
      .then(res => res.json())
      .then(data => {
        console.log('weather data', data);
        // console.log(data.weather[0].icon);
        this.setState({ 
          name: data.name,
          temp: this.convertToFah(data.main.temp),
          icon: this.iconURL(data.weather[0].icon),
          weatherDisplay: 'show',
        });
      })
      .catch(error => console.log('getWeather error', error));
  }

  handleKeyPress(event) {
    let weatherInput = document.getElementById('weather-input');
    if (event.key === 'Enter') {
      this.getWeather(weatherInput.value);
      weatherInput.value = ''; // clear
      this.setState({ visible: false });

      event.currentTarget.previousSibling.children[0].children[0].classList.toggle('active')
      this.props.toggleModal();
    } else if (event.type === 'click') {
      // check if the input is empty
      event.currentTarget.children[0].classList.toggle('active');
      
      if (weatherInput.value.trim() !== '') {
        this.getWeather(weatherInput.value);
        weatherInput.value = ''; // clear
        this.setState({ visible: false });
        this.props.toggleModal();
      }

      this.setState({ visible: !this.state.visible }); // toggle visibility
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
      <div className="weather-container">
        <div className="search-container">
          <a 
            className="btn" 
            onClick={this.handleKeyPress.bind(this)} >
            <i title='Weather' className="fa fa-thermometer-4" id="thermo-icon"></i>
          </a>
        </div>
        
        <Motion style={{ x: spring(this.state.visible ? 300 : 0) }} >
        {({x}) => 
          <input 
            type="text" 
            placeholder="Search City or Zip Code" 
            id="weather-input"
            onKeyPress={this.handleKeyPress.bind(this)}
            style={{ width: `${x}px` }}
          />
        }
        </Motion>
                
        <div className="weather-info">
          <span className="city-name text-shadow">{this.state.name}</span>
          <span className={`${this.state.weatherDisplay} weather-icon-wrapper`}><img id="weather-icon" src={this.state.icon} alt="Weather Icon"/></span> <br/>
          <span className={`${this.state.weatherDisplay} temp-info text-shadow`}><span id="temp-value">{this.state.temp}</span><span id="fahrenheit">&#8457;</span></span>
        </div>
      </div>
    );
  }
}