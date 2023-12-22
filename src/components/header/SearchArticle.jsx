import React from "react";

function SeacrhArticle( {onSearch} ) {
  return (
    <div className="input-search">
      <input type="text" placeholder="Cari catatan" onChange={onSearch}/>
    </div>
  );
}

export default SeacrhArticle;
