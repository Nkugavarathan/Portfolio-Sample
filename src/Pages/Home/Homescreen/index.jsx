import AboutMe from "../AboutMe"
import ContactMe from "../ContactMe"
import Footer from "../Footer"
import HeroSection from "../HeroSection"
import MyPortfolio from "../MyPortfolio"
import MySkills from "../MySkills"
import "bootstrap/dist/css/bootstrap.min.css"

// import Testimonial from "../Testimonials"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <MySkills />
      <MyPortfolio />
      {/* <Testimonial /> */}
      <ContactMe />
      <Footer />
    </>
  )
}
