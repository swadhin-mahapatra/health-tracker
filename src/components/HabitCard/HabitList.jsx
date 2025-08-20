// src/components/Habits/HabitList.jsx
import React from "react";
import HabitCard from "./HabitCard";

export default function HabitList({ habits, setHabits }) {
  // Add a new habit
  const addHabit = () => {
    const title = prompt("Enter habit title:");
    if (!title) return;

    const newHabit = {
      id: Date.now(),
      title,
      description: "",
      streak: 0,
      completedDays: [],
    };

    setHabits([...habits, newHabit]);
  };

  // Delete a habit
  const deleteHabit = (id) => {
    setHabits(habits.filter((h) => h.id !== id));
  };

  // Edit habit title
  const editHabit = (id) => {
    const newTitle = prompt("Edit habit title:");
    if (!newTitle) return;
    setHabits(habits.map((h) => (h.id === id ? { ...h, title: newTitle } : h)));
  };

  return (
    <div>
      <button
        onClick={addHabit}
        className="mb-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
      >
        + Add Habit
      </button>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {habits.map((habit) => (
          <HabitCard
            key={habit.id}
            habit={habit}
            onDelete={deleteHabit}
            onEdit={editHabit}
          />
        ))}
      </div>
    </div>
  );
}
