import React from "react"
import { socialLinks } from "../constant"

const SocialIcon = ({ href, label, icon: Icon, className }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={className}
  >
    {Icon && <Icon size={25} />}
  </a>
)

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between gap-4">
        <p className="text-center md:text-left w-full md:w-auto">
          © {new Date().getFullYear()} Crosstrek Gym. All rights reserved.
        </p>
        <div className="flex justify-center md:justify-end gap-6 w-full md:w-auto">
          {socialLinks.map((item) => (
            <SocialIcon key={item.label} {...item} />
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
