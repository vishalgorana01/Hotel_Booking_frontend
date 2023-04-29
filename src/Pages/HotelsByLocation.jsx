import React, { useRef, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

import axios from 'axios';
import styles from "../Assets/CSS/Home.module.css"
import styles2 from '../Assets/CSS/Common.module.css'
import DatePicker from "react-datepicker";
import GuestNavbar from '../Components/NavBars/GuestNavbar'
import UserNavbar from '../Components/NavBars/UserNavbar'
import Filters from '../Components/SideBars/Filters';

import image1 from '../Assets/Images/umbrella-chair.jpg'
import GuestFooter from '../Components/Footers/GuestFooter';
import utilities from '../Assets/Utility/utility';

function HotelsByLocation() {

  const queryParameters = new URLSearchParams(window.location.search)
  const cityName = queryParameters.get('destination')

  const leftDiv = useRef(null);
  let showLeftDivCheck = false;
  const showLeftDiv = () => {
    if (!showLeftDivCheck) {
      leftDiv.current.style.transition = 'all 0.5s'
      leftDiv.current.style.transform = 'translateX(0px)'
      showLeftDivCheck = true;
    }
    else {
      leftDiv.current.style.transition = 'all 0.5s'
      leftDiv.current.style.transform = 'translateX(100%)'
      showLeftDivCheck = false;
    }
  }

  const [startDate, setCheckIndate] = useState();
  const [endDate, setCheckOutdate] = useState();
  const [destination, setDestination] = useState('Destination');
  const [room, setRoom] = useState('Room');

  const NavBar = () => {
    if (sessionStorage.getItem('userId')) {
      return (<UserNavbar bgColor='rgb(11 36 75)' />)
    }
    else {
      return (<GuestNavbar bgColor='rgb(11 36 75)' />)
    }
  }


  const [cityHotels, setCityHotels] = useState([]);

  const getHotelsByCityName = async () => {
    const hotelsByCityName = await axios.get(`${utilities.deploy_url}/api/hotels/`)
    // console.log(hotelsByCityName.data);

    setCityHotels(hotelsByCityName.data);
  }

  useEffect(() => {
    getHotelsByCityName()
  }, [])

  console.log(cityHotels)

  const hotelRating = (givenRating) => {
    if (givenRating == "1 star") {
      return (
        <span className='text-xs text-gray-600'>
          <i className="fa-sharp fa-solid fa-star text-yellow-500"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
        </span>
      )
    }
    else if (givenRating == "2 star") {
      return (
        <span className='text-xs text-gray-600'>
          <i className="fa-sharp fa-solid fa-star text-yellow-500"></i>
          <i className="fa-sharp fa-solid fa-star text-yellow-500"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
        </span>
      )
    }
    else if (givenRating == "3 star") {
      return (
        <span className='text-xs text-gray-600'>
          <i className="fa-sharp fa-solid fa-star text-yellow-500"></i>
          <i className="fa-sharp fa-solid fa-star text-yellow-500"></i>
          <i className="fa-sharp fa-solid fa-star text-yellow-500"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
        </span>
      )
    }
    else if (givenRating == "4 star") {
      return (
        <span className='text-xs text-gray-600'>
          <i className="fa-sharp fa-solid fa-star text-yellow-500"></i>
          <i className="fa-sharp fa-solid fa-star text-yellow-500"></i>
          <i className="fa-sharp fa-solid fa-star text-yellow-500"></i>
          <i className="fa-sharp fa-solid fa-star text-yellow-500"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
        </span>
      )
    }
    else if (givenRating == "5 star") {
      return (
        <span className='text-xs text-gray-600'>
          <i className="fa-sharp fa-solid fa-star text-yellow-500"></i>
          <i className="fa-sharp fa-solid fa-star text-yellow-500"></i>
          <i className="fa-sharp fa-solid fa-star text-yellow-500"></i>
          <i className="fa-sharp fa-solid fa-star text-yellow-500"></i>
          <i className="fa-sharp fa-solid fa-star text-yellow-500"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
        </span>
      )
    }
    else if (givenRating == "6 star") {
      return (
        <span className='text-xs text-gray-600'>
          <i className="fa-sharp fa-solid fa-star text-yellow-500"></i>
          <i className="fa-sharp fa-solid fa-star text-yellow-500"></i>
          <i className="fa-sharp fa-solid fa-star text-yellow-500"></i>
          <i className="fa-sharp fa-solid fa-star text-yellow-500"></i>
          <i className="fa-sharp fa-solid fa-star text-yellow-500"></i>
          <i className="fa-sharp fa-solid fa-star text-yellow-500"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
        </span>
      )
    }
    else if (givenRating == "7 star") {
      return (
        <span className='text-xs text-gray-600'>
          <i className="fa-sharp fa-solid fa-star text-yellow-500"></i>
          <i className="fa-sharp fa-solid fa-star text-yellow-500"></i>
          <i className="fa-sharp fa-solid fa-star text-yellow-500"></i>
          <i className="fa-sharp fa-solid fa-star text-yellow-500"></i>
          <i className="fa-sharp fa-solid fa-star text-yellow-500"></i>
          <i className="fa-sharp fa-solid fa-star text-yellow-500"></i>
          <i className="fa-sharp fa-solid fa-star text-yellow-500"></i>
        </span>
      )
    }
  }

  const navigate = useNavigate();
  const hotelDescription = (givenQuery) => {
    navigate(`/Description?name=${givenQuery}`);
  }

  const [hotelCards, setHotelCards] = useState(null)

  const filtersRef = useRef([]);
  const pushFiltersRef = (ele) => filtersRef.current.push(ele);

  let HotelsDiv = React.forwardRef((givenFilter, filters) => {    // here givenFilter is act as a prop
    console.log(givenFilter.filters)
    return (
      cityHotels.map((ele, index) => {
        if (ele.city === givenFilter.cityName) {
          return (
            <div key={index} ref={(ele) => pushFiltersRef(ele)}>
              <span key={index} className='absolute top-0 right-0 text-2xl text-black sm:text-3xl lg:hidden' onClick={() => showLeftDiv()}><i className="fa-solid fa-list-ul"></i></span>

              <span className='flex flex-col items-start gap-x-3 justify-center w-full p-3 sm:p-4' style={{ border: '1px solid black' }}>
                <img className='h-32 lg:block mb-1.5' src={image1} alt="loading error" />

                <span className='flex flex-col items-start gap-y-1.5 justify-start w-full'>
                  <h1 className='text-1xl text-blue-600 cursor-pointer sm:text-2xl' onClick={() => hotelDescription(ele.name)}>{ele.name}</h1>
                  {hotelRating(ele.type)}
                  <span className='text-sm text-black mb-1 sm:text-md'>type :- {ele.type}</span>
                  <span className='text-xs text-justify mb-2.5 sm:text-sm md:text-md'>{ele.description}</span>
                  <span className='flex items-center justify-center px-2 cursor-pointer rounded-sm py-2 text-cyan-200 bg-red-500 ease-linear duration-200 hover:-translate-y-1' onClick={() => hotelDescription(ele.name)}><button className='py-1 px-3'>Show Details</button></span>
                </span>
              </span>
            </div>
          )
        }
      })
    )
  })


  const filters = [];

  const manipulation = (givenFilter, value) => {
    if (value) {
      filters.push(givenFilter);
    }
    else {
      let index = filters.indexOf(givenFilter)
      filters.splice(index, 1);
    }

    console.log(filters)

    for (let i = 0; i < filtersRef.current.length; i++) {
      let check = false;
      if(filters.length == 0){
        check = true;
      }
      for (let j = 0; j < filters.length; j++) {
        let textContent = filtersRef.current[i].children[1].children[1].children[2].textContent;
        console.log(textContent);

        if (textContent.includes(filters[j])) {
          console.log("yes")
          check = true;
        }
      }

      if(check){
        filtersRef.current[i].style.display = 'flex';
      }
      else{
        filtersRef.current[i].style.display = 'none';
      }
    }

  }

  return (
    <>
      <NavBar />
      <section className={`${styles2.increasePadding} flex items-center justify-center w-screen h-auto pt-32 mb-32`}>
        <div className={`${styles2.hideScrollbar} flex items-start relative gap-3 justify-center h-auto w-full max-w-7xl overflow-x-clip`}>

          <div className='flex flex-col absolute right-0 top-12 z-10 rounded bg-white translate-x-full items-center justify-center w-72 md:5/12 lg:w-80 lg:top-0 lg:relative lg:translate-x-0' ref={leftDiv} style={{ border: '1px solid #0b244b' }}>

            <div className='flex flex-col h-auto w-full py-4 px-3' style={{ backgroundColor: "#0b244b" }}>
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

            <Filters filters={manipulation} />

          </div>

          <div className='flex gap-y-5 relative flex-col items-center justify-center w-full lg:w-8/12'>
            <h1 className='text-2xl font-semibold text-black w-full text-left sm:text-3xl'>{cityName} Properties</h1>

            <HotelsDiv cityName={cityName} ></HotelsDiv>
          </div>

        </div>
      </section>

      {/* footer */}
      <GuestFooter />
    </>
  )
}

export default HotelsByLocation