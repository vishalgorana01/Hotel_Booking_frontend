import React, { useState } from 'react'
import styles from "../Assets/CSS/Home.module.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import GuestNavbar from '../Components/NavBars/GuestNavbar';
import AboutUs from '../Components/About us/AboutUs';
import Testimonials from '../Components/Testimonials/Testimonials';
import GuestFooter from '../Components/Footers/GuestFooter';

export default function Landing() {
  const [startDate, setCheckIndate] = useState();
  const [endDate, setCheckOutdate] = useState();
  const [destination, setDestination] = useState('Destination');
  const [room, setRoom] = useState('Room');
  return (
    <>
      <GuestNavbar></GuestNavbar>
      <section className='flex w-screen h-screen items-center justify-center' id={styles.LandingBg}>
        <div className='flex flex-col max-w-7xl justify-center items-center'>
          <h1 className='text-cyan-200 leading-12 text-4xl mb-4  sm:mb-16 w-9/12 sm:text-6xl sm:w-9/12 md:text-6xl text-center md:w-7/12 '>Welcome To Our Hotlieo</h1>
          <span className='text-cyan-200 text-center mb-4  sm:mb-16 px-4 w-full sm:px-3 sm:w-10/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur est nisi culpa possimus possimus, excepturi!</span>
          <span className='py-1.5 px-5 cursor-pointer rounded-sm text-cyan-200 bg-red-500 mx-3 ease-linear duration-200 hover:-translate-y-1'><button onClick={() => { document.location.href = "/Login" }} className='py-1'>Login Now</button></span>
        </div>

        <div className='grid grid-cols-1 -bottom-60 h-auto flex-wrap absolute  rounded py-4 px-3 sm:grid-cols-2 sm:grid-rows-3  sm:w-7/11 sm:-bottom-44 lg:flex lg:-bottom-16' style={{ backgroundColor: "#0b244b" }}>
          <span className='flex items-center hover:cursor-pointer justify-center mb-2 border-2 rounded-sm m-2 px-2 '><DatePicker className={`${styles.datePicker} py-2 text-cyan-200`} selected={startDate} onChange={(date = Date) => setCheckIndate(date)} placeholderText="Check In" /><i className="fa-sharp fa-solid fa-calendar-days mx-1 pl-1 text-cyan-200"></i></span>

          <span className='flex items-center hover:cursor-pointer justify-center mb-2 border-2 rounded-sm m-2 px-2 lg:mx-2'><DatePicker className={`${styles.datePicker} py-2 text-cyan-200`} selected={endDate} placeholderText="Check Out" onChange={(date = Date) => setCheckOutdate(date)} /><i className="fa-sharp fa-solid fa-calendar-days mx-1 pl-1 text-cyan-200"></i></span>

          <span className="dropdown flex items-center justify-center m-2 border-2 py-2 rounded-sm  px-4 lg:mx-2">
            <span className="dropdown-toggle text-cyan-200" href="/" role="button" id="dropdownMenuLink" data-mdb-toggle="dropdown"
              aria-expanded="false"> {destination} </span>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li onClick={(e) => setDestination(e.target.textContent)}><a className="dropdown-item">Bhopal</a></li>
              <li onClick={(e) => setDestination(e.target.textContent)}><a className="dropdown-item">Delhi</a></li>
              <li onClick={(e) => setDestination(e.target.textContent)}><a className="dropdown-item">Mumbai</a></li>
            </ul>
          </span>

          <span className="dropdown flex items-center justify-center border-2 py-2 rounded-sm m-2 px-4 lg:mx-2">
            <span className="dropdown-toggle text-cyan-200" href="/" role="button" id="dropdownMenuLink" data-mdb-toggle="dropdown"
              aria-expanded="false"> {room} </span>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li onClick={(e) => setRoom(e.target.textContent)}><a className="dropdown-item">Deluxe Room</a></li>
              <li onClick={(e) => setRoom(e.target.textContent)}><a className="dropdown-item">Double Room</a></li>
              <li onClick={(e) => setRoom(e.target.textContent)}><a className="dropdown-item">Single Room</a></li>
              {/* <li onClick={(e)=> setRoom(e.target.textContent)}><a className="dropdown-item">1</a></li> */}
            </ul>
          </span>


          <span className='flex items-center justify-center px-2 cursor-pointer rounded-sm py-2 text-cyan-200 bg-red-500 ease-linear duration-200 m-2 hover:-translate-y-1 sm:col-span-2'><button className='py-1 px-3'>Book Now</button></span>

        </div>
      </section>

      {/* <AboutUs /> */}

      <Testimonials />

      {/* Footer */}
      <GuestFooter />
    </>
  )
}
