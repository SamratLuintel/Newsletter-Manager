import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import LoggedOutHeader from "./LoggedOutHeader/LoggedOutHeader";
import LoggedInHeader from "./LoggedInHeader/LoggedInHeader";

class Header extends Component {
  render() {
    let header;
    const loggedIn = this.props.auth.token ? true : false;
    if (loggedIn) {
      header = <LoggedInHeader />;
    } else {
      header = <LoggedOutHeader />;
    }
    return header;
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(Header);
