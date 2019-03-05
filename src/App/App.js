import React, { Component } from 'react';
import './App.css';

//Components
import Header from '../Header/Header';
import TipPicker from '../TipPicker/TipPicker';

//Material-UI
//put main page on Paper
import Paper from '@material-ui/core/Paper';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Paper>
        <div className="Header">
          <Header />
        </div>
        <div className="TipPicker">
          <TipPicker />
        </div>
      </Paper>  
      </div>
    );
  }
}

export default App;