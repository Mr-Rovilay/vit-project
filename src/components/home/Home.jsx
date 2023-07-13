// eslint-disable-next-line no-unused-vars
import React from "react";
import ScrollReveal from "scrollreveal";
import "./home.css";
import deji from "../../images/dejistanding.jpeg";
import CV from "../../images/CV.pdf";

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, Its Me</h3>
        <h1>Ayodeji Akinola</h1>
        <h3>
          a <span className="multiple-text">Full Stack Developer</span>
        </h3>
        <p>
          I'm a Software Developer with two years of experience in coding,
          testing and establishing system improvements. Equally at home with
          software development for PCs, online environments, and mobile devices
        </p>

        <div className="social-media">
          <a href="#">
            <i className="bx bxl-facebook-circle"></i>
          </a>
          <a href="https://twitter.com/Mr__rovilay" target="blank">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="https://github.com/Mr-Rovilay">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/ayodeji-akinola-296405224/">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>

        <a href={CV} download className="btn">
          Download My CV
        </a>
      </div>
      <div className="home-img">
        <img src={deji} alt="deji" width="300px" height="650" />
      </div>
    </section>
  );
};

export default Home;
