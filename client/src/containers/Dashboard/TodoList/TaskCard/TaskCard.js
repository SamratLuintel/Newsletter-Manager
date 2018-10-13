import React, { Component } from "react";
import { withRouter } from "react-router";

class TaskCard extends Component {
  redirect = () => {
    this.props.history.push(this.props.link);
  };
  render() {
    return (
      <div className="TaskCard" onClick={this.redirect}>
        <div className="TaskCard__body">
          <p className="TaskCard__body__icon">
            <i class="fas fa-plus" />
          </p>
          <p className="TaskCard__body__text">{this.props.text}</p>
        </div>
      </div>
    );
  }
}
export default withRouter(TaskCard);
