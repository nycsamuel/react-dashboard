import React, { Component } from 'react';
import style from './Weather.css';

export default class Weather extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      temp: '',
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
        // this.setState({ currentWeather: data });
        this.setState({ 
          name: data.name,
          temp: this.convertToFah(data.main.temp),
        });
      })
      .catch(error => console.log('getWeather error', error));

    console.log('after fetch');
  }

  convertToFah(k) {
    return ((k * 9/5) - 459.67).toFixed(1);
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <p>{this.state.temp}<span className="fa fa-sun-o"></span></p>
      </div>
    );
  }
}