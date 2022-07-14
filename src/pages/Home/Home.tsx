import React from "react";
import { useState, useEffect, useRef } from "react";
import { Navbar } from "../../components";

import "./home.scss";

const Home = () => {
  const [navheight, setNavHeight] = useState(0);

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

  useEffect(() => {
    setNavHeight(() => navbarRef.current?.clientHeight || 0);
  }, []);
  
  return (
    <div className="home">
      <Navbar ref={navbarRef} mainRefs={mainRefs} />
    </div>
  );
};

export default Home;
