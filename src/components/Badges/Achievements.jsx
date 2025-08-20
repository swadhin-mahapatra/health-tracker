// src/components/Badges/Achievements.jsx
import React from "react";
import Badge from "./Badge";

export default function Achievements({ habits }) {
  // Longest streak among all habits
  const longestStreak = habits.length > 0 ? Math.max(...habits.map((h) => h.streak || 0)) : 0;

  // Total streaks summed across all habits
  const totalStreaks = habits.length > 0 ? habits.reduce((sum, h) => sum + (h.streak || 0), 0) : 0;

  // Consistency: all habits streak >= 7
  const consistency =
    habits.length > 0 && habits.every((h) => (h.streak || 0) >= 7);

  // Perfect streak: all habits streak >= 30
  const perfection =
    habits.length > 0 && habits.every((h) => (h.streak || 0) >= 30);

  return (
    <div className="bg-gray-800 p-4 rounded-2xl shadow">
      <h2 className="text-lg font-bold mb-4">Achievements</h2>
      <div className="flex flex-wrap gap-6">
        {/* Earned when user has at least one habit */}
        <Badge label="First Step" earned={habits.length > 0} />

        {/* Streak-based badges */}
        <Badge label="7-Day Streak" earned={longestStreak >= 7} />
        <Badge label="30-Day Streak" earned={longestStreak >= 30} />

        {/* Consistency (all habits must have streak >= 7) */}
        <Badge label="Consistency King" earned={consistency} />

        {/* Perfect streaks (all habits streak >= 30) */}
        <Badge label="Perfectionist" earned={perfection} />

        {/* Collector (number of habits) */}
        <Badge label="Habit Collector" earned={habits.length >= 5} />

        {/* Total streak milestone */}
        <Badge label="100 Total Days" earned={totalStreaks >= 100} />
      </div>
    </div>
  );
}
