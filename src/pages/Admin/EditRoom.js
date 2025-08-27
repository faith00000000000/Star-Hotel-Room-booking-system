// import React, { useState } from "react";
// import "../css/editRoom.css";

// const EditRoom = () => {
//   const [roomImage, setRoomImage] = useState(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setRoomImage(URL.createObjectURL(file));
//     }
//   };

//   return (
//     <div className="editRoom-modal">
//       <div className="editRoom-content">
//         <h2>Edit Room 101</h2>

//         <div className="editRoom-form-group">
//           <label>Room Number</label>
//           <input type="text" defaultValue="101" />
//         </div>

//         <div className="editRoom-form-group">
//           <label>Floor</label>
//           <select defaultValue="Floor 1">
//             <option>Floor 1</option>
//             <option>Floor 2</option>
//             <option>Floor 3</option>
//           </select>
//         </div>

//         <div className="editRoom-form-group">
//           <label>Room Type</label>
//           <select defaultValue="Standard Single">
//             <option>Standard Single</option>
//             <option>Deluxe</option>
//             <option>Suite</option>
//           </select>
//         </div>

//         <div className="editRoom-form-group">
//           <label>Status</label>
//           <select defaultValue="Available">
//             <option>Available</option>
//             <option>Occupied</option>
//             <option>Maintenance</option>
//           </select>
//         </div>

//         <div className="editRoom-form-group">
//           <label>Price per Night ($)</label>
//           <input type="number" defaultValue="89" />
//         </div>

//         <div className="editRoom-form-group">
//           <label>Max Occupancy</label>
//           <input type="number" defaultValue="1" />
//         </div>

//         <div className="editRoom-form-group">
//           <label>Room Description</label>
//           <textarea defaultValue="Comfortable single room with modern amenities"></textarea>
//         </div>

//         <div className="editRoom-form-group">
//           <label>Room Image</label>
//           <input type="file" accept="image/*" onChange={handleImageChange} />
//           {roomImage && (
//             <div className="editRoom-image-preview">
//               <img src={roomImage} alt="Room Preview" />
//             </div>
//           )}
//         </div>

//         <div className="editRoom-form-group">
//           <label>Amenities (separated by commas)</label>
//           <input
//             type="text"
//             defaultValue="WiFi, TV, AC"
//             placeholder="Enter amenities, e.g. WiFi, TV, AC"
//           />
//         </div>

//         <div className="editRoom-form-actions">
//           <button className="editRoom-cancel-btn">Cancel</button>
//           <button className="editRoom-save-btn">Save Room</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditRoom;
