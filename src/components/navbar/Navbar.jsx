// eslint-disable-next-line no-unused-vars
import React from "react";
import "./navbar.css";
import logo from "../../images/deji.jpeg";

const Navbar = () => {
  return (
    <header className="header">
      <a href="#" className="logo">
        <img src={logo} alt="deji" className="img" />
        Portfo<span>lio</span>{" "}
      </a>
    </header>
  );
};

export default Navbar;
