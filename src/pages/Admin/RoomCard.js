// import React, { useEffect, useState } from "react";
// import "../styles/AdminRooms.css";
// import { getAllRooms } from "../../services/room";
// import { data } from "react-router";

// const RoomCard = ({ icon, name, type, price, status, features }) => {
//     const [roomData,setRoomData]=useState([])
//      useEffect(
//         ()=>{
//             getAllRooms().then((response)=>{
//                 if(response.data.length>0){
//                     setRoomData(response.data)
//                 }
//             })
//         },[]
//      )
//   return (
   
//     <div className="room-card">
//       <div className="room-image">{icon}</div>
//       <div className="room-content">
//         {/* <h3>{name}</h3>
//         <p>{type}</p>
//         <p>{price}</p> */}
       
//         <span className={`status ${status.toLowerCase()}`}>{status}</span>
//         <div className="features">{features}</div>
//         <div className="btn-group">
//           <button className="btn btn-edit">Edit</button>
//           <button className="btn btn-delete">Delete</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RoomCard;
