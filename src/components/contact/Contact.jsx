// eslint-disable-next-line no-unused-vars
import React from "react";
import "./contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <h1>
        Let Me Get <span>You A Beautiful</span> Website
      </h1>
      <h2 className="contact">
        Contact <span>Me!</span>{" "}
      </h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <i className="fa-solid fa-envelope"></i>
            <h4>Email</h4>
            <h5>ayodejiakinola@gmail.com</h5>
            <a
              href="mailto:ayodejiakinola@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <i className="fa-brands fa-twitter"></i>
            <h4>Twitter</h4>
            <h5>@Mr__Rovilay</h5>
            <a
              href="https://twitter.com/messages"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <i className="fa-brands fa-whatsapp"></i>
            <h4>Whatsapp</h4>
            <h5>+2348140570029</h5>
            <a
              href=" https://wa.me/08140570029"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="input-box">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
          </div>

          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
