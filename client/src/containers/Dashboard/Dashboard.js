import React, { Component, Fragment } from "react";
import Header from "../../components/Header/Header";
import WelcomeMessage from "./WelcomeMessage/WelcomeMessage";
import Instructions from "./Instructions/Instructions";

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="Dashboard">
          <WelcomeMessage />
          <Instructions />
        </div>
      </Fragment>
    );
  }
}

export default Dashboard;
