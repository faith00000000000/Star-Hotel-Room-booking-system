// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router"; // since you're using react-router

import "../css/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Admin Panel</h2>
      <ul className="sidebar-menu">
        <li>
          <Link to="/admin/rooms">Manage Rooms</Link>
        </li>
        <li>
          <Link to="/admin/bookings">Manage Bookings</Link>
        </li>
        <li>
          <Link to="/admin/users">Manage Users</Link>
        </li>
        
        
      </ul>
    </div>
  );
};

export default Sidebar;
