import React from "react"

export default function Container({ children }) {
  return (
    <main className="flex-1 min-h-[calc(100vh-4rem)] bg-gray-900 text-white px-6 sm:px-8 lg:px-12 py-8">
      <div className="max-w-7xl mx-auto w-full">{children}</div>
    </main>
  )
}
