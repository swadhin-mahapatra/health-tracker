// MonthHeatmap.jsx
import React from "react";

export default function MonthHeatmap({ days }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
      <h3 className="text-lg font-bold text-indigo-400 mb-4">Monthly Heatmap</h3>
      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => (
          <div
            key={day.id}
            className={`w-6 h-6 rounded-sm`}
            style={{
              backgroundColor:
                day.value === 0
                  ? "#1f2937"
                  : `rgba(99, 102, 241, ${0.2 + day.value * 0.15})`,
            }}
            title={`Day ${day.id + 1}: ${day.value} completions`}
          ></div>
        ))}
      </div>
    </div>
  );
}
