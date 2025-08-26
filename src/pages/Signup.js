import { useState } from "react";
import "../pages/css/signup.css";
import { addUser } from "../services/user";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Signup = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  let handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  let handleSubmit = () => {
    addUser(user).then((response) => {
      if (response.data) {
        toast.success("Signup successful! Please login.");
        navigate("/login"); // redirect to login after signup
      }
    }).catch(() => toast.error("Signup failed. Try again."));
  };

  return (
    <div className="signup-container">
      <h2>Join Hotel Star</h2>
      <form>
        <div className="signup-form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            onChange={handleChange}
            required
          />
        </div>

        <div className="signup-form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            onChange={handleChange}
            required
          />
        </div>

        <div className="signup-form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="+977-98XXXXXXX"
            onChange={handleChange}
            required
          />
        </div>

        <div className="signup-form-group">
          <label htmlFor="password">Create Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            onChange={handleChange}
            required
          />
        </div>

        <button type="button" onClick={handleSubmit}>
          Signup
        </button>
        <p className="signup-note">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
