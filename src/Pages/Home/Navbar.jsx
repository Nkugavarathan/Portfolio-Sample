import { useState, useEffect } from "react"
import { Link } from "react-scroll"

function Navbar() {
  const [navActive, setNavActive] = useState(false)
  const [scrolling, setScrolling] = useState(false)

  const toggleNav = () => {
    setNavActive(!navActive)
  }

  const closeMenu = () => {
    setNavActive(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true) // Add the "scrolled" class when scrolled
      } else {
        setScrolling(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      className={`navbar ${scrolling ? "scrolled" : ""} ${
        navActive ? "active" : ""
      }`}
    >
      <div className="logo">My Portfolio</div>

      {/* Hamburger Menu */}
      <div
        className={`nav__hamburger ${navActive ? "open" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </div>

      {/* Navigation Links */}
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              to="heroSection"
              className="navbar--content"
              spy
              smooth
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              to="AboutMe"
              className="navbar--content"
              spy
              smooth
              offset={-70}
              duration={500}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              to="MyPortfolio"
              className="navbar--content"
              spy
              smooth
              offset={-70}
              duration={500}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              to="testimonial"
              className="navbar--content"
              spy
              smooth
              offset={-70}
              duration={500}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              to="Contact"
              className="navbar--content"
              spy
              smooth
              offset={-70}
              duration={500}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
