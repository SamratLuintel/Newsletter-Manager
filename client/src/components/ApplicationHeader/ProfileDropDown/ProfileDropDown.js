import React, { Component } from "react";

class ProfileDropDown extends Component {
  state = {
    displayMenu: false
  };

  showDropDownMenu = event => {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropDownMenu);
    });
  };

  hideDropDownMenu = event => {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropDownMenu);
    });
  };

  render() {
    return (
      <div className="ProfileDropDown">
        <div
          onClick={this.showDropDownMenu}
          className="ProfileDropDown__button-container"
        >
          My Settings
        </div>
        {this.state.displayMenu ? (
          <ul className="ProfileDropDown__links-container">
            <li className="ProfileDropDown__links-container__link">
              <i class="fas fa-cog" />
              {"  "}
              <a className="active" href="#Create Page">
                Placeholder
              </a>
            </li>
            <li
              onClick={this.props.logout}
              className="ProfileDropDown__links-container__link"
            >
              <i class="fas fa-sign-out-alt" /> {"  "}
              <a href="#Manage Pages">Logout</a>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default ProfileDropDown;
