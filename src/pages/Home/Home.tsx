import React from "react";
import { useRef } from "react";
import {
  HomeHeader,
  ProductsIntro,
  About,
  Mission,
} from "../../components";

import "./Home.scss";

const Home = () => {
  // create references
  const navbarRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);

  const mainRefs = {
    productsRef,
    aboutRef,
    missionRef,
  };

  return (
    <div>
      <HomeHeader ref={navbarRef} mainRefs={mainRefs} />
      <ProductsIntro ref={productsRef} />
      <About ref={aboutRef} />
      <Mission ref={missionRef} />
    </div>
  );
};

export default Home;
