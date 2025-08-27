// import React, { useState } from "react";
// import "../css/addRoomForm.css";
// import { addRooms, fileToBase64 } from "../../services/room";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router";

// const AddRoomForm = () => {
//   const navigate = useNavigate();

//   const [roomData, setRoomData] = useState({
//     roomNo: "",
//     roomName: "",
//     type: "Standard",
//     price: "",
//     description: "",
//     facilities: [],
//     status: "unbooked",
//     image: "",
//   });

//   const [errors, setErrors] = useState({});

//   const facilitiesOptions = [
//     "Wi-Fi",
//     "TV",
//     "AC",
//     "Mini Bar",
//     "Balcony",
//     "Room Service",
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setRoomData({ ...roomData, [name]: value });
//   };

//   const handleFacilitiesChange = (e) => {
//     const options = Array.from(e.target.selectedOptions, (option) => option.value);
//     setRoomData({ ...roomData, facilities: options });
//   };

//   const handleFileChange = async (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const base64Image = await fileToBase64(file);
//       setRoomData({ ...roomData, image: base64Image });
//     }
//   };

//   const validateForm = () => {
//     let formErrors = {};

//     if (roomData.roomNo.trim() === "") formErrors.roomNo = "Room number is required.";
//     if (roomData.roomName.trim() === "") formErrors.roomName = "Room name is required.";
//     if (roomData.description.trim() === "") formErrors.description = "Description is required.";
//     if (roomData.type.trim() === "") formErrors.type = "Room type is required.";
//     if (roomData.price.trim() === "") formErrors.price = "Price is required.";
//     if (roomData.facilities.length === 0) formErrors.facilities = "Select at least one facility.";
//     if (!roomData.image || roomData.image.trim() === "") formErrors.image = "Room image is required.";

//     setErrors(formErrors);
//     return Object.keys(formErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       addRooms({ ...roomData, price: Number(roomData.price) })
//         .then((res) => {
//           if (res.data) {
//             toast.success("Room added successfully!");
//             setRoomData({
//               roomNo: "",
//               roomName: "",
//               type: "Standard",
//               price: "",
//               description: "",
//               facilities: [],
//               status: "unbooked",
//               image: "",
//             });
//             setErrors({});
//             navigate("/admin/adminRooms");
//           }
//         })
//         .catch((e) => {
//           toast.error(e.message || "Error adding room");
//         });
//     } else {
//       toast.error("Please fix the errors before submitting.");
//     }
//   };

//   return (
//     <div className="add-room-container">
//       {/* X Button */}
//       <button
//         className="close-btn"
//         onClick={() => navigate("/admin/adminRooms")}
//       >
//         ×
//       </button>

//       <h2>Add New Room</h2>
//       <form className="add-room-form" onSubmit={handleSubmit}>
//         {/* Room Number */}
//         <label>
//           Room Number:
//           <input
//             type="text"
//             name="roomNo"
//             value={roomData.roomNo}
//             onChange={handleChange}
//           />
//         </label>
//         {errors.roomNo && <span className="error">{errors.roomNo}</span>}

//         {/* Room Name */}
//         <label>
//           Room Name:
//           <input
//             type="text"
//             name="roomName"
//             value={roomData.roomName}
//             onChange={handleChange}
//           />
//         </label>
//         {errors.roomName && <span className="error">{errors.roomName}</span>}

//         {/* Room Type */}
//         <label>
//           Room Type:
//           <select name="type" value={roomData.type} onChange={handleChange}>
//             <option value="Standard">Standard</option>
//             <option value="Executive">Executive</option>
//             <option value="Suite">Suite</option>
//           </select>
//         </label>
//         {errors.type && <span className="error">{errors.type}</span>}

//         {/* Price */}
//         <label>
//           Price per Night:
//           <input
//             type="number"
//             name="price"
//             value={roomData.price}
//             onChange={handleChange}
//           />
//         </label>
//         {errors.price && <span className="error">{errors.price}</span>}

//         {/* Description */}
//         <label>
//           Description:
//           <textarea
//             name="description"
//             value={roomData.description}
//             onChange={handleChange}
//             rows="4"
//           />
//         </label>
//         {errors.description && <span className="error">{errors.description}</span>}

//         {/* Facilities */}
//         <label>
//           Facilities:
//           <select
//             name="facilities"
//             multiple
//             value={roomData.facilities}
//             onChange={handleFacilitiesChange}
//           >
//             {facilitiesOptions.map((facility, index) => (
//               <option key={index} value={facility}>
//                 {facility}
//               </option>
//             ))}
//           </select>
//         </label>
//         {errors.facilities && <span className="error">{errors.facilities}</span>}

//         {/* Image */}
//         <label>
//           Room Image:
//           <input
//             type="file"
//             name="image"
//             accept="image/*"
//             onChange={handleFileChange}
//           />
//         </label>
//         {errors.image && <span className="error">{errors.image}</span>}

