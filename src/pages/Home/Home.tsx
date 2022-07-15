import React from "react";
import { useRef } from "react";
import {
  Navbar,
  About,
  Values,
  Jobs,
  Team,
  Mission,
  Footer,
} from "../../components";

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
      <About ref={aboutRef} />
      <Values ref={valuesRef} />
      <Team ref={teamRef} />
      <Jobs ref={jobsRef} />
      <Mission ref={missionRef} />
      <Footer />
    </div>
  );
};

export default Home;
