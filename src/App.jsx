import React, { useEffect } from "react"
import Navbar from "./sections/Navbar"
import Home from "./sections/Home"
import Classes from "./sections/Classes"
import About from "./sections/About"
import ExpertTrainers from "./sections/ExpertTrainers"
import Gallery from "./sections/Gallery"
import Footer from "./sections/Footer"
import Reviews from "./sections/Reviews"
import "./styles/modern.css"

const App = () => {
  useEffect(() => {
    const revealSections = () => {
      document.querySelectorAll("main section").forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top < window.innerHeight - 80) {
          section.classList.add("visible")
        }
      })
    }
    window.addEventListener("scroll", revealSections)
    revealSections()
    return () => window.removeEventListener("scroll", revealSections)
  }, [])

  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section id="home" className="fade-in">
          <Home />
        </section>
        <section id="about" className="fade-in">
          <About />
        </section>
        <section id="trainers" className="fade-in">
          <ExpertTrainers />
        </section>
        <Gallery />
        <section id="classes" className="fade-in">
          <Classes />
        </section>
        <Reviews />
      </main>
      <Footer />
    </div>
  )
}

export default App
