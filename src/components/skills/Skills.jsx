// eslint-disable-next-line no-unused-vars
import React from "react";
import "./skills.css";

import ScrollReveal from "scrollreveal";

const Skills = () => {
  ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200,
  });

  ScrollReveal().reveal(".experience__frontend", {
    origin: "left",
  });
  ScrollReveal().reveal(".experience__backend", {
    origin: "right",
  });

  return (
    <section id="skills" className="exp">
      <h5>What skills do i possess</h5>
      <span>
        <h2>My experience</h2>
      </span>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <i className="fa-solid fa-circle-check"></i>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <i className="fa-solid fa-circle-check"></i>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <i className="fa-solid fa-circle-check"></i>
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <i className="fa-solid fa-circle-check"></i>
              <div>
                <h4>BOOTSTRAP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <i className="fa-solid fa-circle-check"></i>
              <div>
                <h4>TAILWIND</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <i className="fa-solid fa-circle-check"></i>
              <div>
                <h4>REACT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <i className="fa-solid fa-circle-check"></i>
              <div>
                <h4>EJS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <i className="fa-solid fa-circle-check"></i>
              <div>
                <h4>NODEJS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <i className="fa-solid fa-circle-check"></i>
              <div>
                <h4>MONGODB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <i className="fa-solid fa-circle-check"></i>
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience__details">
              <i className="fa-solid fa-circle-check"></i>
              <div>
                <h4>PYTHON</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <i className="fa-solid fa-circle-check"></i>
              <div>
                <h4>EXPRESS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <i className="fa-solid fa-circle-check"></i>
              <div>
                <h4>REACT</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
