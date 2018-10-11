import React, { Component } from "react";
import PageTitle from "./PageTitle/PageTitle";
import DesktopNav from "../../components/DesktopNav/DesktopNav";
import ContactForm from "./ContactForm/ContactForm";
import Social from "./Social/Social";

class GetInTouch extends Component {
  render() {
    return (
      <div className="GetInTouch">
        <DesktopNav dark />
        <PageTitle />
        <ContactForm />
        <Social />
      </div>
    );
  }
}

export default GetInTouch;
