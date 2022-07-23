import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import "./navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMobMenu, setShowMobMenu] = useState(false);

  return (
    <div className="navbar">
      {/* menu */}
      <div className="navbar_menu">
        <ul>
          <li className="cursor-pointer" onClick={() => navigate("/")}>
            Home
          </li>
          <li className="cursor-pointer" onClick={() => navigate("/login")}>
            Login
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
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/login")}>Login</li>
      </ul>
    </div>
  );
};

export default Navbar;
