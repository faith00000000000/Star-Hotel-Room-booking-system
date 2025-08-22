import React, { useEffect, useState } from "react";
import "../cssUser/checkoutPage.css";
import { useParams } from "react-router";
import { getBookingData, getBookingDataById } from "../../services/booking";

const CheckoutPage = () => {
  // Mock data for demo (later this can come from cart/booking context)
  const [bookedRooms,setBookedRooms] = useState([])
  const [total,setTotal] = useState(0)

  useEffect(()=>{
    let id = localStorage.getItem("authToken")
    getBookingData().then(
      (response)=>{
        if(response.data.length>0){
          response.data.map(
            (item,index)=>{
              if(item.userId.trim() === id.trim()){
                setBookedRooms((prev)=>[...prev,item])
                setTotal((prev)=> prev + ((new Date(item.checkOut) - new Date(item.checkIn))/(1000 * 60 * 60 * 24))*item.price)
              }
            }
          )
        }
      }
    )
  },[])



  return (
    <div className="bill-container">
      <h2 className="bill-title">Booking Bill</h2>

      <div className="bill-table">
        <div className="bill-header">
          <span>Room</span>
          <span>Check-In</span>
          <span>Check-Out</span>
          <span>Price</span>
        </div>

        {bookedRooms.map((room,index) => (
          <div className="bill-row" key={index}>
            <span>{room.roomName}</span>
            <span>{room.checkIn}</span>
            <span>{room.checkOut}</span>
            <span>${ ((new Date(room.checkOut) - new Date(room.checkIn))/(1000 * 60 * 60 * 24))*room.price}</span>
          </div>
        ))}
      </div>

      <div className="bill-summary">
        <p><strong>Total:</strong> Nrs. {total}</p>
      </div>

      <button className="confirm-btn">Confirm Payment</button>
    </div>
  );
};

export default CheckoutPage;
