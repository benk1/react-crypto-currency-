import React from 'react'

 const Search = (props) => {
  return (
    <div className="search">
      <input type="text"   onChange={(e) => props.handleChange} placeholder="Search Criteria" />
    {/*<p>Sum Of Searched Coins: {props.newArray.length}</p>*/}
    </div>
  )
}
export default Search;
