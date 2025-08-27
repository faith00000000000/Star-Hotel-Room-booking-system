import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "../cssUser/findBooking.css";
import Header from "./Header";
import { cancelBooking, getBookingData, updateBooking } from "../../services/booking"; // ✅ use updateBooking
import FindBookingRow from "./FindBookingRow";
import Footer from "./Footer";

export default function FindBooking() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("authToken");
    getBookingData().then((response) => {
      let bookingData = [];
      if (response.data.length > 0) {
        response.data.forEach((item) => {
          if (item.userId && item.userId === userId) {
            bookingData.push(item);
          }
        });
        setBookings(bookingData);
      }
    });
  }, [navigate]);

  // ✅ Cancel booking => update status to cancelled
  const handleCancel = async (id) => {
    const confirmCancel = window.confirm("Are you sure you want to cancel this booking?");
    if (confirmCancel) {
      try {
        await cancelBooking(id)

        setBookings((prev) =>
          prev.map((b) =>
            b.id === id ? { ...b, bookingStatus: "cancelled" } : b
          )
        );
      } catch (err) {
        console.error("Error cancelling booking:", err);
      }
    }
  };

  // ✅ Pending = not confirmed & not cancelled
  const pendingBookings = bookings.filter(
    (b) => b.bookingStatus !== "confirmed" && b.bookingStatus !== "cancelled"
  );

  // ✅ History = confirmed or cancelled
  const historyBookings = bookings.filter(
    (b) => b.bookingStatus === "confirmed" || b.bookingStatus === "cancelled"
  );

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
        {historyBookings.length === 0 ? (
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
              <FindBookingRow bookings={historyBookings} showCancel={false} showExtra={true} />
            </tbody>
          </table>
        )}
      </section>
      {/* <Footer/> */}
    </div>
  );
}
