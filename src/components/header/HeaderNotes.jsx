import React from "react";
import SeacrhArticle from "./SearchArticle";

function HeaderNotes( {onSearch} ) {
    return (
        <div className="note-app__header">
            <h1>Notes</h1>
            <SeacrhArticle onSearch={onSearch}/>
        </div>
    );
}

export default HeaderNotes;