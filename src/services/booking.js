import axios from "axios";

export const addBooking = async (bookingInfo) => {
  let data = await axios.post("http://localhost:4000/booking", bookingInfo);
  return data;
};

export const getBookingData = async () => {
  let data = await axios.get("http://localhost:4000/booking");
  return data;
};

export const getBookingDataById = async (id) => {
  let data = await axios.get(`http://localhost:4000/booking/${id}`);
  return data;
};

// ✅ PATCH (only update the fields you send, keep rest intact)
export const updateBookingData = async (id, bookingData) => {
  let data = await axios.patch(`http://localhost:4000/booking/${id}`, bookingData);
  return data.data;
};

export const updateBooking = async (id, updateData) => {
  let data = await axios.patch(`http://localhost:4000/booking/${id}`, updateData);
  return data.data;
};

// Optional cancel
// export const cancelBooking = async (id) => {
//   let data = await axios.delete(`http://localhost:4000/booking/${id}`);
//   return data;
// };
// 🆕 Cancel booking (DELETE)
export const cancelBooking = async (id) => {
  return await axios.delete(`http://localhost:4000/booking/${id}`);
};

export const getBookedDates = async (roomId) => {
  let data = (await getBookingData()).data;
  if (data && data.length > 0) {
    // Only return bookings of this room
    return data.filter((element) => element.roomId === roomId);
  }
  return [];
};
