import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/styles';
import {connect} from "react-redux";
import {editData, deleteData} from "../actions"
import DateFnsUtils from '@date-io/date-fns';
import {  MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import {axiosWithAuth} from "../actions/axiosWithAuth";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from '@material-ui/icons/Save';



const mainStyles = makeStyles({
    root: {
        padding: '30px',

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
        const convertSelectedDate = new Date(selectedDate)
        const journal = {entrydate:  `${convertSelectedDate.getFullYear()}-${convertSelectedDate.getMonth()+1}-${convertSelectedDate.getDate()}`, description: entry};
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
                                inputProps={{style: {fontSize: 30, paddingTop:'15px'}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 40}}} // font size of input label
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                        <br></br>
                        <TextField
                            id="note"
                            type="body"
                            multiline
                            value={entry}
                            label="Edit journal entry"
                            onChange={handleChanges}
                            inputProps={{style: {fontSize: 30, paddingTop:'15px'}}} // font size of input text
                            InputLabelProps={{style: {fontSize: 40}}} // font size of input label
                            name="body"
                            className={classes.input}/>
                            <br></br>
                        <ButtonGroup
                            size="large"
                            aria-label="large outlined secondary button group"
                            >
                            <Button type="submit" startIcon={<SaveIcon/>}>Edit Entry</Button>
                            <Button onClick={onClickEvent} startIcon={<DeleteIcon/>}>Delete</Button>
                            <Button onClick={()=>{props.history.push("/journal")}}>Cancel</Button>
                        </ButtonGroup>
            </form>
                    
        </div>
    )
}
export default connect(null,{editData, deleteData})(UpdateEntry);