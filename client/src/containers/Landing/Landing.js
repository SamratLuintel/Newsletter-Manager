import React, { Component } from "react";
import Hero from "./Hero/Hero";
import Packages from "./Packages/Packages";
import Samples from "./Samples/Samples";
import Personas from "./Personas/Personas";

class Landing extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Packages />
        <Samples />
        <Personas />
      </div>
    );
  }
}

export default Landing;
