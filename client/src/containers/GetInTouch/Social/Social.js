import React from "react";

const Social = () => {
  return (
    <div className="Social">
      <div className="Social__main">
        <div className="Social__main__external">
          <div className="Social__main__internal">
            <h3 className="Social__main__title">Follow Us</h3>
            <h4 className="Social__main__subtitle">
              Stay in touch, follow us on:
            </h4>
            <ul className="Social__social-profiles">
              <li>
                <a href="" className="Social__social-icon-container">
                  <i className="fab fa-facebook-f Social__social-icon" />
                </a>
              </li>
              <li>
                <a href="" className="Social__social-icon-container">
                  <i className="fab fa-twitter Social__social-icon" />
                </a>
              </li>
              <li>
                <a href="" className="Social__social-icon-container">
                  <i className="fab fa-youtube Social__social-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
