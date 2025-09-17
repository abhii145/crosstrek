import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { trainers } from "../constant"
import { expertTrainers } from "../constant/label"
import { SectionTitle, TrainerCard } from "../components"

const ExpertTrainers = () => {
  return (
    <section className="py-16 bg-gray-50 text-gray-900 text-center">
      <SectionTitle title={expertTrainers.title} desc={expertTrainers.desc} />
      <div className="w-full max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000, // 3 seconds
            disableOnInteraction: false, // keeps autoplay after user swipes
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {trainers.map((t, i) => (
            <SwiperSlide key={i}>
              <TrainerCard trainer={t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default ExpertTrainers
