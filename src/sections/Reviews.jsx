import React from "react"
import { SectionTitle } from "../components"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { reviews } from "../constant"


const Reviews = () => (
  <section className="py-16 bg-white text-gray-900 text-center">
    <SectionTitle
      title="Client Success Stories"
      desc="See how our members have transformed their lives with our expert trainers and supportive community."
    />
    <div className="w-full max-w-4xl mx-auto px-4 mt-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
        className="pb-12"
      >
        {reviews.map(({ name, beforeImg, afterImg, review, trainer }, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-gray-50 rounded-lg shadow p-6 flex flex-col items-center">
              <div className="flex gap-4 mb-4">
                <img
                  src={beforeImg}
                  alt={`${name} before`}
                  className="w-28 h-28 object-cover rounded"
                />
                <img
                  src={afterImg}
                  alt={`${name} after`}
                  className="w-28 h-28 object-cover rounded"
                />
              </div>
              <p className="italic text-gray-700 mb-2">"{review}"</p>
              <div className="text-sm text-gray-500">
                - {name}{" "}
                <span className="ml-2 text-blue-600">(Trainer: {trainer})</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
)

export default Reviews
