import React, { useState, useEffect, useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

const HeroSection = () => {
  // Typewriter effect setup
  const words = [
    { text: "Graphic Designer", color: "#FF6347" },
    { text: "UI/UX Designer", color: "#1E90FF" },
    { text: "Creative Thinker", color: "#32CD32" },
  ]

  const [displayText, setDisplayText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  // Typewriter effect implementation
  useEffect(() => {
    const typeEffect = () => {
      const currentWord = words[wordIndex].text

      if (isDeleting) {
        setCharIndex((prev) => prev - 1)
      } else {
        setCharIndex((prev) => prev + 1)
      }

      setDisplayText(currentWord.substring(0, charIndex))

      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000)
        return
      }

      if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
      }

      setTimeout(typeEffect, isDeleting ? 50 : 100)
    }

    const timer = setTimeout(typeEffect, 100)
    const cursorTimer = setInterval(() => setShowCursor((prev) => !prev), 500)

    return () => {
      clearTimeout(timer)
      clearInterval(cursorTimer)
    }
  }, [charIndex, isDeleting, wordIndex])

  // Particles initialization with error handling
  const particlesInit = useCallback(async (engine) => {
    try {
      console.log("Initializing particles engine...")
      await loadFull(engine)
      console.log("Particles engine loaded successfully")
    } catch (error) {
      console.error("Error loading particles engine:", error)
    }
  }, [])

  // Minimal working particles configuration
  const particlesOptions = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      size: {
        value: 3,
        random: true,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
    },
    retina_detect: true,
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      className="hero-section"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundColor: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Particles container - absolutely positioned */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      {/* Content container */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          padding: "20px",
          maxWidth: "800px",
        }}
      >
        <h1
          style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}
        >
          Hey, I'm John <br />
          <span style={{ color: words[wordIndex].color }}>{displayText}</span>
          {showCursor && <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>}
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#aaa", marginBottom: "2rem" }}>
          I craft visually appealing designs that bring brands to life.
        </p>
        <button
          onClick={() => scrollToSection("Contact")}
          style={{
            padding: "12px 24px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          Get In Touch
        </button>
      </div>
    </section>
  )
}

export default HeroSection
