import React, {useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import {connect} from "react-redux";
import {addData} from "../actions"
import DateFnsUtils from '@date-io/date-fns';
import {  MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";

const mainStyles = makeStyles({
    root: {
        padding: '30px',
        '& label': {
            color: 'blue',
            fontSize: '1.4rem',
    },
    resize:{
        fontSize:25
    }
}})


const JournalEntry = props => {
    const [entry, setEntry] = useState("");
  
    const handleChanges = e => {
        setEntry(e.target.value);
    }
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = date => {
        console.log(date)
        setSelectedDate(date);
    };

    const submitForm = e => {
        e.preventDefault();
        const convertSelectedDate = new Date(selectedDate)
        const journal = {entrydate:  `${convertSelectedDate.getFullYear()}-${convertSelectedDate.getMonth()+1}-${convertSelectedDate.getDate()}`, description: entry};
        props.addData(journal,props.histroy);
        setEntry("");
        setSelectedDate(new Date());
    }

    const classes = mainStyles(); 

    return (
        <div className="root">
            <form onSubmit={submitForm} className="form">
                <label htmlFor="note">
                    Journal Entry of the Day
                        </label>
                        
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    className={classes.resize}
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Today's Date"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    inputProps={{style: {fontSize: 30, paddingTop:'15px'}}} // font size of input text
                                    InputLabelProps={{style: {fontSize: 40}}} // font size of input label
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                            <TextField
                                id="note"
                                multiline
                                type="body"
                                label="New Journal Entry"
                                value={entry}
                                onChange={handleChanges}
                                inputProps={{style: {fontSize: 30, paddingTop:'15px'}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 40}}} // font size of input label
                                name="body"
                                className={classes.input}/>
                                <br></br>
                       
                    <Button variant="outlined" type="submit">Add New Entry</Button>
            </form>
        </div>
    )
}
export default connect(null,{addData})(JournalEntry);