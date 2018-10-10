import { slide as Menu } from "react-burger-menu";

import React, { Component } from "react";

class LandingSideNav extends Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <Menu className="LandingSideNav">
        <a id="home" className="bm-item-list" href="/">
          Home
        </a>
        <a id="about" className="bm-item-list" href="/about">
          About
        </a>
        <a id="contact" className="bm-item-list" href="/contact">
          Contact
        </a>
      </Menu>
    );
  }
}

export default LandingSideNav;