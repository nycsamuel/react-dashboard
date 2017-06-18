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

  toggleSettingView() {
    this.setState({ 
      visible: !this.state.visible,
      display: !this.state.display,
    });
  }

  render() {
    return (
      <div className="setting-container">
        <Motion style={{ x: spring(this.state.visible ? 100 : 0), y: spring(this.state.visible ? 200 : 0) }} >
          {({x, y}) => 
            <div 
              className='setting-icon-container'
              onClick={this.toggleSettingView.bind(this)} 
              style={{ 
                  width: `${x}px`,
                  height: `${y}px`,
                  // backgroundColor: 'rgba(255, 255, 255, .8)',
                }} >
              <i className="fa fa-cogs" id='setting-icon'></i>
              <ul className={`${this.state.display ? 'show' : 'hide'} setting-list` }>
                <li>one</li>
                <li>two</li>
                <li>three</li>
              </ul>
            </div>
          }
        </Motion>
      </div>
    );
  }
}