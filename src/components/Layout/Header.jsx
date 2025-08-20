import React from "react"
import { Link, useLocation } from "react-router-dom"

export default function Header() {
  const location = useLocation()

  const navItems = [
    { path: "/", label: "Dashboard" },
    { path: "/settings", label: "Settings" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-gray-800 shadow-md">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-16">
        {/* Brand */}
        <Link
          to="/"
          className="text-xl font-bold text-indigo-400 hover:text-indigo-300 transition"
        >
          Habit Tracker
        </Link>

        {/* Nav Links */}
        <div className="space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${
                location.pathname === item.path
                  ? "text-indigo-400 font-semibold"
                  : "text-gray-300 hover:text-indigo-400"
              } transition`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
