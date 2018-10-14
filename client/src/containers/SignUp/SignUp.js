import React, { Component } from "react";
import SignUpForm from "./SignUpForm/SignUpForm";
import ApplicationHeader from "../../components/ApplicationHeader/ApplicationHeader";
import ApplicationSideNav from "../../components/ApplicationSideNav/ApplicationSideNav";

class SignUp extends Component {
  render() {
    return (
      <div>
        <ApplicationSideNav />
        <ApplicationHeader />
        <div className="signup">
          <p className="signup__head">Please fill the below form</p>
          <div className="signup__body">
            <SignUpForm />
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
