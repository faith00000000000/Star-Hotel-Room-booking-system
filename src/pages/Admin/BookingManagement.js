import React from "react";
import "../css/bookingManagement.css";
import Sidebar from "../Admin/Sidebar";

const BookingManagement = () => {
  const bookings = [
    { id: "BK001", name: "John Smith", room: "Room 205", checkin: "2025-08-15", checkout: "2025-08-18", status: "Confirmed", total: "$387" },
    { id: "BK002", name: "Sarah Johnson", room: "Room 314", checkin: "2025-08-16", checkout: "2025-08-20", status: "Pending", total: "$796" },
    { id: "BK003", name: "Mike Davis", room: "Room 421", checkin: "2025-08-17", checkout: "2025-08-19", status: "Confirmed", total: "$598" },
  ];

  return (
    <div className="bm-container">
      <Sidebar />

      <main className="bm-main-content">
        {/* Header */}
        <div className="bm-card bm-header">
          <h1>Booking Management</h1>
          <p>View and manage all room bookings</p>
        </div>

        {/* Filters */}
        <div className="bm-card bm-filters">
          <div>
            <label>Status</label>
            <select>
              <option>All Bookings</option>
              <option>Confirmed</option>
              <option>Pending</option>
            </select>
          </div>
          <div>
            <label>Date Range</label>
            <input type="date" />
          </div>
          <div>
            <label>Room Type</label>
            <select>
              <option>All Types</option>
              <option>Single</option>
              <option>Double</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="bm-card bm-table-wrapper">
          <table className="bm-table">
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Guest Name</th>
                <th>Room</th>
                <th>Check-in</th>
                <th>Check-out</th>
                <th>Status</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b, i) => (
                <tr key={i}>
                  <td>{b.id}</td>
                  <td>{b.name}</td>
                  <td>{b.room}</td>
                  <td>{b.checkin}</td>
                  <td>{b.checkout}</td>
                  <td>
                    <span className={`bm-status ${b.status.toLowerCase()}`}>{b.status}</span>
                  </td>
                  <td>{b.total}</td>
                  <td><button className="bm-btn">View</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default BookingManagement;
