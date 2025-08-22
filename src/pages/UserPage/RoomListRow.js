
import "../cssUser/roomListRow.css";
import { Users, BedDouble } from "lucide-react"; // for icons
import { NavLink } from "react-router";

const RoomListRow = (props) => {

  return props.rooms.map(
    (room,index)=>{
      return (
      <div className="room-grid">
       <div className="room-card" key={index}>
              <img
                src={room.image || "/assets/img/placeholder-room.jpg"}
                alt={room.roomName}
                className="room-img"
                onError={(e) => {
                  e.target.src = "/assets/img/placeholder-room.jpg";
                }}
              />

              <div className="room-content">
                <h3 className="room-title">{room.roomName}</h3>
                <p className="room-desc">{room.description}</p>

                <div className="room-meta">
                  <span>
                    <Users size={16} /> {room.capacity || 2} Persons
                  </span>
                  <span>
                    <BedDouble size={16} /> {room.bedType || "1 Kingsize bed"}
                  </span>
                </div>

                <div className="room-price">
                  Nrs. {room.price || "N/A"} / Night
                </div>

                <div className="room-actions">
                  <button className="btn-outline">View More</button>
                  {/* <button className="btn-primary">Book Now</button> */}
                  <NavLink to={`/roomDescriptionPage/${room.id}`}>BookNow</NavLink>
                </div>
              </div>
            </div>
      </div>
  );
    }
  )
};

export default RoomListRow;
