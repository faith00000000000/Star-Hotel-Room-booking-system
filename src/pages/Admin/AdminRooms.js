import React, { useState } from "react";
import Sidebar from "../Admin/Sidebar.js"; // Import Sidebar
import "../css/adminRooms.css";

const AdminRooms = () => {
  const [selectedRoomType, setSelectedRoomType] = useState("All Types");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [selectedFloor, setSelectedFloor] = useState("All Floors");

  const rooms = [
    { id: 101, name: "Room 101", type: "Standard", status: "Available", floor: 1 },
    { id: 102, name: "Room 102", type: "Deluxe", status: "Booked", floor: 2 },
    { id: 201, name: "Room 201", type: "Suite", status: "Available", floor: 2 },
  ];

  const filteredRooms = rooms.filter(
    (room) =>
      (selectedRoomType === "All Types" || room.type === selectedRoomType) &&
      (selectedStatus === "All Status" || room.status === selectedStatus) &&
      (selectedFloor === "All Floors" || room.floor.toString() === selectedFloor)
  );

  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-content">
        <h1>Manage Rooms</h1>
        <div className="filters">
          <select value={selectedRoomType} onChange={(e) => setSelectedRoomType(e.target.value)}>
            <option>All Types</option>
            <option>Standard</option>
            <option>Deluxe</option>
            <option>Suite</option>
          </select>
          <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
            <option>All Status</option>
            <option>Available</option>
            <option>Booked</option>
          </select>
          <select value={selectedFloor} onChange={(e) => setSelectedFloor(e.target.value)}>
            <option>All Floors</option>
            <option value="1">Floor 1</option>
            <option value="2">Floor 2</option>
          </select>
        </div>
        <div className="room-list">
          {filteredRooms.map((room) => (
            <div className="room-card" key={room.id}>
              <h3>{room.name}</h3>
              <p>Type: {room.type}</p>
              <p>Status: {room.status}</p>
              <p>Floor: {room.floor}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminRooms;
