import React from "react";

export const ListItem = props => {
  return (
    <div>
      <button
        className="ListItem"
        onClick={() => props.handleClick(props.data)}
      >
        {props.data.name}
      </button>
    </div>
  );
};
