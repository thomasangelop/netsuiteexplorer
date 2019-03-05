import React, { Component } from 'react';
import './MainBox.css';

//Components
import Header from '../Header/Header';
import TipPicker from '../TipPicker/TipPicker';

//Material-UI
//put main page on Paper
import Paper from '@material-ui/core/Paper';

class MainBox extends Component {
  render() {
    return (
      <div className="MainBox">
      <Paper elevation={5}>
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

export default MainBox;