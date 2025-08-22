import React, { useLayoutEffect, useState } from "react";
import "../cssUser/roomsAndSuites.css";
import RoomListRow from "./RoomListRow";
import { getAllRooms } from "../../services/room";
import Header from "./Header";

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
      <div>
            < Header/>

    </div>

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
              {/* Room Card */}
              
              {/* Repeat other room cards like above */}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="star-footer">
        <div className="star-footer-container">
          <nav className="star-footer-nav">
            <div className="star-footer-description">
              <h3 className="star-footer-description-title">Star Hotels</h3>
              <p>Hospitality and Comfort are our watchwords</p>
            </div>
            <div className="star-footer-contact-us">
              <h3 className="star-footer-description-title">Contact Us</h3>
              <p className="star-footer-description-detail">
                <img
                  src="./assets/img/map-pin.svg"
                  className="star-footer-description-icon"
                  alt="star hotel location"
                />
                <span>23, Fola Osibo, Lekki Phase 1</span>
              </p>
              <p className="star-footer-description-detail">
                <img
                  src="./assets/img/phone.svg"
                  className="star-footer-description-icon"
                  alt="star hotels phone number"
                />
                <span>08185956620</span>
              </p>
              <p className="star-footer-description-detail">
                <img
                  src="./assets/img/mail.svg"
                  className="star-footer-description-icon"
                  alt="star hotels email"
                />
                <span>support@starhotels.com</span>
              </p>
            </div>
            <div className="star-footer-follow-us">
              <h3 className="star-footer-description-title">Follow Us</h3>
              <ul className="star-footer-follow-us-lists">
                <li className="star-follow-us-list">
                  <a href="">
                    <img
                      src="./assets/img/facebook.svg"
                      alt="star hotels facebook page"
                    />
                  </a>
                </li>
                <li className="star-follow-us-list">
                  <a href="">
                    <img
                      src="./assets/img/twitter.svg"
                      alt="star hotels twitter page"
                    />
                  </a>
                </li>
                <li className="star-follow-us-list">
                  <a href="">
                    <img
                      src="./assets/img/instagram.svg"
                      alt="star hotels instagram page"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </footer>
    </>
  );
}
