import React, { Component } from "react";

class Feature extends Component {
  renderMainContent = () => {
    return (
      <div className="col-md-6">
        <div className="Feature__content">
          <h1 className="Feature__title">{this.props.title}</h1>
          <h2 className="Feature__subtitle">{this.props.subtitle}</h2>
          <a href="" className="Feature__button">
            {this.props.btnText}
          </a>
        </div>
      </div>
    );
  };

  renderImage = () => {
    return (
      <div className="col-md-6">
        <img className="Feature__image" src={this.props.imgSrc} alt="" />
      </div>
    );
  };

  render() {
    return (
      <div
        className="Feature"
        style={{
          backgroundColor: this.props.bgColor ? this.props.bgColor : "#fff"
        }}
      >
        <div className="row">
          {this.props.alternate ? this.renderImage() : this.renderMainContent()}
          {this.props.alternate ? this.renderMainContent() : this.renderImage()}
        </div>
      </div>
    );
  }
}

export default Feature;
