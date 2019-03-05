import React, { Component } from 'react';
import './TipPicker.css';
import PropTypes from 'prop-types';

//Material-UI
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

//Create style configurations to pass to component below
const styles = theme => ({
    mainPaper: {
        width: 200,
        maring: 100,
        padding: 100,
        color: 'lightgreen',
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
})

class TipPicker extends Component {
  state = {
    selected: '',
  }

  handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
      console.log('selector is working');
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="TipPicker">
        <Paper className={classes.mainPaper} elevation={5}>
          <h4>I want to:</h4>
          <form className={classes.root} autoComplete="off">
            <FormControl className={classes.formControl}>
            <InputLabel htmlFor="tip-picker">Pick A Tip</InputLabel>
                <Select
                    value={this.state.selected}
                    onChange={this.handleChange}
                    inputProps={{
                    name: 'selected',
                    id: 'picker-simple',
                    }}
                    >
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value={'clearExternalId'}>Clear External ID</MenuItem>
                </Select>
            </FormControl>
          </form>
        </Paper>
      </div>
    );
  }
}

TipPicker.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TipPicker);