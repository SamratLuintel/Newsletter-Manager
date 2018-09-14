import React from "react";
import { connect } from "react-redux";
import {
  setDraftOnlyTrue,
  setCompletedOnlyTrue
} from "../../../store/actions/campaign/campaign";
import { bindActionCreators } from "redux";

const SideBar = props => {
  return (
    <div className="Sidebar">
      <div className="Sidebar__listItem SideBar__listItem--selected">
        <span class="Sidebar__listItem__icon">
          <i class="far fa-clock" />
        </span>
        Recent
      </div>
      <div className="Sidebar__listItem">
        <span class="Sidebar__listItem__icon">
          <i class="fas fa-arrow-right" />
        </span>
        Ongoing
      </div>
      <div className="Sidebar__listItem" onClick={props.setDraftOnlyTrue}>
        <span class="Sidebar__listItem__icon">
          <i class="fas fa-pencil-alt " />
        </span>
        Draft
      </div>
      <div className="Sidebar__listItem" onClick={props.setCompletedOnlyTrue}>
        <span class="Sidebar__listItem__icon">
          <i class="fas fa-check" />
        </span>
        Completed
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setDraftOnlyTrue: bindActionCreators(setDraftOnlyTrue, dispatch),
  setCompletedOnlyTrue: bindActionCreators(setCompletedOnlyTrue, dispatch)
});
export default connect(
  null,
  mapDispatchToProps
)(SideBar);
