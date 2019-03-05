import React, { Component } from 'react';
import './App.css';

//Components
import MainBox from '../MainBox/MainBox';

class App extends Component {
  render() {
    return (
      <div className="App">
      <MainBox /> 
      </div>
    );
  }
}

export default App;