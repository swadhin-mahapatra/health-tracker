// WeeklyBars.jsx
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export default function WeeklyBars({ data }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
      <h3 className="text-lg font-bold text-indigo-400 mb-4">Weekly Progress</h3>
      <BarChart width={300} height={200} data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis dataKey="day" stroke="#aaa" />
        <YAxis domain={[0, 100]} stroke="#aaa" />
        <Tooltip />
        <Bar dataKey="progress" fill="#6366f1" radius={[6, 6, 0, 0]} />
      </BarChart>
    </div>
  );
}