//         {/* Preview */}
//         {roomData.image && (
//           <img
//             src={roomData.image}
//             alt="Room Preview"
//             style={{ width: "100%", marginTop: "10px", borderRadius: "5px" }}
//           />
//         )}

//         <button type="submit">Add Room</button>
//       </form>
//     </div>
//   );
// };

// export default AddRoomForm;
import React, { useEffect, useState } from "react";
import "../css/addRoomForm.css";
import { addRooms, fileToBase64, getRoomById, updateRoom } from "../../services/room";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router";

const AddRoomForm = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // check if we're editing

  const [roomData, setRoomData] = useState({
    roomNo: "",
    roomName: "",
    type: "Standard",
    price: "",
    description: "",
    facilities: [],
    status: "unbooked",
    image: "",
  });

  const [errors, setErrors] = useState({});

  const facilitiesOptions = ["Wi-Fi", "TV", "AC", "Mini Bar", "Balcony", "Room Service"];

  // Fetch room details if editing
  useEffect(() => {
    if (id) {
      getRoomById(id).then((res) => {
        if (res.data) {
          setRoomData(res.data);
        }
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoomData({ ...roomData, [name]: value });
  };

  const handleFacilitiesChange = (e) => {
    const options = Array.from(e.target.selectedOptions, (option) => option.value);
    setRoomData({ ...roomData, facilities: options });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64Image = await fileToBase64(file);
      setRoomData({ ...roomData, image: base64Image });
    }
  };

  const validateForm = () => {
    let formErrors = {};
    if (roomData.roomNo.trim() === "") formErrors.roomNo = "Room number is required.";
    if (roomData.roomName.trim() === "") formErrors.roomName = "Room name is required.";
    if (roomData.description.trim() === "") formErrors.description = "Description is required.";
    if (roomData.type.trim() === "") formErrors.type = "Room type is required.";
    if (roomData.price.toString().trim() === "") formErrors.price = "Price is required.";
    if (roomData.facilities.length === 0) formErrors.facilities = "Select at least one facility.";
    if (!roomData.image || roomData.image.trim() === "") formErrors.image = "Room image is required.";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      if (id) {
        // 🔹 Update existing room
        updateRoom(id, { ...roomData, price: Number(roomData.price) })
          .then(() => {
            toast.success("Room updated successfully!");
            navigate("/admin/adminRooms");
          })
          .catch((e) => {
            toast.error(e.message || "Error updating room");
          });
      } else {
        // 🔹 Add new room
        addRooms({ ...roomData, price: Number(roomData.price) })
          .then((res) => {
            if (res.data) {
              toast.success("Room added successfully!");
              navigate("/admin/adminRooms");
            }
          })
          .catch((e) => {
            toast.error(e.message || "Error adding room");
          });
      }
    } else {
      toast.error("Please fix the errors before submitting.");
    }
  };

  return (
    <div className="add-room-container">
      {/* X Button */}
      <button className="close-btn" onClick={() => navigate("/admin/adminRooms")}>
        ×
      </button>

      <h2>{id ? "Edit Room" : "Add New Room"}</h2>

      <form className="add-room-form" onSubmit={handleSubmit}>
        <label>
          Room Number:
          <input type="text" name="roomNo" value={roomData.roomNo} onChange={handleChange} />
        </label>
        {errors.roomNo && <span className="error">{errors.roomNo}</span>}

        <label>
          Room Name:
          <input type="text" name="roomName" value={roomData.roomName} onChange={handleChange} />
        </label>
        {errors.roomName && <span className="error">{errors.roomName}</span>}

        <label>
          Room Type:
          <select name="type" value={roomData.type} onChange={handleChange}>
            <option value="Standard">Standard</option>
            <option value="Executive">Executive</option>
            <option value="Suite">Suite</option>
          </select>
        </label>
        {errors.type && <span className="error">{errors.type}</span>}

        <label>
          Price per Night:
          <input type="number" name="price" value={roomData.price} onChange={handleChange} />
        </label>
        {errors.price && <span className="error">{errors.price}</span>}

        <label>
          Description:
          <textarea name="description" value={roomData.description} onChange={handleChange} rows="4" />
        </label>
        {errors.description && <span className="error">{errors.description}</span>}

        <label>
          Facilities:
          <select name="facilities" multiple value={roomData.facilities} onChange={handleFacilitiesChange}>
            {facilitiesOptions.map((facility, index) => (
              <option key={index} value={facility}>
                {facility}
              </option>
            ))}
          </select>
        </label>
        {errors.facilities && <span className="error">{errors.facilities}</span>}

        <label>
          Room Image:
          <input type="file" name="image" accept="image/*" onChange={handleFileChange} />
        </label>
        {errors.image && <span className="error">{errors.image}</span>}

        {roomData.image && (
          <img
            src={roomData.image}
            alt="Room Preview"
            style={{ width: "100%", marginTop: "10px", borderRadius: "5px" }}
          />
        )}

        <button type="submit">{id ? "Update Room" : "Add Room"}</button>
      </form>
    </div>
  );
};

export default AddRoomForm;
