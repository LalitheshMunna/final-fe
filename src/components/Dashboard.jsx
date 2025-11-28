// src/components/Dashboard.jsx
import TaskList from "./TaskList";

export default function Dashboard() {
  return (
    <div className="page page-dashboard">
      <div className="dash-hero">
        <div className="dash-hero-main">
          <h1 className="dash-title">Today&apos;s overview</h1>
          <p className="dash-subtitle">
            Capture tasks, mark progress, and clear them out one by one.
          </p>
        </div>
        <div className="dash-hero-meta">
          <span className="pill pill-accent">Focused mode</span>
        </div>
      </div>

      <section className="dash-content">
        <TaskList />
      </section>
    </div>
  );
}
