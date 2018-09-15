import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setDraftOnlyTrue,
  setCompletedOnlyTrue,
  showAllCampaign
} from "../../../store/actions/campaign";
import { bindActionCreators } from "redux";
import classnames from "classnames";
class SideBar extends Component {
  // Keeps the track of which element is currently selected
  state = {
    recent: true,
    ongoing: false,
    draft: false,
    completed: false
  };

  changeSelectedDiv = name => {
    //reset every option to false;
    const newState = { ...this.state };
    for (let key in newState) {
      newState[key] = false;
    }
    newState[name] = true;
    this.setState(newState);
  };

  //"Sidebar__listItem SideBar__listItem--selected"
  render() {
    return (
      <div className="Sidebar">
        <div
          className={classnames("Sidebar__listItem", {
            "SideBar__listItem--selected": this.state.recent
          })}
          onClick={() => {
            this.changeSelectedDiv("recent");
            this.props.showAllCampaign();
          }}
        >
          <span class="Sidebar__listItem__icon">
            <i class="far fa-clock" />
          </span>
          Recent
        </div>

        <div
          className={classnames("Sidebar__listItem", {
            "SideBar__listItem--selected": this.state.ongoing
          })}
        >
          <span class="Sidebar__listItem__icon">
            <i class="fas fa-arrow-right" />
          </span>
          Ongoing
        </div>

        <div
          className={classnames("Sidebar__listItem", {
            "SideBar__listItem--selected": this.state.draft
          })}
          onClick={() => {
            this.changeSelectedDiv("draft");
            this.props.setDraftOnlyTrue();
          }}
        >
          <span class="Sidebar__listItem__icon">
            <i class="fas fa-pencil-alt " />
          </span>
          Draft
        </div>

        <div
          className={classnames("Sidebar__listItem", {
            "SideBar__listItem--selected": this.state.completed
          })}
          onClick={() => {
            this.changeSelectedDiv("completed");
            this.props.setCompletedOnlyTrue();
          }}
        >
          <span class="Sidebar__listItem__icon">
            <i class="fas fa-check" />
          </span>
          Completed
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setDraftOnlyTrue: bindActionCreators(setDraftOnlyTrue, dispatch),
  setCompletedOnlyTrue: bindActionCreators(setCompletedOnlyTrue, dispatch),
  showAllCampaign: bindActionCreators(showAllCampaign, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(SideBar);
