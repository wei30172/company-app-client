import React from "react";
import { useRef } from "react";
import {
  Navbar,
  ProductsIntro,
  About,
  Mission,
  Footer,
} from "../../components";

import "./home.scss";

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
      <Navbar ref={navbarRef} mainRefs={mainRefs} />
      <ProductsIntro ref={productsRef} />
      <About ref={aboutRef} />
      <Mission ref={missionRef} />
      <Footer />
    </div>
  );
};

export default Home;
