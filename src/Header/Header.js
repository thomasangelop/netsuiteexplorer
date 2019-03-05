import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1>NetSuite Explorer</h1>
        <h4>Find the useful help tips without digging through NetSuite Help Documentation.</h4>
      </div>
    );
  }
}

export default Header;