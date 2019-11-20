import React, {useEffect} from "react";
import { connect } from "react-redux";
import {fetchData} from "../actions";


const Journal = (props) =>{

    useEffect(()=>{
        props.fetchData();
    },[])

    return(
        <div className="journal">


        </div>
    )
}

function mapStateToProps(state){
    return{
        journalList: state.journalEntryList
    }
}

export default connect(mapStateToProps,{fetchData})(Journal);