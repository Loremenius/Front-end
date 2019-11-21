import React from "react";
import dateFormat from "dateformat";

const EntryCard = ({description, entrydate}) =>{


    return(
        <div className="entryCard">
            <div className="entry">
                <p>{description}</p>
            </div>
            <p className="date">{dateFormat(entrydate, "dddd, mmmm dS, yyyy")}</p>
        </div>
    )
}

export default EntryCard;