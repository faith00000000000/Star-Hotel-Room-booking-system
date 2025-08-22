import React, { useLayoutEffect, useState } from "react";
import "../css/adminRooms.css";
import { getAllRooms } from "../../services/room";

const AdminRoom = () => {
  const [rooms,setRooms] = useState([]);

  useLayoutEffect(()=>{
    getAllRooms().then(
      (response)=>{
        if(response.data.length>0){
          setRooms(response.data)
        }
      }
    )
  },[])

  return (
    <div className="adminRoom-container">
      {/* Sidebar */}
      <aside className="adminRoom-sidebar">
        <h2>Hotel Admin</h2>
        <nav>
          <a href="#">Dashboard</a>
          <a href="#" className="active">Rooms</a>
          <a href="#">Bookings</a>
          <a href="#">Customers</a>
          <a href="#">Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="adminRoom-main">
        <header>
          <h1>Room Management</h1>
          <p>Manage your hotel rooms and availability</p>
        </header>

        {/* Filters */}
        <div className="adminRoom-filters">
          <select defaultValue="All Types">
            <option>All Types</option>
            <option>Standard Single</option>
            <option>Deluxe Double</option>
            <option>Suite</option>
          </select>

          <select defaultValue="All Status">
            <option>All Status</option>
            <option>Available</option>
            <option>Occupied</option>
          </select>

          

          <button className="adminRoom-add-btn">+ Add New Room</button>
        </div>

        {/* Room Cards */}
        <div className="adminRoom-cards">
          {rooms.map((room,index) => (
            <div key={index} className="adminRoom-card">
              <div className="adminRoom-card-image">
                <img src={room.image} alt="picture"></img>
              </div>
              <div className="adminRoom-card-body">
                <h3>{room.roomNo}</h3>
                <p className="adminRoom-type">{room.type}</p>
                <p className="adminRoom-price">${room.price}/night</p>
                {/* <span className={`adminRoom-status ${room.status.toLowerCase()}`}>
                  {room.status}
                </span> */}

                {/* <p className="adminRoom-amenities">
                  {room.facilities.join(" • ")}
                </p> */}

                <div className="adminRoom-card-actions">
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdminRoom;
