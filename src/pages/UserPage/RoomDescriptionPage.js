import React, { useEffect, useState } from "react";
import "../cssUser/roomDescriptionPage.css";
import { getRoomById } from "../../services/room";
import Header from "./Header";
import { useParams } from "react-router";
import { addBooking, getBookedDates } from "../../services/booking";
import { getUserById, updateUserBooking } from "../../services/user";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RoomDescriptionPage = () => {
  const { id } = useParams();
  const [userId, setUserId] = useState();
  const [bookings, setBookings] = useState([]);
  const [room, setRoom] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [bookedDates, setBookedDates] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    checkIn: null,
    checkOut: null,
    phone: "",
    email: "",
  });

  // Fetch user, room, and booked dates
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

    // Fetch booked dates for this room
    getBookedDates(id).then((bookings) => {
      if (bookings && bookings.length > 0) {
        let allDates = [];
        bookings.forEach((booking) => {
          const checkIn = new Date(booking.checkIn);
          const checkOut = new Date(booking.checkOut);
          for (
            let d = new Date(checkIn);
            d <= checkOut;
            d.setDate(d.getDate() + 1)
          ) {
            allDates.push(new Date(d));
          }
        });
        setBookedDates(allDates);
      }
    });
  }, [id]);

  if (!room) {
    return <p>Loading room details...</p>;
  }

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (localStorage.getItem("role") !== "user") {
      alert("Only registered users can make bookings.");
      return;
    }

    addBooking({
      ...formData,
      checkIn: formData.checkIn.toISOString().split("T")[0],
      checkOut: formData.checkOut.toISOString().split("T")[0],
      roomId: id,
      bookingStatus: "pending",
      roomName: room.roomName,
      roomType: room.type,
      price: room.price,
      userId: userId,
    });

    updateUserBooking(userId, {
      ...formData,
      checkIn: formData.checkIn.toISOString().split("T")[0],
      checkOut: formData.checkOut.toISOString().split("T")[0],
      roomId: id,
    });

    alert("Booking submitted!");
    setShowForm(false);
  };

  return (
    <div>
      <Header />
      <div className="room-description">
        {/* Hero Image */}
        <img src={room.image} alt={room.roomName} className="room-hero" />

        {/* Title */}
        <h1>{room.roomName}</h1>

        {/* Basic Info */}
        <div className="room-info">
          <p>
            <strong>Room No:</strong> {room.roomNo}
          </p>
          <p>
            <strong>Type:</strong> {room.type}
          </p>
          <p>
            <strong>Price:</strong> ${room.price}
          </p>
        </div>

        {/* Description */}
        <h2>Description</h2>
        <p className="room-text">{room.description}</p>

        {/* Facilities */}
        <h2>Facilities</h2>
        <ul className="facilities-list">
          {room.facilities && room.facilities.length > 0 ? (
            room.facilities.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <li>No facilities listed</li>
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
                onChange={(e) => handleChange("name", e.target.value)}
                required
              />
            </label>
            <label>
              Check-In Date:
              <DatePicker
                selected={formData.checkIn}
                onChange={(date) => handleChange("checkIn", date)}
                excludeDates={bookedDates}
                minDate={new Date()}
                placeholderText="Select check-in date"
                required
              />
            </label>
            <label>
              Check-Out Date:
              <DatePicker
                selected={formData.checkOut}
                onChange={(date) => handleChange("checkOut", date)}
                excludeDates={bookedDates}
                minDate={formData.checkIn || new Date()}
                placeholderText="Select check-out date"
                required
              />
            </label>
            <label>
              Phone Number:
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
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
