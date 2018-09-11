import React from "react";

export default props => {
  return (
    <div className="ErrorMessage">
      {props.message}{" "}
      <span className="ErrorMessage__cross" onClick={props.onCrossed}>
        <i class="fas fa-times" />
      </span>
    </div>
  );
};
