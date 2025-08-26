import React, { useLayoutEffect, useState } from "react";
import "../cssUser/roomsAndSuites.css";
import RoomListRow from "./RoomListRow";
import { getAllRooms } from "../../services/room";
import Header from "./Header";
import Footer from "./Footer";

export default function RoomsAndSuites() {

  const[room,setRooms] = useState([])
  useLayoutEffect(
    ()=>{

      getAllRooms().then(
        (response)=>{
          if(response.data.length>0){
            setRooms(response.data)
          }
        }
      )

    },[]
  )
  return (
    <>       
      < Header/>
      {/* Main */}
      <main>
        <div className="star-container">
          {/* Top Text */}
          <div className="star-page-header-container">
            <h2 className="star-page-header">Star Hotel Rooms</h2>
            <hr />
            <p className="star-page-sub-header">
              Get the most of our hotel specials. Enjoy the modern <br />
              comfort and panoramic view
            </p>
          </div>

          {/* Rooms */}
          <section className="star-rooms-section">
            {/* <div className="star-row star-room-section-header-container">
              <div className="star-col star-col-3">
                <h4
                  className="star-room-section-header star-active-header"
                  id="standard-room"
                >
                  Standard Rooms
                </h4>
              </div>
              <div className="star-col star-col-3">
                <h4 className="star-room-section-header" id="executive-room">
                  Executive Rooms
                </h4>
              </div>
              <div className="star-col star-col-3">
                <h4 className="star-room-section-header" id="king-room">
                  King Suites
                </h4>
              </div>
            </div> */}

            <div className="star-row star-center-lg">

              <RoomListRow rooms={room}/>
              
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer/>
    </>
  );
}
