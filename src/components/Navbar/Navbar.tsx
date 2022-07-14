import React, { useState, RefObject } from "react";
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import logo from "../../assets/logo.svg";
import { scrollToSection } from "../../utils/scrollToSection";
import "./navbar.scss";

type Ref = HTMLDivElement;

type Props = {
  mainRefs: {
    aboutRef: RefObject<HTMLDivElement>;
    valuesRef: RefObject<HTMLDivElement>;
    teamRef: RefObject<HTMLDivElement>;
    jobsRef: RefObject<HTMLDivElement>;
    missionRef: RefObject<HTMLDivElement>;
  }
}

const Navbar = React.forwardRef<Ref, Props>((props, ref) => {
  const { aboutRef, valuesRef, teamRef, jobsRef, missionRef } = props.mainRefs;

  const [showMobMenu, setShowMobMenu] = useState(false);

  const handleClick = (elementRef: RefObject<HTMLDivElement>) => {
    setShowMobMenu(!showMobMenu);
    if (elementRef) scrollToSection(elementRef);
  };

  return (
    <div ref={ref} className="navbar">
      {/* logo */}
      <a href="/">
        <div>
          <img alt="logo" src={logo} style={{ width: "80px" }} />
        </div>
      </a>

      {/* menu */}
      <div className="navbar_menu">
        <ul>
          <li
            className="cursor-pointer"
            onClick={() => scrollToSection(aboutRef)}
          >
            About
          </li>
          <li
            className="cursor-pointer"
            onClick={() => scrollToSection(valuesRef)}
          >
            Values
          </li>
          <li
            className="cursor-pointer"
            onClick={() => scrollToSection(teamRef)}
          >
            Team
          </li>
          <li
            className="cursor-pointer"
            onClick={() => scrollToSection(jobsRef)}
          >
            Jobs
          </li>
          <li
            className="cursor-pointer"
            onClick={() => scrollToSection(missionRef)}
          >
            Mission
          </li>
        </ul>
      </div>

      {/* hamburger */}
      <div onClick={() => setShowMobMenu(!showMobMenu)} className="navbar_hamburger">
        {!showMobMenu ? <MenuIcon /> : <CloseIcon />}
      </div>

      {/* mobile menu */}
      <ul className={!showMobMenu ? "navbar_hidden" : "navbar_mobile-menu"}>
        <li onClick={() => handleClick(aboutRef)}>About</li>
        <li onClick={() => handleClick(valuesRef)}>Values</li>
        <li onClick={() => handleClick(teamRef)}>Team</li>
        <li onClick={() => handleClick(jobsRef)}>Jobs</li>
        <li onClick={() => handleClick(missionRef)}>Mission</li>
      </ul>
    </div>
  );
});

export default Navbar;
