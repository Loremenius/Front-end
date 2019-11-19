import React from "react";
import { connect } from "react-redux";


const Journal = () =>{

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

export default connect(mapStateToProps,{})(Journal);