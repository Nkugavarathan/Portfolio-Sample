import { Link } from "react-scroll"
import React from "react"

function Footer() {
  return (
    <footer className="footer--container bg-primary-subtle text-dark py-4">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row text-center w-100">
          {/* Logo Section */}
          <div className="col-12 col-md-3 mb-3 mb-md-0">
            <h5>My Portfolio</h5>
          </div>

          {/* Navigation Links - Horizontal on Desktop, Vertical on Mobile */}
          <div className="col-12 col-md-6">
            <ul className="list-unstyled d-flex flex-column flex-md-row justify-content-center align-items-center">
              <li className="mb-2 mb-md-0 mx-md-2">
                <Link
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="heroSection"
                  className="footer-link"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2 mb-md-0 mx-md-2">
                <Link
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="MyPortfolio"
                  className="footer-link"
                >
                  Portfolio
                </Link>
              </li>
              <li className="mb-2 mb-md-0 mx-md-2">
                <Link
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="AboutMe"
                  className="footer-link"
                >
                  About Me
                </Link>
              </li>
              <li className="mb-2 mb-md-0 mx-md-2">
                <Link
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="Contact"
                  className="footer-link"
                >
                  Contact
                </Link>
              </li>
              <li className="mb-2 mb-md-0 mx-md-2">
                <Link
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="testimonial"
                  className="footer-link"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="col-12 col-md-3">
            <ul className="list-inline m-0">
              <li className="list-inline-item mx-2">
                <a
                  href="https://www.instagram.com/"
                  className="social-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a
                  href="https://www.facebook.com/"
                  className="social-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a
                  href="https://www.linkedin.com/"
                  className="social-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a
                  href="https://discord.com/"
                  className="social-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-discord fa-lg"></i>
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a
                  href="https://twitter.com/"
                  className="social-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-x-twitter fa-lg"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
