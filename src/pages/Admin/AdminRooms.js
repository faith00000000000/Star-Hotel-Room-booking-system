import React, { useLayoutEffect, useState } from "react";
import "../css/adminRooms.css";
import { deleteRoom, getAllRooms } from "../../services/room";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router";


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

  const handleDelete = async (id)=>{
    await deleteRoom(id)
    setRooms((prevRooms) => prevRooms.filter((room) => room.id !== id));
  }

  return (
    <div className="adminRoom-container">
        <Sidebar/>

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
            <option>Executive</option>
            <option>Suite</option>
          </select>

          <select defaultValue="All Status">
            <option>All Status</option>
            <option>Available</option>
            <option>Occupied</option>
          </select>
           <NavLink to="/admin/adminRooms/addRoomForm">
            <button className="adminRoom-add-btn">+ Add New Room</button>
          </NavLink>
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
                <p className="adminRoom-price">Rs{room.price}/night</p>
                {/* <span className={`adminRoom-status ${room.status.toLowerCase()}`}>
                  {room.status}
                </span> */}

                {/* <p className="adminRoom-amenities">
                  {room.facilities.join(" • ")}
                </p> */}

                <div className="adminRoom-card-actions">
                  {/* <button className="edit-btn">Edit</button> */}
                  <NavLink to={`/admin/editRoom/${room.id}`}>
                    <button className="edit-btn">Edit Room</button>
                  </NavLink>

                  <button className="delete-btn" onClick={()=>handleDelete(room.id)}>Delete</button>
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
