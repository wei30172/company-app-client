import React from "react";
import { useRef } from "react";
import { Navbar, Footer } from "../../components";

import "./home.scss";

const Home = () => {
  // create references
  const navbarRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const jobsRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);

  const mainRefs = {
    aboutRef,
    valuesRef,
    teamRef,
    jobsRef,
    missionRef,
  };

  return (
    <div>
      <Navbar ref={navbarRef} mainRefs={mainRefs} />
      <Footer />
    </div>
  );
};

export default Home;
