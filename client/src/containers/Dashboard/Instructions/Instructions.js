import React, { Component } from "react";

class Instructions extends Component {
  render() {
    return (
      <div className="Instructions">
        <p className="Instructions__singleItem">
          <span className="Instructions__singleItem__icon">
            <i class="fas fa-check" />
          </span>
          Create A Campaign
        </p>
        <p className="Instructions__singleItem">
          <span className="Instructions__singleItem__icon">
            <i class="fas fa-check" />
          </span>
          Add The Recipients List
        </p>
        <p className="Instructions__singleItem">
          <span className="Instructions__singleItem__icon">
            <i class="fas fa-check" />
          </span>
          Fill All the Forms
        </p>
        <p className="Instructions__singleItem">
          <span className="Instructions__singleItem__icon">
            <i class="fas fa-check" />
          </span>
          Create A Template of the email
        </p>
        <p className="Instructions__singleItem">
          <span className="Instructions__singleItem__icon">
            <i class="fas fa-check" />
          </span>
          Select The Template In the Campaign
        </p>
        <p className="Instructions__singleItem">
          <span className="Instructions__singleItem__icon">
            <i class="fas fa-check" />
          </span>
          Send The Email
        </p>
      </div>
    );
  }
}

export default Instructions;
