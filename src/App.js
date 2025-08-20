import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AdminPanel from './pages/Admin/AdminPanel';
import AdminRooms from './pages/Admin/AdminRooms';
import { ToastContainer } from 'react-toastify';
import AddRoomForm from './pages/Admin/AddRoomForm';
import BookingManagement from './pages/Admin/BookingManagement';
import StarHotels from './pages/UserPage/StarHotel';
import RoomsAndSuites from './pages/UserPage/RoomsAndSuites';
import EditRoom from './pages/Admin/EditRoom';
import FindBooking from './pages/UserPage/FindBooking';


function App() {
  return (
   <>
   <BrowserRouter>
      <Routes>
      <Route path= "/signup" element={<Signup/>} ></Route>
      <Route path= "/login" element={<Login/>} ></Route>
      <Route path= "/adminPanel" element={<AdminPanel/>}></Route>
      <Route path= "/adminRooms" element={<AdminRooms/>}></Route>
      <Route path= "/addRoomForm" element={<AddRoomForm/>}></Route>
      <Route path= "/bookingManagement" element={<BookingManagement/>}></Route>
      <Route path= "/roomsAndSuites" element={<RoomsAndSuites/>}></Route>
      <Route path= "/editRoom" element={<EditRoom/>}></Route>
      <Route path= "/starHotel" element={<StarHotels/>}></Route>
      <Route path= "/findBooking" element={<FindBooking/>}></Route>


      </Routes>
  </BrowserRouter>
  
  <ToastContainer/>
   </>
  );
}

export default App;
