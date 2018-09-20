import React, { Component } from "react";
import Hero from "./Hero/Hero";
import Packages from "./Packages/Packages";
import Samples from "./Samples/Samples";
import Personas from "./Personas/Personas";
import DesignBlog from "./DesignBlog/DesignBlog";

class Landing extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Packages />
        <Samples />
        <Personas />
        <DesignBlog />
      </div>
    );
  }
}

export default Landing;
