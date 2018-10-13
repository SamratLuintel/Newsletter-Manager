import React from "react";
import Progress from "react-progressbar";
const WelcomeMessage = () => {
  return (
    <div className="WelcomeMessage">
      <p className="WelcomeMessage__heading-text">
        Welcome To Newsletter Samrat
      </p>
      <h1 className="WelcomeMessage__emphasis-text">Keep up the good work.</h1>
      <Progress completed={25} />
      <p className="WelcomeMessage__percentage-completed">25% completed</p>
    </div>
  );
};

export default WelcomeMessage;
