import React from "react";

export const BigCard = props => {
  const item = props.item;
  return item !== null ? (
    <div>
      <h1>{item.name}</h1>
      <h3>Username: {item.username}</h3>
      <h3>E-Mail: {item.email}</h3>
      <hr />
      <h3>City: {item.address.city}</h3>
      <h3>Company: {item.company.name}</h3>
    </div>
  ) : (
    <div className="NoSelection">
      <h1>Select a person</h1>
    </div>
  );
};
