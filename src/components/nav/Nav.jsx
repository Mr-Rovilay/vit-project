// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <i className="fa-solid fa-house"></i>
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <i className="fa-solid fa-user"></i>
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <i className="fa-solid fa-fire"></i>
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <i className="fa-solid fa-gear"></i>
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <i className="fa-solid fa-address-book"></i>
      </a>
    </nav>
  );
};

export default Nav;
