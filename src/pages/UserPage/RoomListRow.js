
// import React, { useState } from "react";
// import "../cssUser/roomListRow.css";
// import { Users, BedDouble } from "lucide-react";
// import { NavLink } from "react-router";

// const RoomListRow = ({ rooms = [] }) => {
//   const [activeTab, setActiveTab] = useState("standard");

//   const categories = [
//     { key: "standard", label: "Standard Rooms" },
//     { key: "executive", label: "Executive Rooms" },
//     { key: "suite", label: "King Suites" },
//   ];

//   // Group rooms by type
//   const filteredRooms = rooms.filter(
//     (room) => room.type?.toLowerCase() === activeTab
//   );

//   return (
//     <div className="room-list-container">
//       {/* Tabs */}
//       <div className="room-tabs">
//         {categories.map((cat) => (
//           <button
//             key={cat.key}
//             className={`tab-btn ${activeTab === cat.key ? "active" : ""}`}
//             onClick={() => setActiveTab(cat.key)}
//           >
//             {cat.label}
//           </button>
//         ))}
//       </div>

//       {/* Room Grid */}
//       <div className="room-grid">
//         {filteredRooms.length > 0 ? (
//           filteredRooms.map((room, index) => (
//             <div className="room-card" key={index}>
//               <img
//                 src={room.image || "/assets/img/placeholder-room.jpg"}
//                 alt={room.roomName}
//                 className="room-img"
//                 onError={(e) => {
//                   e.target.src = "/assets/img/placeholder-room.jpg";
//                 }}
//               />

//               <div className="room-content">
//                 <h3 className="room-title">{room.roomName}</h3>
//                 <p className="room-desc">{room.description}</p>

//                 <div className="room-meta">
//                   <span>
//                     <Users size={16} /> {room.capacity || 2} Persons
//                   </span>
//                   <span>
//                     <BedDouble size={16} /> {room.bedType || "1 Kingsize bed"}
//                   </span>
//                 </div>

//                 <div className="room-price">
//                   Nrs. {room.price || "N/A"} / Night
//                 </div>

//                 <div className="room-actions">
//                   <NavLink to={`/roomDescriptionPage/${room.id}`} className="btn-outline" >                  
//                     View More
//                   </NavLink>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="no-rooms">No rooms available in this category.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RoomListRow;
import React, { useState } from "react";
import "../cssUser/roomListRow.css";
import { NavLink } from "react-router";

const RoomListRow = ({ rooms = [] }) => {
  const [activeTab, setActiveTab] = useState("standard");

  const categories = [
    { key: "standard", label: "Standard Rooms" },
    { key: "executive", label: "Executive Rooms" },
    { key: "suite", label: "King Suites" },
  ];

  // Filter rooms by type
  const filteredRooms = rooms.filter(
    (room) => room.type?.toLowerCase() === activeTab
  );

  return (
    <div className="room-list-container">
      {/* Tabs */}
      <div className="room-tabs">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`tab-btn ${activeTab === cat.key ? "active" : ""}`}
            onClick={() => setActiveTab(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Room Grid */}
      <div className="room-grid">
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room, index) => (
            <div className="room-card" key={index}>
              {room.image && (
                <img
                  src={room.image}
                  alt={room.type || "Room"}
                  className="room-img"
                  onError={(e) => {
                    e.target.style.display = "none"; // hide broken image
                  }}
                />
              )}

              <div className="room-content">
                {room.type && <h3 className="room-title">{room.type}</h3>}
                {room.description && (
                  <p className="room-desc">{room.description}</p>
                )}
                {room.price && (
                  <div className="room-price">Nrs. {room.price} / Night</div>
                )}

                {room.id && (
                  <div className="room-actions">
                    <NavLink
                      to={`/roomDescriptionPage/${room.id}`}
                      className="btn-outline"
                    >
                      View More
                    </NavLink>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="no-rooms">No rooms available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default RoomListRow;
