import React, { useEffect, useState } from "react";
import "../css/bookingManagement.css";
import Sidebar from "../Admin/Sidebar";
import { getBookingData, updateBooking, cancelBooking } from "../../services/booking";

const BookingManagement = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookingData().then((response) => {
      if (response.data.length > 0) {
        const paidBookings = response.data.filter((item) => item.paidStatus === "paid");
        setBookings(paidBookings);
      }
    });
  }, []);

  // confirm booking handler
  const handleConfirm = async (id) => {
    try {
      await updateBooking(id, { bookingStatus: "confirmed" });
      setBookings((prev) =>
        prev.map((b) => (b.id === id ? { ...b, bookingStatus: "confirmed" } : b))
      );
    } catch (error) {
      console.error("Error confirming booking:", error);
    }
  };

  // cancel booking handler
  const handleCancel = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to cancel this booking?");
    if (!confirmDelete) return;

    try {
      await cancelBooking(id);
      setBookings((prev) => prev.filter((b) => b.id !== id));
    } catch (error) {
      console.error("Error cancelling booking:", error);
    }
  };

  return (
    <div className="bm-container">
      <Sidebar />

      <main className="bm-main-content">
        {/* Header */}
        <div className="bm-card bm-header">
          <h1>Booking Management</h1>
          <p>View and manage all room bookings</p>
        </div>

        {/* Table */}
        <div className="bm-card bm-table-wrapper">
          <table className="bm-table">
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Guest Name</th>
                <th>Room</th>
                <th>Check-in</th>
                <th>Check-out</th>
                <th>Status</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b, i) => {
                const nights =
                  (new Date(b.checkOut) - new Date(b.checkIn)) / (1000 * 60 * 60 * 24);
                const total = nights * b.price;

                return (
                  <tr key={i}>
                    <td>{b.id}</td>
                    <td>{b.name}</td>
                    <td>{b.roomName}</td>
                    <td>{b.checkIn}</td>
                    <td>{b.checkOut}</td>
                    <td>
                      <span className={`bm-status ${b.bookingStatus}`}>
                        {b.bookingStatus}
                      </span>
                    </td>
                    <td>₨ {total.toLocaleString()}</td>
                    <td>
                      {/* Cancel */}
                      <button className="bm-btn bm-cancel" onClick={() => handleCancel(b.id)}>
                        Cancel
                      </button>

                      {/* Confirm */}
                      <button
                        className={`bm-btn ${
                          b.bookingStatus === "confirmed"
                            ? "bm-confirm-active"
                            : "bm-confirm"
                        }`}
                        onClick={() => handleConfirm(b.id)}
                      >
                        {b.bookingStatus === "confirmed" ? "Confirmed" : "Confirm"}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default BookingManagement;
