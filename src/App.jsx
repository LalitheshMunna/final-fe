import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import TaskList from "./components/TaskList";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>  {/* 👈 NO basename here */}
      <div className="app-shell">
        {/* header / layout etc */}
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
      </div>
    </BrowserRouter>
  );
}
