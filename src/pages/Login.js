import React, { useState } from "react";
import "../pages/css/login.css";
import { logUserIn } from "../services/Auth";
import { useNavigate, NavLink } from "react-router";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔹 Static Admin Login
    if (email === "admin@gmail.com" && password === "admin123") {
      localStorage.setItem("authToken", "admin");
      localStorage.setItem("role", "admin"); // save role
      toast.success("Admin login successful");
      navigate("/adminPanel", { replace: true });
      return;
    }

    // 🔹 Normal User Login (from DB)
    logUserIn(email, password)
      .then((response) => {
        if (response.data.length > 0) {
          const user = response.data[0];

          localStorage.setItem("authToken", user.id); // save user id
          localStorage.setItem("role", "user");       // save role

          toast.success("Login successful");
          navigate("/", { replace: true }); // redirect to homepage
        } else {
          toast.error("Invalid email or password");
        }
      })
      .catch(() => {
        toast.error("Login failed. Try again.");
      });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">Hotel Star Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>

          <p className="login-footer">
            Don’t have an account?{" "}
            <NavLink to="/signup" className="signup-link">
              Sign Up
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
