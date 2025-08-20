// src/components/Badges/Badge.jsx
import React, { useState } from "react";

export default function Badge({ label, earned }) {
  const [open, setOpen] = useState(false);

  // Achievement descriptions
  const descriptions = {
    "First Step": "Add your first habit to start tracking.",
    "7-Day Streak": "Maintain a streak of 7 days in a row on any habit.",
    "30-Day Streak": "Maintain a streak of 30 days in a row on any habit.",
    "Consistency King": "Achieve at least 7-day streaks for all your habits.",
    "Perfectionist": "Maintain at least 30-day streaks for all your habits.",
    "Habit Collector": "Have 5 or more habits.",
    "100 Total Days": "Accumulate 100 total days across all habit streaks.",
  };

  return (
    <>
      {/* Badge */}
      <div
        onClick={() => setOpen(true)}
        className={`p-6 rounded-2xl shadow-md cursor-pointer transition transform hover:scale-105
          ${earned ? "bg-indigo-600 text-white" : "bg-gray-700 text-gray-400 opacity-50"}
        `}
      >
        <div className="text-3xl mb-2">{earned ? "🏆" : "🔒"}</div>
        <span className="font-semibold text-center">{label}</span>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-xl w-80 relative">
            <h3 className="text-xl font-bold mb-2">{label}</h3>
            <p className="text-gray-300 mb-4">
              {descriptions[label] || "No description available."}
            </p>
            <button
              onClick={() => setOpen(false)}
              className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg font-semibold transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
