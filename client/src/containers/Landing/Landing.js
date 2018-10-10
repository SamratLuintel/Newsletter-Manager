import React, { Component, Fragment } from "react";
import Hero from "./Hero/Hero";
import Packages from "./Packages/Packages";
import Samples from "./Samples/Samples";
import Personas from "./Personas/Personas";
import DesignBlog from "./DesignBlog/DesignBlog";
import Clients from "./Clients/Clients";
import Slider from "./Slider/Slider";
import DesktopNav from "../../components/DesktopNav/DesktopNav";
import DesktopSideNav from "../../components/DesktopSideNav/DesktopSideNav";
import { slide as Menu } from "react-burger-menu";

class Landing extends Component {
  render() {
    return (
      <Fragment>
        <DesktopSideNav />
        <div className="Landing">
          <DesktopNav />

          <Hero />
          <Packages />
          <Samples />
          <Personas />
          <DesignBlog />
          <Clients />
          <Slider />
        </div>
      </Fragment>
    );
  }
}

export default Landing;
