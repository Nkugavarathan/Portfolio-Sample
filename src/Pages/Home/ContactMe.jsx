import React from "react"
import { motion } from "framer-motion" // Import Framer Motion
import emailjs from "emailjs-com"

export default function ContactMe() {
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        e.target,
        "YOUR_USER_ID" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert("Message sent successfully!")
        },
        (error) => {
          alert("Failed to send message. Please try again.")
        }
      )
  }

  return (
    <section id="Contact" className="contact--section">
      <div className="portfolio--container text-center">
        <p className="sub--title fw-bold text-primary">Get In Touch</p>
        <h2 className="skills--section--heading fw-bold text-primary">
          Contact Me
        </h2>
      </div>

      {/* Framer Motion animation for form */}
      <motion.form
        className="contact--form--container"
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 50 }} // Start hidden and below the screen
        whileInView={{ opacity: 1, y: 0 }} // Fade in and move to original position
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }} // Trigger when 30% is visible
      >
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>

        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn" type="submit">
            Submit
          </button>
        </div>
      </motion.form>
    </section>
  )
}
