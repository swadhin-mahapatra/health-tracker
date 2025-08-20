import React, { useState } from "react"

export default function HabitForm({ onSave, onClose }) {
  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    onSave({ id: Date.now(), name, streak: 0, progress: 0 })
    setName("")
    onClose()
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Add New Habit</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Habit Name */}
          <div>
            <label className="block text-gray-300 text-sm mb-1">Habit Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Morning Run"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gray-600 hover:bg-gray-500 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
