import React, { useState, useEffect } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

export default function HeroSection() {
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

  const speed = 100 // Slow typing speed (ms)
  const deleteSpeed = 50 // Faster speed while deleting characters
  const delayBetweenWords = 1000 // Delay after finishing a word

  useEffect(() => {
    let typingTimeout

    // Function for typewriter effect
    const typeEffect = () => {
      const currentWord = words[wordIndex].text

      // Increase or decrease charIndex based on the direction (typing or deleting)
      if (isDeleting) {
        setCharIndex((prev) => prev - 1) // Decrease character index when deleting
      } else {
        setCharIndex((prev) => prev + 1) // Increase character index when typing
      }

      setDisplayText(currentWord.substring(0, charIndex)) // Update text as per charIndex

      // Handle when the word is completely typed
      if (!isDeleting && charIndex === currentWord.length) {
        typingTimeout = setTimeout(() => {
          setIsDeleting(true) // Start deleting after a pause
        }, delayBetweenWords)
      }

      // Handle when the word is completely deleted
      if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length) // Move to the next word
      }

      // Set the typing speed and delete speed
      typingTimeout = setTimeout(typeEffect, isDeleting ? deleteSpeed : speed)
    }

    typeEffect()

    // Cursor blink effect
    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev) // Blink cursor effect
    }, 500)

    // Clean up the blinking cursor interval on unmount
    return () => {
      clearInterval(cursorBlink)
      clearTimeout(typingTimeout) // Clean up typing timeout
    }
  }, [charIndex, isDeleting, wordIndex]) // Dependencies ensure effect runs when these values change

  // Initialize particles
  const particlesInit = async (main) => {
    await loadFull(main) // Load all necessary tsParticles features
  }

  const scrollToSection = (section) => {
    const element = document.getElementById(section)
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="hero-section d-flex align-items-center justify-content-center vh-100 text-center">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          autoPlay: true,
          background: {
            color: { value: "#000000" },
          },
          fullScreen: {
            enable: true,
            zIndex: 0,
          },
          interactivity: {
            detectsOn: "window",
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: {
                enable: true,
                mode: "repulse",
                parallax: { enable: false, force: 2, smooth: 10 },
              },
              resize: { delay: 0.5, enable: true },
            },
            modes: {
              push: {
                default: true,
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
                easing: "ease-out-quad",
              },
            },
          },
          particles: {
            number: {
              value: 80,
              density: { enable: true, width: 1920, height: 1080 },
            },
            color: { value: "#ff0000" },
            size: { value: 3 },
            move: { speed: 6 },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            links: { enable: true, distance: 150, opacity: 0.4 },
            collisions: { enable: false },
            zIndex: { value: 0 },
          },
        }}
      />
      <div className="hero-content text-light position-absolute">
        <h1 className="fw-bold">
          Hey, I'm John <br />
          <span style={{ color: words[wordIndex].color }}>{displayText}</span>
          {showCursor && <span className="cursor">|</span>}
        </h1>
        <p className="mt-3 text-muted">
          I craft visually appealing designs that bring brands to life.
        </p>
        <button
          className="btn btn-primary mt-3"
          onClick={() => scrollToSection("Contact")}
        >
          Get In Touch
        </button>
      </div>
    </section>
  )
}
