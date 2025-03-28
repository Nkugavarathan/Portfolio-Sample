import { motion } from "framer-motion"
import data from "../../data/index.json" // Assuming data is in this file

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container text-center">
        <h2 className="skills--section--heading fw-bold text-primary mx-auto">
          My skills
        </h2>
      </div>
      <div className="skills--section--container d-flex justify-content-center align-items-center flex-wrap">
        {data?.skills?.map((item, index) => (
          <motion.div
            key={index}
            className="skills--section--icon-container mx-4 my-3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={item.src} // Image source for the colorful icons
              alt={item.title}
              style={{
                width: "50px", // Set the size as needed
                height: "50px", // Set the size as needed
                objectFit: "contain",
                transition: "transform 0.3s ease",
              }}
            />
            <p className="skills--section--title mt-2">{item.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
