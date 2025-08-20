// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import HabitDetail from "./pages/HabitDetail";
import Settings from "./pages/Settings";
import Header from "./components/Layout/Header";
import Container from "./components/Layout/Container";

export default function App() {
  const defaultHabits = [
    { id: 1, title: "Drink Water", description: "Stay hydrated", streak: 3, completedDays: [1, 2, 3] },
    { id: 2, title: "Read 10 Pages", description: "Expand knowledge", streak: 7, completedDays: [1, 2, 3, 4, 5, 6, 7] },
    { id: 3, title: "Exercise", description: "30 min workout", streak: 2, completedDays: [1, 2] },
  ];

  const [habits, setHabits] = useState([]);

  // Load habits from localStorage or use defaults
  useEffect(() => {
    const stored = localStorage.getItem("habits");
    if (stored) {
      setHabits(JSON.parse(stored));
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

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <Header />
        <Container>
          <Routes>
            {/* Pass habit state as props */}
            <Route path="/" element={<Dashboard habits={habits} setHabits={setHabits} />} />
            <Route path="/habit/:id" element={<HabitDetail habits={habits} setHabits={setHabits} />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}
