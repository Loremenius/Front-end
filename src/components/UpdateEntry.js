import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/styles';
import {connect} from "react-redux";
import {editData, deleteData} from "../actions"
import DateFnsUtils from '@date-io/date-fns';
import {  MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import {axiosWithAuth} from "../actions/axiosWithAuth";

const mainStyles = makeStyles({
    root: {
        padding: '30px',
        '& label': {
            color: 'blue',
            fontSize: '1.4rem',
    },
}})


const UpdateEntry = props => {

    const [entry, setEntry] = useState("");
  
    const handleChanges = e => {
        setEntry(e.target.value);
    }
    const [selectedDate, setSelectedDate] = useState();

    const handleDateChange = date => {
        console.log(date)
        setSelectedDate(date);
    };

    const submitForm = e => {
        e.preventDefault()
        console.log(props)
        const journal = {entrydate: selectedDate, description: entry};
        props.editData(journal, props.history, props.match.params.id);
    }

    const onClickEvent = () =>{
        props.deleteData(props.match.params.id, props.history);
    }

    const classes = mainStyles(); 

    useEffect(()=>{
        axiosWithAuth().get(`https://lambdaschool-onelineaday.herokuapp.com/entries/entry/${props.match.params.id}`)
            .then((response)=>{
                console.log(response);
                setSelectedDate(response.data.entrydate);
                setEntry(response.data.description);
            });
    },[props.match.params.id])

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
                    <button type="submit">Edit Entry</button>
            </form>
                    <button onClick={onClickEvent} >Delete Entry</button>
        </div>
    )
}
export default connect(null,{editData, deleteData})(UpdateEntry);