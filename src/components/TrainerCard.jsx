import React from "react"

const TrainerCard = ({ trainer }) => (
  <div className="trainer-card bg-blue-50 rounded-2xl shadow p-6 flex flex-col items-center border border-blue-100">
    <img
      src={trainer.photo}
      alt={trainer.name}
      className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-200 shadow"
    />
    <h4 className="text-xl font-bold mb-1 text-blue-700">{trainer.name}</h4>
    <p className="text-gray-600 text-sm mb-1">{trainer.certificates}</p>
    <p className="text-gray-600 text-sm mb-1">
      Experience: {trainer.experience}
    </p>
    <p className="text-gray-800 font-semibold mb-2">Fees: {trainer.fees}</p>
    <p className="text-gray-500 text-xs text-center">{trainer.desc}</p>
  </div>
)

export default TrainerCard
