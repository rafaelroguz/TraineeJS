import React from "react";

import { ListItem } from "./ListItem";

export const List = props => {
  const dataDisplay = props.p.map(p => {
    return (
      <ListItem data={p} key={p.id} handleClick={() => props.handleClick(p)} />
    );
  });

  return <div className="List">{dataDisplay}</div>;
};
