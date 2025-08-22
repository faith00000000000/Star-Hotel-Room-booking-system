import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "../cssUser/findBooking.css";
import Header from "./Header";
import { getBookingData } from "../../services/booking";
import FindBookingRow from "./FindBookingRow";

export default function FindBooking() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getBookingData().then(
      (response)=>{
        if(response.data.length>0){
          setBookings(response.data)
        }
      }
    )
  }, [navigate]);


  return (
    <div className="bookinghistory-page">
      {/* Header */}
      {/* <header className="starhotel-header">
        <div className="starhotel-header-container">
          <nav className="starhotel-header-nav-bar">
            <div className="starhotel-header-nav-logo">
              <a href="/">Star Hotels</a>
            </div>
            <ul className="starhotel-header-nav-lists">
              <li><a href="/">Home</a></li>
              <li><a href="/rooms-and-suites">Rooms</a></li>
              <li>
                <a href="/bookingHistory" className="starhotel-header-active">
                  My Bookings
                </a>
              </li>
              <li><a href="/login">Login</a></li>
              <li>
                <a className="starhotel-header-btn" href="/signup">Register</a>
              </li>
            </ul>
          </nav>
        </div>
      </header> */}
      <Header/>

      {/* Pending Section */}
      <section className="bookinghistory-container">
        <h2>Pending Bookings</h2>
        {bookings.length === 0 ? (
          <p className="no-bookings">No pending bookings.</p>
        ) : (
          <>
            <table className="bookinghistory-table">
              <thead>
                <tr>
                  <th>Booking ID</th>
                  <th>Room</th>
                  <th>Room Type</th>
                  <th>Check-in</th>
                  <th>Check-out</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <FindBookingRow bookings={bookings}/>
              </tbody>
            </table>

            <button className="checkout-btn" onClick={navigate("/checkoutPage")}>
              Checkout
            </button>
          </>
        )}
      </section>

      {/* Booking History Section */}
      {/* <section className="bookinghistory-container">
        <h2>Booking History</h2>
        {historyBookings.length === 0 ? (
          <p className="no-bookings">You have no booking history yet.</p>
        ) : (
          <table className="bookinghistory-table">
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Hotel</th>
                <th>Room</th>
                <th>Check-in</th>
                <th>Check-out</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {historyBookings.map((b, index) => (
                <tr key={index}>
                  <td>{b.id}</td>
                  <td>{b.hotel}</td>
                  <td>{b.room}</td>
                  <td>{b.checkIn}</td>
                  <td>{b.checkOut}</td>
                  <td>
                    <span className={`status ${b.status.toLowerCase()}`}>
                      {b.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section> */}
    </div>
  );
}
