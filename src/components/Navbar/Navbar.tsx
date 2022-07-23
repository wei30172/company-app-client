import React, { useState, RefObject } from "react";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../assets/logo.png";
import { scrollToSection } from "../../utils/scrollToSection";
import "./navbar.scss";

type Ref = HTMLDivElement;

type Props = {
  mainRefs: {
    productsRef: RefObject<HTMLDivElement>;
    aboutRef: RefObject<HTMLDivElement>;
    missionRef: RefObject<HTMLDivElement>;
  };
};

const Navbar = React.forwardRef<Ref, Props>((props, ref) => {
  const { aboutRef, missionRef, productsRef } = props.mainRefs;

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
            onClick={() => scrollToSection(productsRef)}
          >
            Our Products
          </li>
          <li
            className="cursor-pointer"
            onClick={() => scrollToSection(aboutRef)}
          >
            About Us
          </li>
          <li
            className="cursor-pointer"
            onClick={() => scrollToSection(missionRef)}
          >
            Our Mission
          </li>
        </ul>
      </div>

      {/* hamburger */}
      <div
        onClick={() => setShowMobMenu(!showMobMenu)}
        className="navbar_hamburger"
      >
        {!showMobMenu ? <MenuIcon /> : <CloseIcon />}
      </div>

      {/* mobile menu */}
      <ul className={!showMobMenu ? "navbar_hidden" : "navbar_mobile-menu"}>
        <li onClick={() => handleClick(productsRef)}>Our Products</li>
        <li onClick={() => handleClick(aboutRef)}>About Us</li>
        <li onClick={() => handleClick(missionRef)}>Our Mission</li>
      </ul>
    </div>
  );
});

export default Navbar;
