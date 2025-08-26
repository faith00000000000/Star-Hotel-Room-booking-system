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
import RoomDescriptionPage from './pages/UserPage/RoomDescriptionPage';
import AdminLayout from './pages/Admin/AdminLayout';
import CartPage from './pages/UserPage/CartPage';
import CheckoutPage from './pages/UserPage/CheckoutPage';


function App() {
  return (
   <>
   <BrowserRouter>
      <Routes>

      <Route path= "/signup" element={<Signup/>} ></Route>
      <Route path= "/login" element={<Login/>} ></Route>  


      <Route path= "/" element={<StarHotels/>}></Route>
        <Route path= "/findBooking" element={<FindBooking/>}></Route>
        <Route path= "/roomsAndSuites" element={<RoomsAndSuites/>}></Route>
        <Route path= "/roomDescriptionPage/:id" element={<RoomDescriptionPage/>}></Route>
        {/* <Route path= "/cartPage" element={<CartPage/>}></Route> */}
        <Route path= "/checkoutPage" element={<CheckoutPage/>}></Route>


      
      <Route path="/admin" element={<AdminLayout/>}>
        <Route path= "/admin/adminPanel" element={<AdminPanel/>}></Route>
        <Route path= "/admin/adminRooms" element={<AdminRooms/>}></Route>
        <Route path= "/admin/adminRooms/addRoomForm" element={<AddRoomForm/>}></Route>
        <Route path= "/admin/bookingManagement" element={<BookingManagement/>}></Route>
        <Route path= "/admin/editRoom/:id" element={<EditRoom/>}></Route>
      </Route>


      </Routes>
  </BrowserRouter>
  
  <ToastContainer/>
   </>
  );
}

export default App;
