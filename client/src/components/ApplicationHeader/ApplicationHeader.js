import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  clearCurrentProfile,
  logoutUser
} from "../../store/actions/profile/profile";
import { connect } from "react-redux";
import ProfileDropDown from "./ProfileDropDown/ProfileDropDown";
import { withRouter } from "react-router-dom";
class LoggedInHeader extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  };
  render() {
    return (
      <div className="Header Header--dark">
        <div className="Header__brand">EMM</div>
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
          {
            // <li className="navbar__navitem navbar__navitem--loggedIn">
            //   <a href="" onClick={this.onLogoutClick} className="logout">
            //     Log out
            //   </a>
            // </li>
          }
          <ProfileDropDown
            name={this.props.profile.name}
            logout={this.onLogoutClick}
          />
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(
  mapStateToProps,
  { clearCurrentProfile, logoutUser }
)(withRouter(LoggedInHeader));
