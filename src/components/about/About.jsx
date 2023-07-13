/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./about.css";
import logo from "../../images/ayodeji-logo.png";
import ScrollReveal from "scrollreveal";

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".about-img", { origin: "bottom" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={logo} alt="" srcset="" height="500" />
      </div>
      <div className="about-content">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <h3>Full Stack Developer</h3>
        <p>
          Im a full-stack developer IT professional, i develops software
          application's client and server side. i apply a wide range of coding
          skills and help other programmers solve problems. i also test and
          debug software and optimize the code
        </p>
        <br />
        <p>
          I also Developed apps to address problems within the company client's
          needs
        </p>
        <a
          href="https://www.coursera.org/articles/full-stack-developer"
          className="btn"
          target="blank"
        >
          Read More
        </a>
      </div>
    </section>
  );
};

export default About;
