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
    </nav>
  )
}

export default Navbar
