import React, { Component } from "react";
import Parallax from "parallax-js";

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
      </div>
    );
  }
}

export default Hero;
