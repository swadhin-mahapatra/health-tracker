// HabitCard.jsx
import React, { useState } from "react";

export default function HabitCard({ habit, setHabits }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(habit.name);

  const defaultHabits = [
    { id: 1, name: "Workout", streak: 4, progress: 60 },
    { id: 2, name: "Reading", streak: 7, progress: 45 },
    { id: 3, name: "Meditation", streak: 2, progress: 30 },
  ];

  // ✅ Delete habit
  const handleDelete = () => {
    setHabits((prev) => {
      const updated = prev.filter((h) => h.id !== habit.id);
      if (updated.length === 0) {
        // Reset to defaults if all habits are deleted
        localStorage.setItem("habits", JSON.stringify(defaultHabits));
        return defaultHabits;
      }
      localStorage.setItem("habits", JSON.stringify(updated));
      return updated;
    });
  };

  // ✅ Save edited habit
  const handleSave = () => {
    setHabits((prev) => {
      const updated = prev.map((h) =>
        h.id === habit.id ? { ...h, name } : h
      );
      localStorage.setItem("habits", JSON.stringify(updated));
      return updated;
    });
    setIsEditing(false);
  };

  return (
    <div className="bg-gray-800 rounded-2xl shadow-lg p-5 flex flex-col gap-4">
      {isEditing ? (
        <input
          className="w-full p-2 rounded bg-gray-700 text-white outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      ) : (
        <h3 className="text-lg font-semibold text-indigo-300">{habit.name}</h3>
      )}

      <p className="text-sm text-gray-400">🔥 Streak: {habit.streak} days</p>
      <p className="text-sm text-gray-400">
        📊 Progress: {habit.progress}%
      </p>

      <div className="flex gap-3 mt-auto">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-sm"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm"
          >
            Edit
          </button>
        )}

        <button
          onClick={handleDelete}
          className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
