import React, {useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import {connect} from "react-redux";
import {addData} from "../actions"
import DateFnsUtils from '@date-io/date-fns';
import {  MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";

const mainStyles = makeStyles({
    root: {
        padding: '30px',
        '& label': {
            color: 'blue',
            fontSize: '1.4rem',
    },
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
        e.preventDefault()
        const journal = {entrydate: selectedDate, description: entry};
        props.addData(journal,props.histroy);
        setEntry("");
        setSelectedDate(new Date());
    }

    const classes = mainStyles(); 

    return (
        <div className={classes.root}>
            <form onSubmit={submitForm}>
                <label htmlFor="note">
                    Journal Entry of the Day
                        </label>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Today's Date"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                        <input
                            id="note"
                            type="body"
                            value={entry}
                            onChange={handleChanges}
                            name="body"
                            className={classes.input}/>
                    <button type="submit">Add New Entry</button>
            </form>
        </div>
    )
}
export default connect(null,{addData})(JournalEntry);