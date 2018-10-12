import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

const DesktopNav = props => {
  const desktopNavClasses = classNames({
    DesktopNav__nav: true,
    "DesktopNav__nav--dark": props.dark
  });

  const desktopNavItemClasses = classNames({
    "DesktopNav__nav-item": true,
    "DesktopNav__nav-item--dark ": props.dark
  });

  const loginButtonClass = classNames({
    DesktopNav__login: true,
    "DesktopNav__login--dark": props.dark
  });
  return (
    <div className="DesktopNav">
      <ul className="DesktopNav__menu">
        <li className={desktopNavClasses}>
          <Link className={desktopNavItemClasses} to="/">
            HOME
          </Link>
        </li>
        <li className={desktopNavClasses}>
          <Link className={desktopNavItemClasses} to="/about">
            About
          </Link>
        </li>
        <li className={desktopNavClasses}>
          <Link className={desktopNavItemClasses} to="/">
            PlaceHolder
          </Link>
        </li>
        <li className={desktopNavClasses}>
          <Link className={desktopNavItemClasses} to="/get-in-touch">
            GET IN TOUCH
          </Link>
        </li>
        <li className={desktopNavClasses}>
          <a href="/login" className={loginButtonClass}>
            LOGIN <i class="fas fa-chevron-right" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DesktopNav;
