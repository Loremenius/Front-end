import React, {useState,useEffect} from "react";
import { connect } from "react-redux";
import {fetchData, signOut} from "../actions";
import JournalEntry from "./JournalEntry"
import EntryCard from "./EntryCard";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import dateFormat from "dateformat";

const Journal = (props) =>{

    let rightAlign = false

    const addClass = ()=>{
        if(rightAlign){
            rightAlign = !rightAlign;
            return "right-align"
        }else{
            rightAlign= !rightAlign;
            return "left-align"
        }
    }
    // const [day, setDay] = useState('');
    // const [month, setMonth] = useState('');
    // const [year, setYear] = useState(new Date().getFullYear());
    // const [viewArray, setViewArray] = useState(props.journalList);

    // const dayHandler = (e) =>{
    //     setDay(e.target.value)
    // }
    // const monthHandler = (e) =>{
    //     setMonth(e.target.value)
    // }
    // const yearHandler = (e) =>{
    //     setYear(e.target.value)
    // }

    // const submitHandler =(e) =>{
    //     e.preventDefault();
    //     const filterArray = props.journalList.filter((item)=>{
    //         const total = item.search(year)+item.search(day)+item.search(month)
    //         return total > -1
    //     });

    //     setViewArray(filterArray);
    // }

    useEffect(()=>{
        console.log(props)
        props.fetchData(props.history);
    },[])

    return(
        <div className="journal">
        {/* <form>
            <TextField
                id="day"
                value={day}
                label="Day (DD)"
                onChange={dayHandler}
            />
            <FormControl>
                <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={month}
                    onChange={monthHandler}
                    >
                    <MenuItem value={'1'}>January</MenuItem>
                    <MenuItem value={'2'}>February</MenuItem>
                    <MenuItem value={'3'}>March</MenuItem>
                    <MenuItem value={'4'}>April</MenuItem>
                    <MenuItem value={'5'}>May</MenuItem>
                    <MenuItem value={'6'}>June</MenuItem>
                    <MenuItem value={'7'}>July</MenuItem>
                    <MenuItem value={'8'}>August</MenuItem>
                    <MenuItem value={'9'}>September</MenuItem>
                    <MenuItem value={'10'}>October</MenuItem>
                    <MenuItem value={'11'}>November</MenuItem>
                    <MenuItem value={'12'}>December</MenuItem>
                </Select>
            </FormControl>
            <TextField
                required
                id="year"
                value={year}
                label="Year (YYYY)"
                onChange={yearHandler}
            />
            <button onSubmit={submitHandler}>Search</button>
        </form> */}
            <div className="signOut">
                <Button variant="outlined" color="secondary" onClick={()=>props.signOut(props.history)}>Sign Out</Button>
            </div>
            <JournalEntry/>
            <p>Click on any message to edit it.</p>
            <div className="list">
                {props.journalList.map((item)=>(
                    <Link key = {item.entryid} to={`/journal/${item.entryid}`} className={addClass()}>
                        <EntryCard  {...item}/>
                    </Link>
                ))}
                <p className="begin">Welcome to the begining of your journey!</p>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return{
        journalList: state.journalEntryList
    }
}

export default connect(mapStateToProps,{fetchData,signOut})(Journal);