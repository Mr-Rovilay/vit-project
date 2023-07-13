// eslint-disable-next-line no-unused-vars
import React from "react";
import "./portfolio.css";
import img from "../../images/dev.jpeg";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2>
        My Latest <span>Project</span> <br />
        on <span> Github </span>
      </h2>

      <div className="portfolio-container">
        <div className="portfolio-box">
          <img src={img} alt="" srcset="" />
          <div className="portfolio-layer">
            <h4>My app design</h4>
            <p>
              The software stack you use, the development tools you master or
              the cloud platform to which you deploy
            </p>
            <a href="https://github.com/Mr-Rovilay/my-app" target="blank">
              <i className="bx bx-link"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={img} alt="" srcset="" />
          <div className="portfolio-layer">
            <h4>E commerce</h4>
            <p>
              E-commerce is used by consumers and businesses to exchange goods
              and services via the Internet
            </p>
            <a href="https://github.com/Mr-Rovilay/e-commerce" target="blabk">
              <i className="bx bx-link"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={img} alt="" srcset="" />
          <div className="portfolio-layer">
            <h4>web Project</h4>
            <p>A bigener learning project</p>
            <a
              href="https://github.com/Mr-Rovilay/web-dev-projects"
              target="blank"
            >
              <i className="bx bx-link"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={img} alt="" srcset="" />
          <div className="portfolio-layer">
            <h4>Saloon Project</h4>
            <p>
              It make you more attractive in the eyes of your clients. People
              increasingly turn to brands that stand for something. im on a
              mission to change or improve the world in one way or another.
            </p>
            <a href="https://github.com/Mr-Rovilay/salon-project">
              <i className="bx bx-link"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={img} alt="" srcset="" />
          <div className="portfolio-layer">
            <h4>web design</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              quasi ducimus optio, itaque nulla aut corrupti id, architecto
              eaque assumenda ut maxime, cupiditate quibusdam tempore
            </p>
            <a href="#">
              <i className="bx bx-link"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={img} alt="" srcset="" />
          <div className="portfolio-layer">
            <h4>web design</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              quasi ducimus optio, itaque nulla aut corrupti id, architecto
              eaque assumenda ut maxime, cupiditate quibusdam tempore
            </p>
            <a href="#">
              <i class="bx bx-link"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
