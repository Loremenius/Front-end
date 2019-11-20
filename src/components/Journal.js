import React, {useEffect} from "react";
import { connect } from "react-redux";
import {fetchData} from "../actions";
import JournalEntry from "./JournalEntry"
import EntryCard from "./EntryCard";

const Journal = (props) =>{

    useEffect(()=>{
        console.log(props)
        props.fetchData(props.history);
    },[])

    return(
        <div className="journal">

        {props.journalList.map((item)=>(
            <EntryCard key = {item.entryid} {...item}/>
        ))}
        <JournalEntry/>
        </div>
    )
}

function mapStateToProps(state){
    return{
        journalList: state.journalEntryList
    }
}

export default connect(mapStateToProps,{fetchData})(Journal);