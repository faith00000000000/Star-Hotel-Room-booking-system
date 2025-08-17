import React, { useState } from "react";
import "../pages/css/login.css";
import { logUserIn } from "../services/Auth";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Login = () => {
  const navigate=useNavigate();

    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");

    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
    }

    const handlePasswordChange=(e)=>{
        setPassword(e.target.value);
    }

    const handleSubmit=(e) =>{
        logUserIn(email,password).then((response)=>{
            if(response.data.length>0){
                console.log("successful");
                toast.success("login successful");
                navigate("/adminPanel",{replace:true});
            }
        }
    )
    }

  return (
    <div className="login-page">
      <div className="overlay"></div>
      <div className="login-container">
        <h2>Hotel Star Admin Login</h2>
        <form action="#" method="post">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="admin@hotelstar.com" onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="********" onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="button" onClick={handleSubmit}>Login</button>
          <p className="note">
            By logging in, you agree to our Terms & Privacy Policy.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
