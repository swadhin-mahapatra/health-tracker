import React from "react"
import { useParams } from "react-router-dom"

export default function HabitDetail() {
  const { id } = useParams()
  return (
    <div>
      <h2 className="text-2xl font-bold">Habit Detail</h2>
      <p className="text-gray-400 mt-2">Habit ID: {id}</p>
    </div>
  )
}
