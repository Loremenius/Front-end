import React from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/styles';

const dateStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: '20px',
    },
    textField: {
      width: 200,
    },
  }));

export default function DatePickers() {
    const classes = dateStyles();

    return (
        <form className={classes.container} noValidate>
            <TextField
             id="date"
             label="Today's Date"
             type="date"
             defaultValue="2019-11-19"
             className={classes.TextField}
             InputLabelProps={{
                 shrink: true,
             }}/>
        </form>
    );
}