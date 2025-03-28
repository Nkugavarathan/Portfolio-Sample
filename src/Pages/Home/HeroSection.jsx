import React, { useState, useEffect } from "react"

export default function HeroSection() {
  const words = [
    { text: "Graphic Designer", color: "#FF6347" }, // Tomato color
    { text: "UI/UX Designer", color: "#1E90FF" }, // DodgerBlue color
    { text: "Creative Thinker", color: "#32CD32" }, // LimeGreen color
  ]

  const [displayText, setDisplayText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  const speed = 100 // Slow typing speed (ms)
  const delayBetweenWords = 1000 // Delay after finishing a word
  const deleteSpeed = 50 // Faster speed while deleting characters

  useEffect(() => {
    let typingTimeout

    // Function for typewriter effect
    const typeEffect = () => {
      const currentWord = words[wordIndex].text
      const currentColor = words[wordIndex].color // Get the color for the current word

      if (isDeleting) {
        setCharIndex((prev) => prev - 1) // Decrease character index when deleting
      } else {
        setCharIndex((prev) => prev + 1) // Increase character index when typing
      }

      // Set the text based on current character index
      setDisplayText(currentWord.substring(0, charIndex))

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

    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev) // Blink cursor effect
    }, 500)

    // Clean up the blinking cursor interval on unmount
    return () => {
      clearInterval(cursorBlink)
      clearTimeout(typingTimeout) // Clean up typing timeout
    }
  }, [charIndex, isDeleting, wordIndex]) // Dependencies ensure effect runs when these values change

  return (
    <section className="d-flex align-items-center justify-content-center vh-100 bg-light text-center">
      <div>
        <h1 className="fw-bold">
          Hey, I'm John <br />
          <span
            className="text-primary"
            style={{ color: words[wordIndex].color }}
          >
            {displayText}
          </span>
          {showCursor && <span className="cursor">|</span>}{" "}
          {/* Only one cursor */}
        </h1>
        <p className="mt-3 text-muted">
          I craft visually appealing designs that bring brands to life.
        </p>
        <button className="btn btn-primary mt-3">Get In Touch</button>
      </div>
    </section>
  )
}
