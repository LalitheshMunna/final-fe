// src/components/Register.jsx
import React, { useState } from "react";
import { signup } from "../services/authServices";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await signup(username, email, password);
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error.response?.data || error.message);
      alert(
        `Registration failed: ${
          error.response?.data?.message || "Unknown error"
        }`
      );
    }
  };

  return (
    <div className="page page-auth">
      <section className="auth-panel auth-panel--register">
        <div className="auth-panel-left">
          <h1 className="auth-title">Create your space</h1>
          <p className="auth-subtitle">
            One account for all your tasks, priorities and categories.
          </p>
        </div>

        <div className="auth-panel-right">
          <div className="auth-card">
            <h2 className="auth-card-title">Register</h2>

            <label className="field-label">Username</label>
            <input
              className="field-input"
              type="text"
              placeholder="Pick a display name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label className="field-label">Email</label>
            <input
              className="field-input"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="field-label">Password</label>
            <input
              className="field-input"
              type="password"
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="btn-primary" onClick={handleRegister}>
              Sign up
            </button>

            <p className="auth-footer-text">
              Already registered?{" "}
              <Link className="auth-link" to="/login">
                Login instead
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
