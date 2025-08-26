import React, { useEffect, useState } from "react";
import "../cssUser/checkoutPage.css";
import { getBookingData, updateBookingData } from "../../services/booking";
import Header from "./Header";
import { toast } from "react-toastify";

const CheckoutPage = () => {
  const [bookedRooms, setBookedRooms] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let id = localStorage.getItem("authToken");
    getBookingData().then((response) => {
      if (response.data.length > 0) {
        let bookingInfo = [];
        let totalAmount = 0;

        response.data.forEach((item) => {
          if (item.userId === id && item.paidStatus !== "paid") {
            bookingInfo.push(item);
            const nights =
              (new Date(item.checkOut) - new Date(item.checkIn)) /
              (1000 * 60 * 60 * 24);
            totalAmount += nights * item.price;
          }
        });
        setBookedRooms(bookingInfo);
        setTotal(totalAmount);
      }
    });
  }, []);

  const hadleCheckout= ()=>{
    console.log(bookedRooms)
    bookedRooms.forEach(
      (rooms)=>{
        rooms.paidStatus = "paid"
        updateBookingData(rooms.id,rooms)
      }
    )
    setBookedRooms(bookedRooms)
    toast.success("Payment Successful")
    
  }

  return (
    <div>
      <Header />
      <div className="checkout-container">
  {/* Bill + Invoice section */}
  <div className="checkout-top">
    <div className="bill-to">
      <h4>Bill To</h4>
      {bookedRooms.length > 0 ? (
        <>
          <p><strong>Guest Name:</strong> {bookedRooms[0].name}</p>
          <p><strong>Email:</strong> {bookedRooms[0].email}</p>
          <p><strong>Phone:</strong> {bookedRooms[0].phone}</p>
        </>
      ) : (
        <>
          <p><strong>Guest Name:</strong> Not Available</p>
          <p><strong>Email:</strong> Not Available</p>
          <p><strong>Phone:</strong> Not Available</p>
        </>
      )}
    </div>

    <div className="invoice-details">
      <h4>Invoice Details</h4>
      <p><strong>Invoice Date:</strong> {new Date().toDateString()}</p>
      <p><strong>Due Date:</strong> {new Date().toDateString()}</p>
      <p><strong>Total Bookings:</strong> {bookedRooms.length} Reservations</p>
      <p>
        <strong>Payment Status:</strong>{" "}
        <span className="pending">Pending</span>
      </p>
    </div>
  </div>



        {/* Table */}
        <div className="checkout-table">
          <div className="checkout-header">
            <span>Room Description</span>
            <span>Check-In</span>
            <span>Check-Out</span>
            <span>Nights</span>
            <span>Amount (₨)</span>
          </div>

          {bookedRooms.map((room, index) => {
            const nights =
              (new Date(room.checkOut) - new Date(room.checkIn)) /
              (1000 * 60 * 60 * 24);
            const amount = nights * room.price;

            return (
              <div className="checkout-row" key={index}>
                <span>{room.roomName}</span>
                <span>{room.checkIn}</span>
                <span>{room.checkOut}</span>
                <span>{nights}</span>
                <span>₨ {amount.toLocaleString()}</span>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div className="checkout-summary">
          <p><strong>Subtotal:</strong> ₨ {total.toLocaleString()}</p>
          <p><strong>Service Charge (0%):</strong> ₨ 0</p>
          <p><strong>Tax (0%):</strong> ₨ 0</p>
          <h3>Total Amount: ₨ {total.toLocaleString()}</h3>
        </div>

        {/* Payment Button */}
        <div className="payment-section">
          <p className="payment-text">Ready to Complete Your Payment?</p>
          <button className="confirm-btn" onClick={hadleCheckout}>Confirm Payment</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
