import React from "react";



const Search = ({handleChange,result}) => {
  return (
    <div className="header">
      <h1>Cryptocurrency </h1>
      <input
        className="inputSearch"
        type="text"
        onChange={handleChange}
        placeholder="Search By Name"
        
      />
     
      <p>Total Of Available Coins: {result.length}</p>
    </div>
  );
};
export default Search;
