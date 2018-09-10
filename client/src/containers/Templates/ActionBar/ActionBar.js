import React, { Component } from "react";

class ActionBar extends Component {
  render() {
    return (
      <div className="Template__actionbar">
        <div className="Template__sortDropDown">
          sort By:
          <select>
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </div>
        <div class="Template__search" action="">
          <input type="text" />
          <span class="search-button">
            <i class="fas fa-search" />
          </span>
        </div>
      </div>
    );
  }
}

export default ActionBar;
