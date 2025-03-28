// import React, { useState, useEffect } from "react"
// import { Particles } from "react-tsparticles"
// import { loadFull } from "tsparticles"

// export default function HeroSection() {
//   const [text, setText] = useState("")
//   const fullText = "Hey, I'm John Full Stack Developer"
//   const typingSpeed = 200 // Adjusted to slower speed (in milliseconds)
//   const delayAfterTyping = 3000 // Delay before restarting the typing effect

//   useEffect(() => {
//     let index = 0

//     const typeText = () => {
//       const typingInterval = setInterval(() => {
//         setText(fullText.slice(0, index + 1)) // Correctly slices the string
//         index++

//         if (index === fullText.length) {
//           clearInterval(typingInterval) // Stop typing once the text is complete
//           setTimeout(() => {
//             setText("") // Reset the text after a delay
//             index = 0 // Restart typing
//             typeText() // Recursive call to restart typing
//           }, delayAfterTyping)
//         }
//       }, typingSpeed)
//     }

//     typeText() // Start typing effect

//     return () => clearInterval() // Cleanup interval on component unmount
//   }, [])

//   const particlesInit = async (main) => {
//     await loadFull(main) // Loads tsparticles instance with all features
//   }

//   const particlesConfig = {
//     autoPlay: true,
//     background: {
//       color: {
//         value: "#f5fcff", // Matches --bg-shade
//       },
//     },
//     detectRetina: true,
//     fpsLimit: 120,
//     interactivity: {
//       detectsOn: "canvas",
//       events: {
//         onHover: {
//           enable: true,
//           mode: "repulse", // Particles repel on hover
//         },
//       },
//     },
//     particles: {
//       color: {
//         value: "#5e3bee", // Matches --primary
//       },
//       links: {
//         enable: true,
//         color: "#1c1e53", // Matches --darkblue
//         opacity: 0.4,
//         distance: 150,
//       },
//       move: {
//         enable: true,
//         speed: 2, // Smooth movement
//         direction: "none",
//       },
//       number: {
//         value: 70, // Balanced number of particles
//         density: {
//           enable: true,
//           area: 800,
//         },
//       },
//       opacity: {
//         value: 0.3, // Subtle effect
//       },
//       size: {
//         value: { min: 1, max: 3 }, // Size range
//       },
//     },
//   }

//   return (
//     <section id="heroSection" className="hero--section">
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         options={particlesConfig}
//       />
//       <div className="hero--section--content--box">
//         <div className="hero--section--content">
//           <h1 className="hero--section--title">{text}</h1>
//           <p className="hero--section-description">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//             <br /> Dolorum, quas. Amet soluta assumenda cum?
//           </p>
//         </div>
//         <button className="btn btn-primary">Get In Touch</button>
//       </div>
//       <div className="hero--section--img">
//         <img src="./img/hero_img.png" alt="Hero Section" />
//       </div>
//     </section>
//   )
// }

import React, { useState, useEffect } from "react"

export default function HeroSection() {
  const [text, setText] = useState("") // State for typing effect
  const fullText = "Hey, I'm John Full Stack Developer" // Full text to type out
  const typingSpeed = 100 // Typing speed in milliseconds
  const delayAfterTyping = 3000 // Delay before restarting the typing effect

  useEffect(() => {
    let index = 0

    const typeText = () => {
      const typingInterval = setInterval(() => {
        setText((prev) => fullText.slice(0, index + 1)) // Update text character by character
        index++

        if (index === fullText.length) {
          clearInterval(typingInterval) // Stop when the full text is typed
          setTimeout(() => {
            setText("") // Clear the text after a delay
            index = 0
            typeText() // Restart typing effect
          }, delayAfterTyping)
        }
      }, typingSpeed)
    }

    typeText() // Start typing effect

    return () => clearInterval() // Cleanup interval on unmount
  }, []) // Empty dependency array ensures this runs once on mount

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <h1 className="hero--section--title">{text}</h1>{" "}
          {/* Displays typing effect */}
        </div>
        <p>dsdf</p>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
    </section>
  )
}
