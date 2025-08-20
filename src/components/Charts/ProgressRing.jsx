// src/components/Charts/ProgressRing.jsx
import React from "react";

export default function ProgressRing({ habits = [] }) {
  // Calculate overall average progress across all habits
  const totalProgress =
    habits.length > 0
      ? habits.reduce((sum, h) => sum + (h.progress || 0), 0)
      : 0;

  const progress =
    habits.length > 0 ? Math.round(totalProgress / habits.length) : 0;

  const radius = 60;
  const circumference = 2 * Math.PI * radius;

  // Ensure offset calculation is safe
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center">
      <h3 className="text-lg font-bold text-indigo-400 mb-4">
        Overall Progress
      </h3>
      <svg width="150" height="150" className="-rotate-90">
        <circle
          cx="75"
          cy="75"
          r={radius}
          stroke="#374151"
          strokeWidth="12"
          fill="transparent"
        />
        <circle
          cx="75"
          cy="75"
          r={radius}
          stroke="#6366f1"
          strokeWidth="12"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          fill="transparent"
        />
      </svg>
      <span className="mt-4 text-2xl font-bold text-white">{progress}%</span>
    </div>
  );
}
