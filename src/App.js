import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AdminPanel from './pages/Admin/AdminPanel';
import AdminRooms from './pages/Admin/AdminRooms';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
   <>
   <BrowserRouter>
      <Routes>
      <Route path= "/signup" element={<Signup/>} ></Route>
      <Route path= "/login" element={<Login/>} ></Route>
      <Route path= "/adminPanel" element={<AdminPanel/>}></Route>
      <Route path= "/adminRooms" element={<AdminRooms/>}></Route>
      </Routes>
  </BrowserRouter>
  
  <ToastContainer/>
   </>
  );
}

export default App;
