import React from "react";


const EntryCard = ({description, entrydate}) =>{


    return(
        <div className="entry">
            <p>{description}</p>
            <p>{entrydate}</p>
        </div>
    )
}

export default EntryCard;