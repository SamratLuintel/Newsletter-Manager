import React from "react";
import samples from "../../../assets/images/samples.png";

const Samples = () => {
  return (
    <div className="Samples">
      <div className="container">
        <h2 className="Samples__header">
          Start with a beautiful, mobile-responsive template
        </h2>
        <p className="Samples__description">
          Start wit a blank canvas to build your email from scratch
          <br />
          or kickstart your design process with one of our ready-to-go email
          templates.
        </p>
        <a href="" className="Samples__button">
          START DESIGNING
        </a>
      </div>
      <img src={samples} class="Samples__image" alt="" />
    </div>
  );
};

export default Samples;
