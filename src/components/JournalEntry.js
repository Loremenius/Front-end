import React, {useState} from 'react';
import DateSelector from './DateSelector';
import {makeStyles} from '@material-ui/styles';

const mainStyles = makeStyles({
    root: {
        padding: '30px',
        '& label': {
            color: 'blue',
            fontSize: '1.4rem',
    },
}})


const JournalEntry = props => {
    const [journal, setJournal] = useState({title: "", body: ""});
  
    const handleChanges = e => {
        setJournal({...journal, [e.target.name]: e.target.value})
        console.log(e.target.value)
    }
    const submitForm = e => {
        e.preventDefault()
        props.addNewEntry(journal)
        setJournal({title: "", body: ""})
    }

    const classes = mainStyles(); 

    return (
        <div className={classes.root}>
            <form onSubmit={submitForm}>
                <label htmlFor="note">
                    Journal Entry of the Day
                        </label>
                        <DateSelector/>
                        <input
                            id="note"
                            type="body"
                            value={journal.body}
                            onChange={handleChanges}
                            className={classes.input}/>
                    <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default JournalEntry;