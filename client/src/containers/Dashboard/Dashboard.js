import React, { Component, Fragment } from "react";
import ApplicationHeader from "../../components/ApplicationHeader/ApplicationHeader";
import WelcomeMessage from "./WelcomeMessage/WelcomeMessage";
import TodoList from "./TodoList/TodoList";

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
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
