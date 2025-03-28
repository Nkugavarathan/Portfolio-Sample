import { motion } from "framer-motion"
import data from "../../data/index.json"

export default function MySkills() {
  return (
    <section className="skills--section py-5" id="mySkills">
      <div className="container text-center mb-5">
        <h2 className="skills--section--heading fw-bold text-primary display-4">
          My Skills
        </h2>
      </div>
      <div className="skills--section--container d-flex flex-column flex-md-row justify-content-center align-items-center">
        {data?.skills?.map((item, index) => (
          <motion.div
            key={index}
            className="skills--section--icon-container mx-4 my-3 text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              alt={item.title}
              className="skills--section--icon mb-2"
              style={{
                width: "50px",
                height: "50px",
                objectFit: "contain",
                transition: "transform 0.3s ease",
              }}
            />
            <p className="skills--section--title text-muted">{item.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
