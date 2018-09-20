import React, { Component } from "react";
import Hero from "./Hero/Hero";
import Packages from "./Packages/Packages";

class Landing extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Packages />
      </div>
    );
  }
}

export default Landing;
