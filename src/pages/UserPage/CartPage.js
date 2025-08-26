// import React from "react";
// import { useLocation, useNavigate } from "react-router";
// import Header from "./Header";
// import "../cssUser/cartPage.css";

// const CartPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { room, formData } = location.state || {};

//   // Temporary dummy data so UI always renders
//   const safeRoom = room || {
//     image: "https://via.placeholder.com/150",
//     name: "Deluxe Room",
//     price: 120,
//   };

//   const safeFormData = formData || {
//     name: "John Doe",
//     checkIn: "2025-08-25",
//     checkOut: "2025-08-28",
//   };

//   return (
//     <div>
//       <Header />
//       <div className="cart-container">
//         <h1>Your Booking Cart</h1>
//         <div className="cart-item">
//           <img src={safeRoom.image} alt={safeRoom.name} className="cart-image" />
//           <div className="cart-details">
//             <h2>{safeRoom.name}</h2>
//             <p><b>Guest:</b> {safeFormData.name}</p>
//             <p><b>Check-In:</b> {safeFormData.checkIn}</p>
//             <p><b>Check-Out:</b> {safeFormData.checkOut}</p>
//             <p><b>Price per Night:</b> ${safeRoom.price}</p>
//           </div>
//         </div>
//         <button
//           className="confirm-btn"
//           onClick={() => navigate("/checkout", { state: { room: safeRoom, formData: safeFormData } })}
//         >
//           Confirm Booking
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartPage;
