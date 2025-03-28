import React, { useState, useEffect, useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

const HeroSection = () => {
  // Typewriter effect setup (working perfectly)
  const words = [
    { text: "Graphic Designer", color: "#FF6347" },
    { text: "UI/UX Designer", color: "#1E90FF" },
    { text: "Creative Thinker", color: "#32CD32" },
  ]

  const [displayText, setDisplayText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  // Typewriter effect implementation
  useEffect(() => {
    let timeout
    const currentWord = words[currentWordIndex].text

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    if (isDeleting) {
      // Deleting phase
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length - 1))
        }, 50)
      } else {
        // Switch to next word after deleting
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
      }
    } else {
      // Typing phase
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length + 1))
        }, 100)
      } else {
        // Start deleting after pause
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, 1500)
      }
    }

    return () => {
      clearTimeout(timeout)
      clearInterval(cursorInterval)
    }
  }, [displayText, currentWordIndex, isDeleting])

  // Particles initialization - JavaScript version
  const particlesInit = useCallback(async (engine) => {
    console.log("Initializing particles...")
    try {
      await loadFull(engine)
      console.log("Particles loaded successfully!")
    } catch (error) {
      console.error("Error loading particles:", error)
    }
  }, [])

  // Particles configuration
  const particlesOptions = {
    fullScreen: {
      enable: false,
      zIndex: -1,
    },
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
      links: {
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
    console.log("Scrolling to:", sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70, // Adjust for the navbar height
        behavior: "smooth",
      })
    } else {
      console.error("Section not found:", sectionId)
    }
  }

  return (
    <section
      id="heroSection"
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
      {/* Particles Container */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
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

      {/* Content */}
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
          <span style={{ color: words[currentWordIndex].color }}>
            {displayText}
            <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
          </span>
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
          }}
        >
          Get In Touch
        </button>
      </div>
    </section>
  )
}

export default HeroSection
