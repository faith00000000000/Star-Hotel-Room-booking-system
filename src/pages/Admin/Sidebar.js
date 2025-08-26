// src/components/Sidebar.js
import React from "react";
import { NavLink } from "react-router";  // <-- should be react-router-dom, not react-router
import "../css/Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="bm-sidebar">
      
      <div className="bm-sidebar-header">Hotel Admin</div>
      <ul className="bm-sidebar-menu">
        <li>
          <NavLink to="/admin/adminPanel" className={({isActive}) => isActive ? "bm-active-link" : ""}>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/admin/adminRooms" className={({isActive}) => isActive ? "bm-active-link" : ""}>Rooms</NavLink>
        </li>
        <li>
          <NavLink to="/admin/bookingManagement" className={({isActive}) => isActive ? "bm-active-link" : ""}>Bookings</NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
