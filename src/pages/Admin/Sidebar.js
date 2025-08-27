import React from "react";
import { NavLink, useNavigate } from "react-router";
import "../css/Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <aside className="bm-sidebar">
      <div className="bm-sidebar-header">Hotel Admin</div>
      <ul className="bm-sidebar-menu">
        <li>
          <NavLink
            to="/admin/adminRooms"
            className={({ isActive }) => (isActive ? "bm-active-link" : "")}
          >
            Rooms
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/bookingManagement"
            className={({ isActive }) => (isActive ? "bm-active-link" : "")}
          >
            Bookings
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            onClick={handleLogout}
            className="bm-logout-link"
          >
            Logout
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
