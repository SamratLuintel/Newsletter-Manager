import { slide as Menu } from "react-burger-menu";

import React, { Component } from "react";

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
      </Menu>
    );
  }
}

export default ApplicationSideNav;
