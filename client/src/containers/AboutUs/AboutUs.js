import React, { Component } from "react";
import DesktopNav from "../../components/DesktopNav/DesktopNav";
import MainSection from "./MainSection/MainSection";
import LandingSideNav from "../../components/LandingSideNav/LandingSideNav";

class AboutUs extends Component {
  render() {
    return (
      <div className="AboutUs">
        <DesktopNav />
        <LandingSideNav />
        <MainSection />
      </div>
    );
  }
}
export default AboutUs;
