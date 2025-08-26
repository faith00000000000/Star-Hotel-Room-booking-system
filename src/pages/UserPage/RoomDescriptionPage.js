import React, { useEffect, useState } from "react";
import "../cssUser/roomDescriptionPage.css";
import { getRoomById } from "../../services/room";
import Header from "./Header";
import { useParams } from "react-router";
import { addBooking } from "../../services/booking";
import { getUserById, updateUserBooking } from "../../services/user";

const RoomDescriptionPage = () => {
  const { id } = useParams();
  const [userId, setUserId] = useState();
  const [bookings, setBookings] = useState([]);
  const [room, setRoom] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    checkIn: "",
    checkOut: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    const userId = localStorage.getItem("authToken");
    const role = localStorage.getItem("role");

    if (role === "user" && userId) {
      setUserId(userId);
      getUserById(userId)
        .then((response) => {
          if (response) {
            setBookings(response.data.bookings || []);
          }
        })
        .catch(() => console.log("No user found"));
    }

    getRoomById(id).then((response) => {
      if (response) {
        setRoom(response.data);
      }
    });
  }, [id]);

  if (!room) {
    return <p>Loading room details...</p>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Only users can book
    if (localStorage.getItem("role") !== "user") {
      alert("Only registered users can make bookings.");
      return;
    }

    addBooking({
      ...formData,
      roomId: id,
      bookingStatus: "pending",
      roomName: room.roomName,
      roomType: room.type,
      price: room.price,
      userId: userId,
    });

    updateUserBooking(userId, {
      ...formData,
      roomId: id,
    });

    alert("Booking submitted!");
    setShowForm(false);
  };

  return (
    <div>
      <Header />
      <div className="room-description">
        {/* Breadcrumb */}
        <p className="breadcrumb">
          <span>{room.name}</span>
        </p>

        {/* Hero Image */}
        <img src={room.image} alt={room.name} className="room-hero" />

        {/* Title & Description */}
        <h1>{room.name}</h1>
        <p className="room-text">{room.description}</p>

        {/* Room Details */}
        <h2>Room Type</h2>
        <div className="room-type">
          <div>
            <span>Room Size</span>
            <p>{room.details?.size || "N/A"}</p>
          </div>
          <div>
            <span>Special Facilities</span>
            <p>{room.facilities || "N/A"}</p>
          </div>
        </div>

        {/* Amenities */}
        <h2>Amenities</h2>
        <ul className="amenities">
          {room.amenities?.length > 0 ? (
            room.amenities.map((item, index) => <li key={index}>✅ {item}</li>)
          ) : (
            <li>No amenities listed</li>
          )}
        </ul>

        {/* Book Now */}
        {!showForm ? (
          <button className="book-btn" onClick={() => setShowForm(true)}>
            Book Now
          </button>
        ) : (
          <form className="booking-form" onSubmit={handleSubmit}>
            <h2>Book This Room</h2>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Check-In Date:
              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Check-Out Date:
              <input
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Phone Number:
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit" className="submit-btn">
              Confirm Booking
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RoomDescriptionPage;
