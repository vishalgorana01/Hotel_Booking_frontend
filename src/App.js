import React from "react";
import './index.css'
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Pages/Admin";

import Home from "./Pages/Home";
import HotelDescription from "./Pages/HotelDescription";
import HotelsByLocation from "./Pages/HotelsByLocation";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Booking from "./Pages/Booking";
import YourBookings from "./Pages/YourBookings";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login/>}/>
          <Route path='Home' element={<Home/>}></Route>
          <Route path='Description' element={<HotelDescription/>}></Route>
          <Route path='HotelsByDestination' element={<HotelsByLocation/>}></Route>
          <Route path='Booking/RoomSelection' element={<Booking/>}></Route>
          <Route path='Booking/EnterDetails' element={<Booking/>}></Route>
          <Route path='Booking/Payment' element={<Booking/>}></Route>
          <Route path='/YourBookings' element={<YourBookings/>}></Route>

          <Route path='AdminPanel/Dashboard' element={<Admin/>}></Route>
          <Route path='AdminPanel/Bookings' element={<Admin/>}></Route>
          <Route path='AdminPanel/Rooms' element={<Admin/>}></Route>
          <Route path='AdminPanel/Hotels' element={<Admin/>}></Route>
          <Route path='AdminPanel/Hotels/addhotel' element={<Admin/>}></Route>
          <Route path='AdminPanel/Customers' element={<Admin/>}></Route>
          <Route path='AdminPanel/Payments' element={<Admin/>}></Route>
          <Route path='AdminPanel/Supports' element={<Admin/>}></Route>
          <Route path='AdminPanel/Settings' element={<Admin/>}></Route>

          {/* <Route path='cart' element={<Cart></Cart>}></Route> */}
          {/* <Route path='Bprofile' element={<BuyerProfile></BuyerProfile>}></Route> */}
          {/* <Route path='Sprofile' element={<SellerProfile></SellerProfile>}></Route> */}
          {/* <Route path='Sform' element={<SellerForm></SellerForm>}></Route> */}
          {/* <Route path='UserData' element={<UsersData></UsersData>}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
