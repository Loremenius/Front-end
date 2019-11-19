import React, {useState} from 'react';

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

    return (
       <form onSubmit={submitForm}>
           <label htmlFor="note">
               Journal Entry of the Day
                </label>
                <input
                    id="note"
                    type="body"
                    value={journal.body}
                    onChange={handleChanges}/>
                <button type="submit">Submit Entry</button>
        </form>
    )
}

export default JournalEntry;