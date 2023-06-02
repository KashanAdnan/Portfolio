import React from "react";
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h1 className="footer__title">Kashan</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#work" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonial
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.instagram.com/kashanadnan772/"
            className="footer__social-link"
          >
            <i className="uil uil-instagram"></i>
          </a>
          <a href="https://www.dribble.com" className="footer__social-link">
            <i className="uil uil-dribbble"></i>
          </a>
          <a
            href="https://www.github.com/KashanAdnan"
            className="footer__social-link"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
        <span className="footer__copy">&copy; Kashanadnan. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
