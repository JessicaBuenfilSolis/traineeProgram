import React from "react";
import "./search.css";

const SearchBar = props => {
  return (
    <input
      onChange={event => props.onSearch(event)}
      type="text"
      placeholder="Search"
      className={"search"}
    />
  );
};

export default SearchBar;
