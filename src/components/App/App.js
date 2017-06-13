import React, { Component } from 'react';
import style from './App.css';
import './normalize.css';

import Wallpaper from '../Wallpaper/Wallpaper.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      quote: '',
    };
  }

  componentDidMount() {
    this.getQuote();
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
  
  render() {
    return (
      <div className="app-container">
        <Wallpaper quote={this.state.quote} />
      </div>
    );
  }
}