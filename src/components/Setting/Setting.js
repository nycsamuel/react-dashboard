import React, { Component } from 'react';
import style from './Setting.css';

import {
  TransitionMotion, 
  Motion,
  spring, 
  presets, 
} from 'react-motion';

export default class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      display: false,
    };

    console.log('checking props', this.props.activeSettings);
  }

  toggleSetting(event) {
    event.target.classList.toggle('active');    

    if (event.target.classList.contains('fa-clock-o')) {
      this.props.updateClockSetting(event);
    }
  }

  toggleSettingView(event) {
    this.setState({ 
      visible: !this.state.visible,
      display: !this.state.display,
    });
    event.target.classList.toggle('active');
  }


  render() {
    return (
      <div className="setting-container">
        <Motion style={{ x: spring(this.state.visible ? 1 : 0), y: spring(this.state.visible ? 75 : 0, { stiffness: 300, damping: 13 }) }} >
          {({x, y}) => 
            <div 
              className='setting-icon-container'
              style={{ 
                  height: `${y}px`,
                  // width: `${x}px`,
                  // backgroundColor: 'rgba(255, 255, 255, .8)',
                }} >
              <i title='Setting' onClick={this.toggleSettingView.bind(this)} className='fa fa-cog btn' id='setting-icon'></i>
              <ul style={{ opacity: `${x}` }} className={`${this.state.display ? 'show active' : 'hide'} setting-list` }>
                <li className='btn'><i title='Clock Format' onClick={this.toggleSetting.bind(this)} id='clock-icon' className={`${this.props.activeSettings.showAMPM ? 'active' : ''} fa fa-clock-o`}></i></li>
              </ul>
            </div>
          }
        </Motion>
      </div>
    );
  }
}