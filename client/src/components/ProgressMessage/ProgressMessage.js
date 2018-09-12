import React from "react";
import { ClipLoader } from "react-spinners";
import { css } from "react-emotion";

const override = css`
  float: right;
`;

export default props => {
  return (
    <div className="ProgressMessage">
      {!props.finished && props.message}
      {props.finished && props.finishedMessage}{" "}
      {!props.finished && (
        <ClipLoader
          className={override}
          sizeUnit={"px"}
          size={15}
          color={"#fff"}
          loading={true}
        />
      )}
      {props.finished && (
        <span className="ProgressMessage__cross" onClick={props.onCrossed}>
          <i class="fas fa-times" />
        </span>
      )}
    </div>
  );
};
