import { slide as Menu } from "react-burger-menu";

import React, { Component } from "react";

// Other styles are in LandingSideNav
const darkStyles = {
  bmBurgerBars: {
    background: "#179dc7"
  }
};

const lightStyles = {
  bmBurgerBars: {
    background: "#fff"
  }
};
class LandingSideNav extends Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <Menu
        styles={this.props.dark ? darkStyles : lightStyles}
        className="LandingSideNav"
      >
        <a id="home" className="bm-item-list" href="/">
          Home
        </a>
        <a id="about" className="bm-item-list" href="/about">
          About
        </a>
        <a id="contact" className="bm-item-list" href="/get-in-touch">
          Get In Touch
        </a>
        <a id="about" className="bm-item-list" href="/auth/google">
          Login
        </a>
      </Menu>
    );
  }
}

export default LandingSideNav;
