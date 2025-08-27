// src/pages/Admin/AdminPanel.js
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { getBookingData } from "../../services/booking";
import { getAllRooms } from "../../services/room";   // ✅ fixed import
import "../css/adminPanel.css";

const AdminPanel = () => {
  const [rooms, setRooms] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [stats, setStats] = useState({
    totalRooms: 0,
    occupiedRooms: 0,
    occupancyRate: 0,
    revenueToday: 0,
  });

  useEffect(() => {
    // Fetch rooms
    getAllRooms().then((res) => {
      setRooms(res.data || []);
    });

    // Fetch bookings
    getBookingData().then((res) => {
      let data = res.data || [];
      setBookings(data);

      let totalRooms = rooms.length || 0;
      let occupiedRooms = data.filter((b) => b.status === "confirmed").length;
      let occupancyRate =
        totalRooms > 0 ? Math.round((occupiedRooms / totalRooms) * 100) : 0;

      let today = new Date().toISOString().split("T")[0];
      let revenueToday = data
        .filter((b) => b.date === today && b.status === "confirmed")
        .reduce((sum, b) => sum + (b.amount || 0), 0);

      setStats({
        totalRooms,
        occupiedRooms,
        occupancyRate,
        revenueToday,
      });
    });
  }, [rooms.length]);

  return (
    <div className="dashboard-container">
      <Sidebar />

      {/* Main Content */}
      <main className="main-content">
        <div className="header">
          <h2>Dashboard</h2>
          <p>Overview of your hotel operations</p>
        </div>

        {/* Stat Cards */}
        <div className="stats">
          <div className="stat-card">
            <h3>{stats.totalRooms}</h3>
            <p>Total Rooms</p>
          </div>
          <div className="stat-card">
            <h3>{stats.occupiedRooms}</h3>
            <p>Occupied Rooms</p>
          </div>
          <div className="stat-card">
            <h3>{stats.occupancyRate}%</h3>
            <p>Occupancy Rate</p>
          </div>
          <div className="stat-card">
            <h3>₨ {stats.revenueToday}</h3>
            <p>Revenue Today</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="recent-activity">
          <h4>Recent Activity</h4>
          {bookings.slice(0, 5).map((b, index) => (
            <div key={index} className="activity-item">
              <span>
                {b.status === "cancelled"
                  ? `Cancelled booking: Room ${b.roomId} - ${b.userName}`
                  : `New booking: Room ${b.roomId} - ${b.userName}`}
              </span>
              <span className="time">
                {new Date(b.createdAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
