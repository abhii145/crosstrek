import React from "react"

const CardGrid = ({ items }) => (
  <div className="max-w-5xl mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {items.map((item, i) => (
        <div
          key={i}
          className="card-modern bg-blue-50 rounded-2xl shadow p-6 flex flex-col items-center"
        >
          {item.icon && (
            <span className="w-16 h-16 text-blue-600 mb-3 text-5xl flex items-center justify-center">
              {item.icon}
            </span>
          )}
          <h4 className="font-bold text-lg mb-1">{item.title}</h4>
          <p className="text-gray-600 text-sm text-center">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
)

export default CardGrid
