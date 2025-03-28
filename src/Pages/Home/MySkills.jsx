import { motion } from "framer-motion"
import data from "../../data/index.json"

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container text-center">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container d-flex flex-wrap justify-content-center">
        {data?.skills?.map((item, index) => (
          <motion.div
            key={index}
            className="card skills--section--card mx-3 my-4"
            initial={{ opacity: 0, y: 50 }} // Start from bottom, invisible
            whileInView={{ opacity: 1, y: 0 }} // Move to original position
            transition={{ duration: 0.6, delay: index * 0.2 }} // Delay each card
            viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% visible
            style={{ width: "18rem" }} // Set card width
          >
            <div className="skills--section--img">
              <img
                src={item.src}
                alt={item.title}
                className="card-img-top"
                style={{ objectFit: "cover", height: "200px" }}
              />
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
