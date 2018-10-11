import React, { Component } from "react";
import color from "color";
import Radium from "radium";

class PackageCard extends Component {
  render() {
    return (
      <div className="Package-card">
        <div
          className="Package-card__banner"
          style={{ color: this.props.brandColor }}
        >
          {this.props.bannerText}
        </div>
        <div className="Package-card__title">
          <span style={{ color: this.props.brandColor, fontWeight: 600 }}>
            EMM
          </span>{" "}
          {this.props.edition}
        </div>
        <div className="Package-card__subtitle">{this.props.subtitle}</div>
        <img className="Package-card__image" src={this.props.imgSrc} alt="" />
        <p className="Package-card__description">
          <strong>{this.props.mainDescText}</strong>
          <br />
          {this.props.altDescText}
        </p>
        <a
          href=""
          className="Package-card__button"
          style={[buttonStyle(this.props.brandColor)]}
        >
          Learn More
        </a>
      </div>
    );
  }
}

const buttonStyle = brandColor => {
  return {
    ":hover": {
      background: color(brandColor).lighten(0.2)
    },
    background: color(brandColor)
  };
};
export default Radium(PackageCard);
