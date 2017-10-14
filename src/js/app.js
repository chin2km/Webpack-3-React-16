import React, { Component } from 'react';
import { render } from 'react-dom';

import mindBlown from '../assets/mind-blown.gif'

import '../css/base.less';

export default class Hello extends Component {
  render() {
    return (
      <div>
        <h1>Hello from React fibre!</h1>
        <img className="mind-blown" src={mindBlown} />
      </div>
    );
  }
}

render(<Hello />, document.getElementById('root'));