import axios from "axios"

export const addRooms= async (room)=>{
   let data= await axios.post("http://localhost:4000/rooms",room)
   return data;
} 
export const getAllRooms= async()=>{
    const data= await axios.get("http://localhost:4000/rooms")
    return data;
}

export const getRoomById = async(id)=>{
  const data = await axios.get(`http://localhost:4000/rooms/${id}`)
  return data
}

export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file); // Read file as Base64
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};