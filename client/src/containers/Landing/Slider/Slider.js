import React, { Component } from "react";
import TinySlider from "tiny-slider-react";
import acmeLogo from "../../../assets/images/acme-logo.png";

const settings = {
  lazyload: true,
  nav: false,
  mouseDrag: true,
  items: 2,
  controls: false,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayButtonOutput: false,
  autoplayButton: false,
  responsive: {
    1100: {
      items: 6
    },
    900: {
      items: 3
    }
  }
};

class Slider extends Component {
  renderSlides = () => {
    let slides = [];
    for (let i = 0; i < 10; i++) {
      let html = (
        <div className="Slider__image-container">
          <img src={acmeLogo} className="Slider__image" alt="" />
        </div>
      );
      slides.push(html);
    }
    return slides;
  };

  render() {
    return (
      <TinySlider settings={settings} className="Slider">
        {/*Chnage it for your own company*/}
        {this.renderSlides()}
      </TinySlider>
    );
  }
}

export default Slider;
