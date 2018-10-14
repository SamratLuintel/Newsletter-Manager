import { slide as Menu } from "react-burger-menu";

import React, { Component } from "react";
import {
  clearCurrentProfile,
  logoutUser
} from "../../store/actions/profile/profile";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const styles = {
  bmBurgerBars: {
    background: "rgba(36,28,21,0.65)",
    height: "5px"
  },
  bmBurgerButton: {
    top: "11px"
  }
};

class ApplicationSideNav extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  };

  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu styles={styles} className="ApplicationSideNav">
        <a id="campaigns" className="bm-item-list" href="/campaigns">
          Campaigns
        </a>
        <a id="templates" className="bm-item-list" href="/templates">
          Templates
        </a>
        <a id="templates" className="bm-item-list" onClick={this.onLogoutClick}>
          LogOut
        </a>
      </Menu>
    );
  }
}

export default connect(
  null,
  { clearCurrentProfile, logoutUser }
)(withRouter(ApplicationSideNav));
