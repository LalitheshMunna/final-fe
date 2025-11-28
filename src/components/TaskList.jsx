// src/components/TaskList.jsx
import React, { useState, useEffect } from "react";
import {
  getTasks,
  addTask,
  toggleTaskCompletion,
  deleteTask,
} from "../services/taskService";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("low");
  const [category, setCategory] = useState("Work");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const handleAddTask = async () => {
    if (!newTask.trim()) return;
    await addTask({
      description: newTask,
      priority,
      category,
      completed: false,
    });
    setNewTask("");
    fetchTasks();
  };

  const handleToggle = async (id) => {
    await toggleTaskCompletion(id);
    fetchTasks();
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      fetchTasks();
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete task");
    }
  };

  return (
    <div className="task-layout">
      <aside className="task-sidebar">
        <h2 className="panel-title">Add task</h2>
        <p className="panel-helper">
          Describe, prioritise and categorise your work.
        </p>

        <div className="field-group">
          <label className="field-label">Task</label>
          <input
            type="text"
            className="field-input"
            placeholder="What needs to be done?"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>

        <div className="field-row">
          <div className="field-group">
            <label className="field-label">Priority</label>
            <select
              className="field-input select-input"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="high">High</option>
              <option value="low">Low</option>
            </select>
          </div>

          <div className="field-group">
            <label className="field-label">Category</label>
            <select
              className="field-input select-input"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Shopping">Shopping</option>
              <option value="Others">Others</option>
            </select>
          </div>
        </div>

        <button className="btn-primary" onClick={handleAddTask}>
          Add task
        </button>
      </aside>

      <section className="task-list-section">
        <header className="task-list-header">
          <h2 className="panel-title">Tasks</h2>
          <span className="task-count-pill">
            {tasks.length ? `${tasks.length} items` : "No tasks yet"}
          </span>
        </header>

        <ul className="task-list-grid">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`task-card ${
                task.completed ? "task-card--done" : "task-card--open"
              }`}
            >
              <div className="task-card-main">
                <p className="task-text">{task.description}</p>

                <div className="task-meta">
                  <span className={`tag tag-priority-${task.priority}`}>
                    {task.priority === "high" ? "High priority" : "Low priority"}
                  </span>
                  <span className="tag tag-category">{task.category}</span>
                </div>
              </div>

              <div className="task-actions">
                <button
                  className="btn-secondary"
                  onClick={() => handleToggle(task.id)}
                >
                  {task.completed ? "Mark as pending" : "Mark as done"}
                </button>

                {task.completed && (
                  <button
                    className="btn-danger"
                    onClick={() => handleDelete(task.id)}
                  >
                    Remove
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default TaskList;
