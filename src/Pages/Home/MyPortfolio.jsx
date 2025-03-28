import React, { useState } from "react"
import { motion } from "framer-motion"
import data from "../../data/index.json"

export default function MyPortfolio() {
  const [modalData, setModalData] = useState(null)

  const openModal = (item) => {
    setModalData(item)
  }

  const closeModal = () => {
    setModalData(null)
  }

  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
      </div>

      {/* Bootstrap Grid */}
      <div className="container">
        <div className="row">
          {data?.portfolio?.map((item, index) => (
            <motion.div
              key={index}
              className="col-md-4 mb-4"
              onClick={() => openModal(item)}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} // Alternate left & right
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }} // Triggers when 30% visible
            >
              <div className="card h-100">
                <img src={item.src} className="card-img-top" alt="Project" />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  {/* Read More Button */}
                  <div className="d-flex justify-content-center mt-auto">
                    <button
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.stopPropagation() // Prevent modal from opening when clicking "Read More"
                        openModal(item)
                      }}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalData && (
        <motion.div
          className="modal d-block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4 }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Removed the close button from the header */}
              <div className="modal-header">
                <h5 className="modal-title">{modalData.title}</h5>
                {/* Close button removed here */}
              </div>
              <div className="modal-body">
                <p>{modalData.description}</p>
                <img src={modalData.src} alt="Project" className="img-fluid" />
                <a
                  href={modalData.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {modalData.link}
                </a>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  )
}
