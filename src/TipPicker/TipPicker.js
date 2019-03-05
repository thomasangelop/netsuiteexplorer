import React, { Component } from 'react';
import './TipPicker.css';
import PropTypes from 'prop-types';

//Material-UI
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

//Create style configurations to pass to component below
const styles = theme => ({
    mainPaper: {
        width: 200,
        maring: 100,
        padding: 100,
        color: 'lightgreen',
    }
})

class TipPicker extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="TipPicker">
        <Paper className={classes.mainPaper} elevation={5}>
          <h4>I want to:</h4>
        </Paper>
      </div>
    );
  }
}

TipPicker.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TipPicker);