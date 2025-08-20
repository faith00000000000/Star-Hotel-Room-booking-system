import React, { useState } from "react";
import "../css/addRoomForm.css";
import { addRooms, fileToBase64 } from "../../services/room";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
// import { status } from "server/reply";

const AddRoomForm = () => {
  const navigate=useNavigate()
  const [roomData, setRoomData] = useState({
    roomNo: "",
    roomName: "",
    type: "Standard",
    price: "",
    description: "",
    facilities: [],
    status:"unbooked",
    image: "",
  });


  const facilitiesOptions = ["Wi-Fi", "TV", "AC", "Mini Bar", "Balcony", "Room Service"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoomData({ ...roomData, [name]: value });
  };

  const handleFacilitiesChange = (e) => {
    const options = Array.from(e.target.selectedOptions, option => option.value);
    setRoomData({ ...roomData, facilities: options });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0]
    if(file){
      const base64Image = await fileToBase64(e.target.files[0])
      setRoomData({ ...roomData, image: base64Image  });
    } 
    };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false
    if(roomData.roomNo.trim() === ''){
      hasError = true
    }
    if(roomData.roomName.trim() === ''){
      hasError = true
    }
    if(roomData.description.trim() === ''){
      hasError = true
    }
    if(roomData.type.trim() === ''){
      hasError = true
    }
    if(roomData.price.trim() === ''){
      hasError = true
    }
    if(roomData.facilities.trim() === ''){
      hasError = true
    }
    if(roomData.image.trim() === ''){
      hasError = true
    }
    
    if(!hasError){
      addRooms(roomData).then((res)=>{
        if(res.data){
          toast.success("Room added successfully!")
          setRoomData({
          roomNo: "",
          roomName: "",
          type: "Standard",
          price: "",
          description: "",
          facilities: [],
          image: null,
        });
          navigate("/adminRooms")
        }
        
      }).catch(e=>{
        toast.error(e)
      })
    }
    
  };

  return (
    <div className="add-room-container">
      <h2>Add New Room</h2>
      <form className="add-room-form" onSubmit={handleSubmit}>
        <span style={{color:"red"}}></span>
        <label>
          Room Number:
          <input
            type="text"
            name="roomNo"
            value={roomData.roomNo}
            onChange={handleChange}
            required
          />
        </label>

        <span style={{color:"red"}}></span>
        <label>
          Room Name:
          <input
            type="text"
            name="roomName"
            value={roomData.roomName}
            onChange={handleChange}
            required
          />
        </label>

        <span style={{color:"red"}}></span>
        <label>
          Room Type:
          <select
            name="type"
            value={roomData.type}
            onChange={handleChange}
          >
            <option value="Standard">Standard</option>
            <option value="Executive">Executive</option>
            <option value="Suite">Suite</option>
          </select>
        </label>

        <span style={{color:"red"}}></span>
        <label>
          Price per Night:
          <input
            type="number"
            name="price"
            value={roomData.price}
            onChange={handleChange}
            required
          />
        </label>

        <span style={{color:"red"}}></span>
        <label>
          Description:
          <textarea
            name="description"
            value={roomData.description}
            onChange={handleChange}
            rows="4"
            required
          />
        </label>

        <span style={{color:"red"}}></span>
        <label>
          Facilities:
          <select
            name="facilities"
            multiple
            value={roomData.facilities}
            onChange={handleFacilitiesChange}
          >
            {facilitiesOptions.map((facility, index) => (
              <option key={index} value={facility}>{facility}</option>
            ))}
          </select>
        </label>

        <span style={{color:"red"}}></span>
        <label>
          Room Image:
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
          />
        </label>

        <img src={roomData.image}></img>

        <button type="submit">Add Room</button>
      </form>
    </div>
  );
};

export default AddRoomForm;
