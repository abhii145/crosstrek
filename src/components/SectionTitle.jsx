/* eslint-disable no-unused-vars */
import React from "react"
import { motion } from "framer-motion"

const SectionTitle = ({ title, desc }) => (
  <motion.div
    className="mb-8 text-center"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl font-semibold">{title}</h2>
    {desc && <p className="mt-2 text-base font-normal text-gray-500">{desc}</p>}
  </motion.div>
)

export default SectionTitle
