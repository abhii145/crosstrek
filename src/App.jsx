import React, { useEffect } from "react"
import "./styles/modern.css"
import { About, Classes, ExpertTrainers, Footer, Gallery, Home, Navbar, Reviews } from "./sections"

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
