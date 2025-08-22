import axios from "axios"

export const addUser=async(user)=>{

    let data=await axios.post("http://localhost:4000/user",user);
    return data;
}

export const getUserById = async (id)=>{
    let data=await axios.get(`http://localhost:4000/user/${id}`);
    return data;
}

export const updateUserBooking = async (id,booking)=>{
    let data = await axios.patch(`http://localhost:4000/user/${id}`,{"booking":booking})
    return data
}