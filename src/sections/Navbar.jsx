/* eslint-disable no-unused-vars */

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Button from "../components/Button"
import EnquireForm from "./EnquireForm"
import { navLinks } from "../constant"
import logo from "../assets/logo.jpeg"

const Navbar = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <nav className="sticky-navbar px-6 py-4 flex items-center justify-between shadow-sm">
        <a
          href="#home"
          className="text-2xl font-bold text-blue-700 whitespace-nowrap flex items-center"
        >
          <img
            src={logo}
            alt="Crosstrek Logo"
            className="h-15 w-38 inline-block mr-2"
          />
        </a>
        <div className="flex items-center w-auto">
          <div className="hidden md:flex space-x-6 items-center">
            <ul className="flex gap-8 text-lg font-medium">
              {navLinks.map((link) => (
                <motion.li key={link.to} whileHover={{ scale: 1.1 }}>
                  <a
                    href={link.to}
                    className="nav-link text-gray-700 hover:text-blue-600"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          <Button className="ml-0 md:ml-4" onClick={() => setShowModal(true)}>
            Book a Free Trial
          </Button>
        </div>
      </nav>
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                ×
              </button>
              <h3 className="text-2xl font-bold mb-4 text-center">
                Enquire Now
              </h3>
              <EnquireForm onClose={() => setShowModal(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
