import React, { Component } from "react";
import DesktopNav from "../../components/DesktopNav/DesktopNav";
import MainSection from "./MainSection/MainSection";
import LandingSideNav from "../../components/LandingSideNav/LandingSideNav";
import Features from "./Features/Features";
import Products from "./Products/Products";
import DesktopFooter from "../../components/DesktopFooter/DesktopFooter";

class AboutUs extends Component {
  render() {
    return (
      <div className="AboutUs">
        <DesktopNav />
        <LandingSideNav />
        <MainSection />
        <Features />
        <Products />
        <DesktopFooter />
      </div>
    );
  }
}
export default AboutUs;
