// src/components/Login.jsx
import React, { useState } from "react";
import { login } from "../services/authServices";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const user = await login(email, password);
      localStorage.setItem("user", JSON.stringify(user));
      alert("Login successful!");
      navigate("/tasklist");
    } catch (error) {
      console.error("Login error:", error);
      alert(error.message || "Login failed! Please try again.");
    }
  };

  return (
    <div className="page page-auth">
      <section className="auth-panel auth-panel--login">
        <div className="auth-panel-left">
          <h1 className="auth-title">Welcome back</h1>
          <p className="auth-subtitle">
            Sign in to keep track of everything you need to do.
          </p>
        </div>

        <div className="auth-panel-right">
          <div className="auth-card">
            <h2 className="auth-card-title">Login</h2>

            <label className="field-label">Email</label>
            <input
              className="field-input"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className="field-label">Password</label>
            <input
              className="field-input"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className="btn-primary" onClick={handleLogin}>
              Sign in
            </button>

            <p className="auth-footer-text">
              Don’t have an account?{" "}
              <Link className="auth-link" to="/register">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
