import React, { Component } from "react";

class ActionBar extends Component {
  render() {
    return (
      <div className="Template__actionbar">
        <div className="Template__sortDropDown">
          <span className="Template__sortDropDown__description">Sort By:</span>
          <select className="Template__sortDropDown__select">
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </div>
        <div class="Template__search" action="">
          <input
            type="text"
            placeholder="Search Saved Templates"
            class="Template__search__input"
          />
          <span class="Template__search__search-button">
            <i class="fas fa-search" />
          </span>
        </div>
      </div>
    );
  }
}

export default ActionBar;
