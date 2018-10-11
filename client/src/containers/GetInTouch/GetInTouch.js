import React, { Component } from "react";
import PageTitle from "./PageTitle/PageTitle";
import DesktopNav from "../../components/DesktopNav/DesktopNav";

class GetInTouch extends Component {
  render() {
    return (
      <div className="GetInTouch">
        <DesktopNav dark />
        <PageTitle />
      </div>
    );
  }
}

export default GetInTouch;
