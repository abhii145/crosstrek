import React from "react"

const Input = ({ type = "text", placeholder }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
)

export default Input
