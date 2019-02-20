import React from "react";

const Search = props => {
  return (
    <div className="header">
      <h1>Cryptocurrency </h1>
      <input
        className="inputSearch"
        type="text"
        onChange={props.handleChange}
        placeholder="Search Bitcoin Name"
      />
      <p>Sum Of Searched Coins: {props.newArray.length}</p>
    </div>
  );
};
export default Search;
