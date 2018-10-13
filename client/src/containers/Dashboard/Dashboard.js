import React, { Component, Fragment } from "react";
import ApplicationHeader from "../../components/ApplicationHeader/ApplicationHeader";
import WelcomeMessage from "./WelcomeMessage/WelcomeMessage";
import TodoList from "./TodoList/TodoList";
import ApplicationSideNav from "../../components/ApplicationSideNav/ApplicationSideNav";

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <ApplicationSideNav />
        <ApplicationHeader />
        <div className="Dashboard">
          <WelcomeMessage />
          <TodoList />
        </div>
      </Fragment>
    );
  }
}

export default Dashboard;
