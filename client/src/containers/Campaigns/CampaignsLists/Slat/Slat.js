import React from "react";

// This is a individual campaign shown in the campaign list
const Slat = props => {
  return (
    <div>
      {props.name}
      Created At:
      {props.createdAt}
      lastEdited:
      {props.lastEdited}
    </div>
  );
};

export default Slat;
