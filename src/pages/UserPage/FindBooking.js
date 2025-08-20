import React, { useState, useEffect } from "react";
import "../cssUser/findBooking.css";

export default function FindBooking() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Temporary mock data (replace with API call later)
    setBookings([
      {
        id: "BKG-1001",
        hotel: "Star Hotel - Kathmandu",
        room: "Executive Suite",
        checkIn: "2025-08-25",
        checkOut: "2025-08-30",
        status: "Confirmed",
      },
      {
        id: "BKG-1002",
        hotel: "Star Hotel - Pokhara",
        room: "Deluxe Room",
        checkIn: "2025-07-15",
        checkOut: "2025-07-18",
        status: "Completed",
      },
      {
        id: "BKG-1003",
        hotel: "Star Hotel - Chitwan",
        room: "Standard Room",
        checkIn: "2025-09-05",
        checkOut: "2025-09-08",
        status: "Pending",
      },
    ]);
  }, []);

  return (
    <div className="bookinghistory-page">
      {/* Header */}
      <header className="starhotel-header">
        <div className="starhotel-header-container">
          <nav className="starhotel-header-nav-bar">
            <div className="starhotel-header-nav-logo">
              <a href="/">Star Hotels</a>
            </div>
            <ul className="starhotel-header-nav-lists">
              <li><a href="/">Home</a></li>
              <li><a href="/rooms-and-suites">Rooms</a></li>
              <li><a href="/bookingHistory" className="starhotel-header-active">My Bookings</a></li>
              <li><a href="/login">Login</a></li>
              <li><a className="starhotel-header-btn" href="/signup">Register</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Booking History Section */}
      <section className="bookinghistory-container">
        <h2>My Booking History</h2>
        {bookings.length === 0 ? (
          <p className="no-bookings">You have no bookings yet.</p>
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
              {bookings.map((b, index) => (
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
      </section>

      {/* Footer */}
      <footer className="starhotel-footer">
        <div className="starhotel-footer-container">
          <nav className="starhotel-footer-nav">
            <div>
              <h3>Star Hotels</h3>
              <p>Hospitality and Comfort are our watchwords</p>
            </div>
            <div>
              <h3>Contact Us</h3>
              <p>23, Fola Osibo, Lekki Phase 1</p>
              <p>08185956620</p>
              <p>support@starhotels.com</p>
            </div>
            <div>
              <h3>Follow Us</h3>
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
}
