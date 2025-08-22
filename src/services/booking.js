import axios from "axios"

export const addBooking = async (bookingInfo)=>{
    let data = await axios.post("http://localhost:4000/booking",bookingInfo)
    return data
}

export const getBookingData = async ()=>{
    let data = await axios.get("http://localhost:4000/booking")
    return data
}

export const getBookingDataById = async (id)=>{
    let data = await axios.get(`http://localhost:4000/booking/${id}`)
    return data
}