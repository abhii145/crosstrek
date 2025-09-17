import React from "react"

const TextArea = ({ placeholder, rows = 4 }) => (
  <textarea
    placeholder={placeholder}
    rows={rows}
    className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
  ></textarea>
)

export default TextArea
