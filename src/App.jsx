// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import TaskList from "./components/TaskList";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter basename="/frontend">
      <div className="app-shell">
        <header className="app-header">
          <div className="app-logo">TaskFlow</div>
          <div className="app-header-accent" />
        </header>

        <main className="app-main">
          <div className="app-main-inner">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/tasklist" element={<TaskList />} />
            </Routes>
          </div>
        </main>

        <footer className="app-footer">
          <span>TaskFlow · Minimal Task Manager</span>
        </footer>
      </div>
    </BrowserRouter>
  );
}
