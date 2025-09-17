import React from "react"
import { CardGrid, SectionTitle } from "../components"
import { amenities } from "../constant"
import { aboutus, amenitiesLabel } from "../constant/label"

const About = () => (
  <section className="py-16 bg-white text-gray-900 text-center">
    <SectionTitle title={aboutus.title} />
    <p className="text-xl font-semibold text-blue-700 mb-8 max-w-2xl mx-auto">
      {aboutus.desc}
    </p>
    <SectionTitle title={amenitiesLabel.title} desc={amenitiesLabel.desc} />
    <CardGrid items={amenities} />
  </section>
)

export default About
