const RoomListRow = (props)=>{
    return props.rooms.map((room,index)=>{
        return(
            <div className="star-rooms star-col star-col-2" key={index}> 
                <img
                  src={room.image}
                  alt=""
                  className="star-rooms-img"
                />
                <h3 className="star-room-title">{room.roomName}</h3>
                <p className="star-room-text">
                  {room.description}
                </p>
                <div>
                  <div className="star-details-container">
                    <img
                      src="assets/img/check-square.svg"
                      alt="tick"
                      className="star-list-icon"
                    />
                    <p className="star-list-text">2 Persons</p>
                  </div>
                  <div className="star-details-container">
                    <img
                      src="assets/img/check-square.svg"
                      alt="tick"
                      className="star-list-icon"
                    />
                    <p className="star-list-text">{room.type}</p>
                  </div>
                </div>
                <p className="star-amount-text">Nrs. {room.price} Per Night</p>
                <div className="star-buttons-container">
                  <a href="#" className="star-btn star-btn-ghost">
                    View More
                  </a>
                  <a href="singleRoom.html" className="star-btn star-btn-fill">
                    Book Now
                  </a>
                </div>
            </div>
        )
    })
}

export default RoomListRow