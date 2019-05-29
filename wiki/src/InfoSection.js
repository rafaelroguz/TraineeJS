import React from "react";

import { BigCard } from "./BigCard";

export const InfoSection = props => {
  return (
    <div className="InfoSection">
      <BigCard item={props.item} />
    </div>
  );
};
