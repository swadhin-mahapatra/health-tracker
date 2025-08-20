import React from "react"

export default function Settings() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Settings</h2>
      <div className="mt-6 space-y-4">
        <button className="w-full bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md">
          Toggle Dark/Light Mode
        </button>
        <button className="w-full bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md">
          Reset All Data
        </button>
      </div>
    </div>
  )
}
