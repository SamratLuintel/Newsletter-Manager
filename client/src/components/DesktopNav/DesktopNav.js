import React from "react";
import { Link } from "react-router-dom";

const DesktopNav = () => {
  return (
    <div className="DesktopNav">
      <ul className="DesktopNav__menu">
        <li className="DesktopNav__nav">
          <Link className="DesktopNav__nav-item" to="/about">
            About
          </Link>
        </li>
        <li className="DesktopNav__nav">
          <Link className="DesktopNav__nav-item" to="/about">
            About
          </Link>
        </li>
        <li className="DesktopNav__nav">
          <Link className="DesktopNav__nav-item" to="/about">
            About
          </Link>
        </li>
        <li className="DesktopNav__nav">
          <Link className="DesktopNav__nav-item" to="/about">
            About
          </Link>
        </li>
        <li className="DesktopNav__nav">
          <a href="/login" className="DesktopNav__login">
            LOGIN <i class="fas fa-chevron-right" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DesktopNav;
