
import "../css/adminPanel.css";


import React from "react";
import Sidebar from "./Sidebar";

const AdminPanel = () => {
 return (
    <div className="dashboard-container">
      <Sidebar/>
  

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <div className="header">
          <h2>Dashboard</h2>
          <p>Overview of your hotel operations</p>
        </div>

        {/* Stat Cards */}
        <div className="stats">
          <div className="stat-card">
            <h3>245</h3>
            <p>Total Rooms</p>
          </div>
          <div className="stat-card">
            <h3>186</h3>
            <p>Occupied Rooms</p>
          </div>
          <div className="stat-card">
            <h3>76%</h3>
            <p>Occupancy Rate</p>
          </div>
          <div className="stat-card">
            <h3>$12,450</h3>
            <p>Revenue Today</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="recent-activity">
          <h4>Recent Activity</h4>
          <div className="activity-item">
            <span>New booking: Room 205 - John Smith</span>
            <span className="time">5 min ago</span>
          </div>
          <div className="activity-item">
            <span>Check-out: Room 314 - Sarah Johnson</span>
            <span className="time">1 hour ago</span>
          </div>
          <div className="activity-item">
            <span>Maintenance request: Room 108 - AC repair</span>
            <span className="time">2 hours ago</span>
          </div>
          <div className="activity-item">
            <span>New booking: Room 421 - Mike Davis</span>
            <span className="time">3 hours ago</span>
          </div>
        </div>
      </main>
    </div>
  );
};


export default AdminPanel;
