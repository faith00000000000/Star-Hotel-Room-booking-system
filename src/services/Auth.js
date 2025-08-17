import axios from "axios"
import { Await } from "react-router"

export const logUserIn=async(email,password)=>{
   let data=await axios.get(`http://localhost:4000/user/?email=${email}&password=${password}`)
   return data;
}
