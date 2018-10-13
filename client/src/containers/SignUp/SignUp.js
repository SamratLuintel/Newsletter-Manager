import React, { Component } from "react";
import SignUpForm from "./SignUpForm/SignUpForm";
import ApplicationHeader from "../../components/ApplicationHeader/ApplicationHeader";

class SignUp extends Component {
  render() {
    return (
      <div>
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
