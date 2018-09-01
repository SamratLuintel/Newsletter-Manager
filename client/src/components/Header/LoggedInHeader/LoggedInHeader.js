import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  clearCurrentProfile,
  logoutUser
} from "../../../store/actions/profile/profile";
import { connect } from "react-redux";

class LoggedInHeader extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    return (
      <div className="Header Header--dark">
        <div className="Header__brand">ReactMunch</div>
        <ul className="navbar">
          <Link
            className="navbar__navitem navbar__navitem--loggedIn"
            to="/campaigns"
          >
            Campaigns
          </Link>
          <Link
            className="navbar__navitem navbar__navitem--loggedIn"
            to="/templates"
          >
            Templates
          </Link>
          <li className="navbar__navitem navbar__navitem--loggedIn">
            <a href="" onClick={this.onLogoutClick} className="logout">
              Log out
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(
  null,
  { clearCurrentProfile, logoutUser }
)(LoggedInHeader);
