import axios from "axios"

export const addUser=async(user)=>{

    let data=await axios.post("http://localhost:4000/user",user);
    return data;
}