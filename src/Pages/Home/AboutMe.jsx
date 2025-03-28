"use client"
import { motion } from "framer-motion"

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      {/* Image with left animation */}
      <motion.div
        className="about--section--img"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        photo
        {/* <img src="./img/about-me.png" alt="About Me" /> */}
      </motion.div>

      {/* Text Content with right animation */}
      <motion.div
        className="hero--section--content--box about--section--box"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            officiis sit debitis omnis harum sed veniam quasi dicta accusamus
            recusandae? Voluptatem, reprehenderit alias? Eligendi aperiam
            tempora numquam sint odit optio.
          </p>
          <p className="hero--section-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            officiis sit debitis omnis harum sed veniam quasi dicta accusamus
            recusandae?
          </p>
        </div>
      </motion.div>
    </section>
  )
}
