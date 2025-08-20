import { useState } from "react";
import "../pages/css/signup.css";
import { addUser } from "../services/user";

const Signup = () => {
  const [user, setUser] = useState({});

  let handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  let handleSubmit = () => {
    addUser(user).then((response) => {
      if (response.data) {
        console.log("successful"); // add notification
      }
    });
  };

  return (
    <>
      <div className="signup-overlay"></div>
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
            By signing up, you agree to our Terms & Privacy Policy.
          </p>
        </form>
      </div>
    </>
  );
};

export default Signup;
