import React, { Component } from "react";
import PageTitle from "./PageTitle/PageTitle";
import DesktopNav from "../../components/DesktopNav/DesktopNav";
import ContactForm from "./ContactForm/ContactForm";

class GetInTouch extends Component {
  render() {
    return (
      <div className="GetInTouch">
        <DesktopNav dark />
        <PageTitle />
        <ContactForm />
      </div>
    );
  }
}

export default GetInTouch;
