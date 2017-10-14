import React, { Component } from 'react';
import { render } from 'react-dom';
import '../css/base.css';

export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello from React fibre!
      </div>
    );
  }
}

render(<Hello />, document.getElementById('root'));