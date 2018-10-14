import React, { Component } from "react";
import PageTitle from "./PageTitle/PageTitle";
import DesktopNav from "../../components/DesktopNav/DesktopNav";
import ContactForm from "./ContactForm/ContactForm";
import Social from "./Social/Social";
import LandingSideNav from "../../components/LandingSideNav/LandingSideNav";
import DesktopFooter from "../../components/DesktopFooter/DesktopFooter";

class GetInTouch extends Component {
  render() {
    return (
      <div className="GetInTouch">
        <LandingSideNav dark />
        <DesktopNav dark />
        <div className="GetInTouch__white-area" />
        <PageTitle />
        <ContactForm />
        <Social />
        <DesktopFooter />
      </div>
    );
  }
}

export default GetInTouch;
