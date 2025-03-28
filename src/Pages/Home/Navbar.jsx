import { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

function Navbar() {
  const [scrolling, setScrolling] = useState(false)
  const [activeSection, setActiveSection] = useState("heroSection")
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50)

      const sections = ["heroSection", "AboutMe", "MyPortfolio", "Contact"]
      let currentSection = "heroSection" // Default section

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section
          }
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70,
        behavior: "smooth",
      })
    }
    setMenuOpen(false) // Close menu after clicking
  }

  return (
    <nav
      className={`navbar fixed-top ${scrolling ? "bg-dark" : "bg-primary"}`}
      style={{ transition: "background-color 0.3s ease", padding: "15px 20px" }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand text-white fw-bold" href="#">
          My Portfolio
        </a>

        {/* Desktop Navigation */}
        <ul className="nav-links d-none d-lg-flex">
          {["heroSection", "AboutMe", "MyPortfolio", "Contact"].map(
            (section) => (
              <li key={section}>
                <a
                  className={`nav-link text-white ${
                    activeSection === section ? "active-link" : ""
                  }`}
                  onClick={() => scrollToSection(section)}
                >
                  {section === "heroSection"
                    ? "Home"
                    : section.replace(/([A-Z])/g, " $1").trim()}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Hamburger Menu for Small Screens */}
        <div
          className={`hamburger-menu d-lg-none ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          ✖
        </button>
        <ul>
          {["heroSection", "AboutMe", "MyPortfolio", "Contact"].map(
            (section) => (
              <li key={section}>
                <a
                  className={`nav-link text-white ${
                    activeSection === section ? "active-link" : ""
                  }`}
                  onClick={() => scrollToSection(section)}
                >
                  {section === "heroSection"
                    ? "Home"
                    : section.replace(/([A-Z])/g, " $1").trim()}
                </a>
              </li>
            )
          )}
        </ul>
      </div>

      {/* 🔹 Smooth underline transition & animations */}
      <style>
        {`
          .nav-link {
            position: relative;
            padding-bottom: 5px;
            transition: color 0.3s ease-in-out;
            cursor: pointer; /* Cursor Pointer on Hover */
          }
          
          .nav-link::after {
            content: "";
            position: absolute;
            left: 50%;
            bottom: 0;
            width: 0;
            height: 3px;
            background: white;
            transition: all 0.4s ease-in-out;
            transform: translateX(-50%);
          }
          
          .nav-link.active-link::after {
            width: 100%;
          }

          /* Desktop Navigation */
          .nav-links {
            list-style: none;
            display: flex;
            gap: 20px;
          }

          .nav-links li {
            list-style: none;
          }

          /* Hamburger Menu Styles */
          .hamburger-menu {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 30px;
            height: 25px;
            cursor: pointer;
          }

          .bar {
            width: 100%;
            height: 4px;
            background-color: white;
            transition: 0.3s ease-in-out;
          }

          /* Transform into Close Icon */
          .hamburger-menu.open .bar:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
          }
          
          .hamburger-menu.open .bar:nth-child(2) {
            opacity: 0;
          }
          
          .hamburger-menu.open .bar:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
          }

          /* Mobile Navigation Menu */
          .mobile-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 250px;
            height: 100vh;
            background: rgba(0, 0, 0, 0.9);
            padding-top: 60px;
            display: flex;
            flex-direction: column;
            transition: right 0.4s ease-in-out;
          }

          .mobile-menu.active {
            right: 0;
          }

          .mobile-menu ul {
            list-style: none;
            padding: 0;
            text-align: center;
          }

          .mobile-menu li {
            margin: 20px 0;
          }

          .mobile-menu .nav-link {
            font-size: 20px;
            text-decoration: none;
          }

          /* Close Button */
          .close-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            background: none;
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
          }

          /* Hide Hamburger Menu on Large Screens */
          @media (min-width: 992px) {
            .hamburger-menu {
              display: none;
            }
          }
        `}
      </style>
    </nav>
  )
}

export default Navbar
