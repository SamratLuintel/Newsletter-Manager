import React, { Component } from "react";
import Hero from "./Hero/Hero";
import Packages from "./Packages/Packages";
import Samples from "./Samples/Samples";
import Personas from "./Personas/Personas";
import DesignBlog from "./DesignBlog/DesignBlog";
import Clients from "./Clients/Clients";
import Slider from "./Slider/Slider";
import DesktopNav from "../../components/DesktopNav/DesktopNav";
import LandingSideNav from "../../components/LandingSideNav/LandingSideNav";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <DesktopNav />
        <LandingSideNav />
        <Hero />
        <Packages />
        <Samples />
        <Personas />
        <DesignBlog />
        <Clients />
        <Slider />
      </div>
    );
  }
}

export default Landing;
