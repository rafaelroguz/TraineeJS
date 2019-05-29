import React from "react";

export const SearchBar = props => {
  return (
    <input
      type="text"
      placeholder="Search for a character"
      onChange={event => props.handleChange(event.target.value)}
      className="SearchBar"
    />
  );
};
