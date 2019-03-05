import React, { Component } from 'react';
import './TipPicker.css';

//Material-UI
import Paper from '@material-ui/core/Paper';

class TipPicker extends Component {
  render() {
    return (
      <div className="TipPicker">
        <Paper>
          <h4>I want to:</h4>
        </Paper>
      </div>
    );
  }
}

export default TipPicker;