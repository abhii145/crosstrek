import React from "react"
import videoSrc from "../assets/evolvenspe.mp4"
import { FaRegStar } from "react-icons/fa"
import { address } from "../constant/label"
import { CONTACT_INFO, pricingPlans } from "../constant"

const Home = () => (
  <section className="pt-16 relative h-screen w-full overflow-hidden">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover absolute top-0 left-0 z-0"
      src={videoSrc}
    />
    {/* Overlay */}
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8 text-white z-10">
      <div className="bg-yellow-400 text-black rounded-md px-4 py-2 mb-4 inline-block font-semibold text-lg shadow-lg">
        {CONTACT_INFO.offer} {CONTACT_INFO.phones.join(" | ")}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        {pricingPlans.map((plan, idx) => (
          <div key={idx} className="bg-blue-600 bg-opacity-80 p-4 rounded-lg">
            <p className="text-sm">{plan.label}</p>
            <p className="text-xl font-bold">{plan.price}</p>
          </div>
        ))}
      </div>
      <div className="container mx-auto">
        <a
          href="https://maps.app.goo.gl/Kf3z47W58GKWmoh6A"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-lg mb-4"> 📍 {address.desc}</p>
        </a>
      </div>
      <div className="flex items-center">
        <FaRegStar color="yellow" />
        <span> 4.5 (195 reviews)</span>
      </div>
    </div>
  </section>
)

export default Home
