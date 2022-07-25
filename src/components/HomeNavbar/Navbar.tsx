import React, { useState, RefObject } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../assets/logo.png";
import { scrollToSection } from "../../utils/scrollToSection";
import "./Navbar.scss";

type Ref = HTMLDivElement;

type Props = {
  mainRefs: {
    productsRef: RefObject<HTMLDivElement>;
    aboutRef: RefObject<HTMLDivElement>;
    missionRef: RefObject<HTMLDivElement>;
  };
};

const Navbar = React.forwardRef<Ref, Props>((props, ref) => {
  const navigate = useNavigate();

  const { aboutRef, missionRef, productsRef } = props.mainRefs;

  const [showMobMenu, setShowMobMenu] = useState(false);

  const handleClick = (elementRef: RefObject<HTMLDivElement>) => {
    setShowMobMenu(!showMobMenu);
    if (elementRef) scrollToSection(elementRef);
  };

  return (
    <div ref={ref} className="home-navbar">
      {/* logo */}
      <a href="/">
        <div>
          <img alt="logo" src={logo} style={{ width: "80px" }} />
        </div>
      </a>

      {/* menu */}
      <div className="navbar_menu">
        <ul>
          <li className="cursor-pointer" onClick={() => navigate("/products")}>
            Our Products
          </li>
          <li
            className="cursor-pointer"
            onClick={() => scrollToSection(productsRef)}
          >
            About Products
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
        {!showMobMenu ? (
          <MenuIcon className="cursor-pointer" />
        ) : (
          <CloseIcon className="cursor-pointer" />
        )}
      </div>

      {/* mobile menu */}
      <ul className={!showMobMenu ? "navbar_hidden" : "navbar_mobile-menu"}>
        <li className="cursor-pointer" onClick={() => navigate("/products")}>
          Our Products
        </li>
        <li className="cursor-pointer" onClick={() => handleClick(productsRef)}>
          About Products
        </li>
        <li className="cursor-pointer" onClick={() => handleClick(aboutRef)}>
          About Us
        </li>
        <li className="cursor-pointer" onClick={() => handleClick(missionRef)}>
          Our Mission
        </li>
      </ul>
    </div>
  );
});

export default Navbar;
