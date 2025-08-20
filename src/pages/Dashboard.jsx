// Dashboard.jsx
import React, { useState, useEffect } from "react";
import HabitList from "../components/HabitCard/HabitList";
import WeeklyBars from "../components/Charts/WeeklyBars";
import ProgressRing from "../components/Charts/ProgressRing";
import MonthHeatmap from "../components/Charts/MonthHeatmap";
import Achievements from "../components/Badges/Achievements";

export default function Dashboard() {
  const defaultHabits = [
    { id: 1, name: "Workout", streak: 4, progress: 60 },
    { id: 2, name: "Reading", streak: 7, progress: 45 },
    { id: 3, name: "Meditation", streak: 2, progress: 30 },
  ];

  const [habits, setHabits] = useState([]);

  // Load from localStorage or defaults
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("habits"));
    if (stored && stored.length > 0) {
      setHabits(stored);
    } else {
      setHabits(defaultHabits);
      localStorage.setItem("habits", JSON.stringify(defaultHabits));
    }
  }, []);

  // Save habits whenever they change
  useEffect(() => {
    if (habits.length > 0) {
      localStorage.setItem("habits", JSON.stringify(habits));
    }
  }, [habits]);

  // 🔹 Calculate average progress
  const avgProgress =
    habits.length > 0
      ? Math.round(
          habits.reduce((sum, h) => sum + (h.progress || 0), 0) / habits.length
        )
      : 0;

  // 🔹 Calculate streak stats
  const longestStreak =
    habits.length > 0 ? Math.max(...habits.map((h) => h.streak || 0)) : 0;

  const totalStreaks = habits.reduce((sum, h) => sum + (h.streak || 0), 0);

  // 🔹 Weekly chart data
  const weeklyData = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
    (day) => ({
      day,
      progress:
        habits.length > 0
          ? Math.round(
              habits.reduce((sum, h) => sum + (h.progress || 0), 0) /
                habits.length *
                (0.6 + Math.random() * 0.8)
            )
          : 0,
    })
  );

  // 🔹 Monthly heatmap data (randomized intensity based on streaks)
  const monthData = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    value:
      habits.length > 0
        ? Math.floor(Math.random() * (longestStreak + 1))
        : 0,
  }));

  return (
    <div className="min-h-screen w-full bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <header className="px-8 py-6 border-b border-gray-700">
        <h1 className="text-3xl font-bold text-indigo-400">Habit Dashboard</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-8 py-6 space-y-12">
        {/* Habit Cards Section */}
        <section>
          <h2 className="text-xl font-semibold text-gray-200 mb-4">
            Your Habits
          </h2>
          <HabitList habits={habits} setHabits={setHabits} />
        </section>

        {/* Charts Section */}
        <section>
          <h2 className="text-xl font-semibold text-gray-200 mb-4">
            Progress Overview
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <WeeklyBars data={weeklyData} />
            <ProgressRing progress={avgProgress} />
            <MonthHeatmap days={monthData} />
          </div>
        </section>

        {/* Achievements Section */}
        <Achievements habits={habits} />
      </main>
    </div>
  );
}
