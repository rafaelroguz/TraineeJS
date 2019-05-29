import React from "react";

export const BigCard = props => {
  const item = props.item;
  return (
    <div>
      <h1>{item.name}</h1>
      <h2>{item.username}</h2>
      <h2>{item.email}</h2>
    </div>
  );
};
