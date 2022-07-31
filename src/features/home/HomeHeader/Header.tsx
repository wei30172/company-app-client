import React, { RefObject } from "react";
import { scrollToSection } from "../../../utils/scrollToSection";
import "./Header.scss";

type Ref = HTMLDivElement;

type Props = {
  mainRefs: {
    productsRef: RefObject<HTMLDivElement>;
    aboutRef: RefObject<HTMLDivElement>;
    missionRef: RefObject<HTMLDivElement>;
  };
};

const Header = React.forwardRef<Ref, Props>((props, ref) => {
  const { aboutRef, missionRef, productsRef } = props.mainRefs;

  return (
    <div ref={ref} className="home-header">
      <ul className="flex">
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
  );
});

export default Header;
