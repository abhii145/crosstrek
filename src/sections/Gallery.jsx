import React from "react"
import SectionTitle from "../components/SectionTitle"
import { equipmentImages } from "../constant"
import { gallery } from "../constant/label"

const Gallery = () => (
  <section id="gallery" className="fade-in py-16">
    <SectionTitle title={gallery.title} desc={gallery.desc} />
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {equipmentImages.map((img, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-blue-50 rounded-xl shadow p-4"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="gallery-img w-full h-48 object-cover rounded-lg mb-3 border-2 border-blue-100"
            />
            <span className="font-semibold text-blue-700">{img.label}</span>
            <span className="text-gray-600 text-sm">
              Quantity: {img.quantity}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Gallery
