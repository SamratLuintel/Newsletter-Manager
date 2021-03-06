import React, { Component } from "react";
import Parallax from "parallax-js";
import hero from "../../../assets/images/hero.png";

class Hero extends Component {
  componentDidMount = () => {
    this.parallax = new Parallax(this.scene);
  };

  componentWillUnmount = () => {
    this.parallax.disable();
  };
  render() {
    return (
      <div className="Hero">
        <div className="Hero__diagonal" />
        <div className="Hero__parallax" ref={el => (this.scene = el)}>
          <div data-depth="0.2" className="Hero__parallax__layer-1" />
          <div data-depth="0.4" className="Hero__parallax__layer-2" />
          <div data-depth="0.6" className="Hero__parallax__layer-3" />
        </div>
        <div className="container">
          <div className="Hero__container">
            <div className="Hero__content">
              <h1 className="Hero__title">EMM - Create beautiful emails</h1>
              <h2 className="Hero__subtitle">
                EMM is the easiest,quickest way to design elegant,mobile
                responsive emails. Discover why over 1,000,000 people have used
                our email editor
              </h2>
              <button className="Hero__design-button">
                {" "}
                <a href="/auth/google">SIGN UP NOW</a>{" "}
              </button>
            </div>
            <div className="Hero__image-container">
              <img className="Hero__image" src={hero} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
