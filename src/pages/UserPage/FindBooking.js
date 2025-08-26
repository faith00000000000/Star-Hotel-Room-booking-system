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
    const userId = localStorage.getItem("authToken")
    getBookingData().then((response) => {
      let bookingData = []
      if (response.data.length > 0) {
        response.data.map(
          (item,index)=>{
            if(item.userId && item.userId === userId){
              bookingData.push(item)
            }
          }
        )
        setBookings(bookingData)
      }
    });
  }, [navigate]);

  // Cancel booking handler (only pending)
  const handleCancel = (id) => {
    const confirmCancel = window.confirm("Are you sure you want to cancel this booking?");
    if (confirmCancel) {
      setBookings((prev) => prev.filter((b) => b.id !== id));
    }
  };

  const pendingBookings = bookings.filter((b) => b.bookingStatus !== "confirmed");
  const confirmedBookings = bookings.filter((b) => b.bookingStatus === "confirmed");

  return (
    <div className="bookinghistory-page">
      <Header />

      {/* Pending Section */}
      <section className="bookinghistory-container">
        <h2>Pending Bookings</h2>
        {pendingBookings.length === 0 ? (
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
                <FindBookingRow bookings={pendingBookings} onCancel={handleCancel} />
              </tbody>
            </table>

            <button
              className="checkout-btn"
              onClick={() => navigate("/checkoutPage")}
            >
              Checkout
            </button>
          </>
        )}
      </section>

      {/* History Section */}
      <section className="bookinghistory-container history-section">
        <h2>Booking History</h2>
        {confirmedBookings.length === 0 ? (
          <p className="no-bookings">No booking history yet.</p>
        ) : (
          <table className="bookinghistory-table">
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Guest Name</th>
                <th>Room</th>
                <th>Room Type</th>
                <th>Check-in</th>
                <th>Check-out</th>
                <th>Nights</th>
                <th>Price</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <FindBookingRow bookings={confirmedBookings} showCancel={false} showExtra={true} />
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
}
