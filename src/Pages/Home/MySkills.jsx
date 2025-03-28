import { motion } from "framer-motion"
import data from "../../data/index.json"

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <motion.div
            key={index}
            className="skills--section--card"
            initial={{ opacity: 0, y: 50 }} // Start from bottom, invisible
            whileInView={{ opacity: 1, y: 0 }} // Move to original position
            transition={{ duration: 0.6, delay: index * 0.2 }} // Delay each card
            viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% visible
          >
            <div className="skills--section--img">
              <img src={item.src} alt={item.title} />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
