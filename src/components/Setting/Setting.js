import React, { Component } from 'react';
import style from './Setting.css';

import {
  TransitionMotion, 
  Motion,
  spring, 
  presets, 
} from 'react-motion';

export default class Setting extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      display: false,
    };
  }

  toggleSetting() {
    console.log('heyyy hit!');
  }

  toggleSettingView(event) {
    this.setState({ 
      visible: !this.state.visible,
      display: !this.state.display,
    });
    // console.log(event.target.classList);
    event.target.classList.toggle('active');
  }


  render() {
    return (
      <div className="setting-container">
        <Motion style={{ x: spring(this.state.visible ? 1 : 0), y: spring(this.state.visible ? 100 : 0, { stiffness: 300, damping: 13 }) }} >
          {({x, y}) => 
            <div 
              className='setting-icon-container'
              style={{ 
                  height: `${y}px`,
                  // width: `${x}px`,
                  // backgroundColor: 'rgba(255, 255, 255, .8)',
                }} >
              <i onClick={this.toggleSettingView.bind(this)} className='fa fa-cogs btn' id='setting-icon'></i>
              <ul style={{ opacity: `${x}` }} className={`${this.state.display ? 'show active' : 'hide'} setting-list` }>
                <li onClick={this.toggleSetting.bind(this)} className='btn'><i id='clock-icon' className="fa fa-clock-o"></i></li>
                <li onClick={this.toggleSetting.bind(this)} className='btn'><i id='thermo-icon' className="fa fa-thermometer-empty"></i></li>
              </ul>
            </div>
          }
        </Motion>
      </div>
    );
  }
}