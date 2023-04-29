import React, { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import GuestNavbar from '../Components/NavBars/GuestNavbar'
import DatePicker from "react-datepicker";

import hotelImg from '../Assets/Images/sunset-pool.jpg'

import styles from '../Assets/CSS/HotelDescription.module.css'
import DescriptionSidebar from '../Components/SideBars/DescriptionSidebar'
import RoomTypes from '../Components/Room Types/RoomTypes';
import RoomDescription from '../Components/Room Types/RoomDescription';
import UserNavbar from '../Components/NavBars/UserNavbar';
import GuestFooter from '../Components/Footers/GuestFooter';
import utilities from '../Assets/Utility/utility';

function HotelDescription() {
    const [startDate, setCheckIndate] = useState();
    const [endDate, setCheckOutdate] = useState();
    const [room, setRoom] = useState('Rooms');
    const [destination, setDestination] = useState('Destination')
    const [display, setDisplay] = useState('hidden')

    console.log(document.location.href)
    const { q } = useParams(document.location.href);
    console.log("query :- ", q)

    const queryParameters = new URLSearchParams(window.location.search)
    const name = queryParameters.get('name')
    // const id = queryParameters.get('id')
    // console.log(id)

    const mainRefImges = useRef();
    const refImages = useRef([]);
    const pushRefImages = (ele) => refImages.current.push(ele);

    const refName = useRef('');
    const refRating = useRef();
    const refTitle = useRef();

    const traverse = useRef([]);
    const pushTraverse = (ele) => traverse.current.push(ele);

    const summary = useRef(null)
    const roomDates = useRef(null)
    const prefrences = useRef(null)
    const map = useRef(null)
    const reviews = useRef(null)
    const things_to_do = useRef(null)

    const selectTraverse = (keyNumber) => {
        console.log(keyNumber)
        if (keyNumber == 0) {
            summary.current.style.display = 'flex';
            roomDates.current.style.display = 'none';
            prefrences.current.style.display = 'none';
            map.current.style.display = 'none';
            reviews.current.style.display = 'none';
            things_to_do.current.style.display = 'none';
        }
        else if (keyNumber == 1) {
            summary.current.style.display = 'none';
            roomDates.current.style.display = 'flex';
            prefrences.current.style.display = 'none';
            map.current.style.display = 'none';
            reviews.current.style.display = 'none';
            things_to_do.current.style.display = 'none';
        }
        else if (keyNumber == 2) {
            summary.current.style.display = 'none';
            roomDates.current.style.display = 'none';
            prefrences.current.style.display = 'flex';
            map.current.style.display = 'none';
            reviews.current.style.display = 'none';
            things_to_do.current.style.display = 'none';
        }
        else if (keyNumber == 3) {
            summary.current.style.display = 'none';
            roomDates.current.style.display = 'none';
            prefrences.current.style.display = 'none';
            map.current.style.display = 'flex';
            reviews.current.style.display = 'none';
            things_to_do.current.style.display = 'none';
        }
        else if (keyNumber == 4) {
            summary.current.style.display = 'none';
            roomDates.current.style.display = 'none';
            prefrences.current.style.display = 'none';
            map.current.style.display = 'none';
            reviews.current.style.display = 'flex';
            things_to_do.current.style.display = 'none';
        }
        else if (keyNumber == 5) {
            summary.current.style.display = 'none';
            roomDates.current.style.display = 'none';
            prefrences.current.style.display = 'none';
            map.current.style.display = 'none';
            reviews.current.style.display = 'none';
            things_to_do.current.style.display = 'flex';
        }
    }

    const [hotelName, setHotelName] = useState('');
    const hotelDetails = async () => {
        try {
            let hotelInformation = await axios.get(`${utilities.deploy_url}/api/hotels/${name}`)
            hotelInformation = hotelInformation.data
            console.log(hotelInformation)
            // console.log(`http://localhost:8800/${hotelInformation.photos[0]}`)

            // set images of the hotel
            // mainRefImges.current.src = `http://localhost:8800/${hotelInformation.photos[0]}`
            let j = 0;
            for (let i = 0; i < refImages.current.length; i++) {
                if (i < 5) {
                    j++;
                }
                else {
                    j = 0;
                }
                // refImages.current[i].src = `http://localhost:8800/${hotelInformation.photos[j]}`
            }

            // set name of the hotel
            refName.current.innerHTML = hotelInformation.name

            setHotelName(hotelInformation.name);

            // set rating of the hotel
            if (hotelInformation.type == '1 star') {
                for (let i = 0; i < 1; i++) {
                    refRating.current.children[i].style.color = 'yellow';
                }
            }
            else if (hotelInformation.type == '2 star') {
                for (let i = 0; i < 2; i++) {
                    refRating.current.children[i].style.color = 'yellow';
                }
            }
            else if (hotelInformation.type == '3 star') {
                for (let i = 0; i < 3; i++) {
                    refRating.current.children[i].style.color = 'yellow';
                }
            }
            else if (hotelInformation.type == '4 star') {
                for (let i = 0; i < 4; i++) {
                    refRating.current.children[i].style.color = 'yellow';
                }
            }
            else if (hotelInformation.type == '5 star') {
                for (let i = 0; i < 5; i++) {
                    refRating.current.children[i].style.color = 'yellow';
                }
            }
            else if (hotelInformation.type == '6 star') {
                for (let i = 0; i < 6; i++) {
                    refRating.current.children[i].style.color = 'yellow';
                }
            }
            else if (hotelInformation.type == '7 star') {
                for (let i = 0; i < 7; i++) {
                    refRating.current.children[i].style.color = 'yellow';
                }
            }

        } catch (error) {

        }
    }

    const navigate = useNavigate();
    const getRoomSelectionPage = (givenQuery) => {
        navigate(`/Booking/RoomSelection?hotel=${givenQuery}`)
    }

    useEffect(() => {
        hotelDetails();
    }, [])

    const NavBar = () => {
        if (sessionStorage.getItem('userId')) {
            return (<UserNavbar bgColor='rgb(11 36 75)' />)
        }
        else {
            return (<GuestNavbar bgColor='rgb(11 36 75)' />)
        }
    }

    // slider
    const slider = useRef(null);

    const nextSlide = ()=>{
        
    }

    return (
        <>
            {/* <GuestNavbar bgColor='rgb(11 36 75)'></GuestNavbar> */}
            {/* <navbar /> */}
            {/* <div> */}
            <NavBar />
            {/* </div> */}
            <section className='flex items-center relative top-20 justify-center px-6 h-auto w-screen sm:px-16'>
                <div className='flex flex-col items-center gap-2 justify-between max-w-7xl xl:flex-row xl:items-start'>
                    <div className='flex flex-col gap-3 w-5/5 items-center p-2 justify-center sm:4/5 sm:px-3 xl:w-4/6'>
                        <img src={hotelImg} ref={mainRefImges} className="w-full" alt="loading error" />
                        <div className='flex items-center justify-start'>
                            <div className='h-full flex items-center justify-start cursor-pointer p-2 sm:p-2'><i className="text-xl fa-sharp fa-solid fa-angle-left"></i></div>
                            <div className={`${styles.hideScrollbar} snap-mandatory snap-x flex w-full items-center justify-start gap-3 overflow-x-scroll`} ref={slider}>
                                <span className='flex w-auto items-center justify-start gap-3'>
                                    <img className='w-1/4 snap-center' ref={(ele) => pushRefImages(ele)} src={hotelImg} alt="error loading" />
                                    <img className='w-1/4 snap-center' ref={(ele) => pushRefImages(ele)} src={hotelImg} alt="error loading" />
                                    <img className='w-1/4 snap-center' ref={(ele) => pushRefImages(ele)} src={hotelImg} alt="error loading" />
                                    <img className='w-1/4 snap-center' ref={(ele) => pushRefImages(ele)} src={hotelImg} alt="error loading" />
                                    <img className='w-1/4 snap-center' ref={(ele) => pushRefImages(ele)} src={hotelImg} alt="error loading" />
                                    <img className='w-1/4 snap-center' ref={(ele) => pushRefImages(ele)} src={hotelImg} alt="error loading" />
                                    <img className='w-1/4 snap-center' ref={(ele) => pushRefImages(ele)} src={hotelImg} alt="error loading" />
                                </span>
                            </div>
                            <div className='h-full flex items-center justify-center p-2 cursor-pointer'><i className="text-xl fa-sharp fa-solid fa-angle-right"></i></div>
                        </div>
                    </div>

                    <div className='flex flex-col items-start justify-center p-3 w-full sm:w-4/5 sm:p-5 md:p-5 lg:p-5 xl:p-5 xl:w-2/6'>
                        <h2 ref={refName} className='text-xl'>Hotel Name</h2>
                        <span ref={refRating} className='flex items-center justify-center mb-3 gap-0.5'><i className="text-xs text-gray-400 fa-sharp fa-solid fa-star"></i><i className="text-xs text-gray-400 fa-sharp fa-solid fa-star"></i><i className="text-xs text-gray-400 fa-sharp fa-solid fa-star"></i><i className="text-xs text-gray-400 fa-sharp fa-solid fa-star"></i><i className="text-xs text-gray-400 fa-sharp fa-solid fa-star"></i><i className="text-xs text-gray-400 fa-sharp fa-solid fa-star"></i><i className="text-xs text-gray-400 fa-sharp fa-solid fa-star"></i></span>

                        <span ref={refTitle} className='text-5xl text-green-400 tracking-wider my-2'>Wonderful!</span>
                        <span className='w-full flex items-center justify-between my-3'>
                            <div className='flex flex-col text-center items-center justify-center'>
                                <span className='text-xl'>97%</span>
                                <p className='text-center text-xs'>of guests <br />recommended</p>
                            </div>
                            <div className='flex flex-col text-center items-center justify-center'>
                                <span className='text-xl'>4.5</span>
                                <p className='text-center text-xs'>guests rating</p>
                            </div>
                        </span>

                        <span className='w-full flex items-center justify-between my-2 mb-5'>
                            <div className='flex flex-col text-center items-center justify-center'>
                                <span className='flex gap-0.5 items-center justify-center'><i className="text-xs text-yellow-400 fa-solid fa-circle"></i><i className="text-xs text-yellow-400 fa-solid fa-circle"></i><i className="text-xs text-yellow-400 fa-solid fa-circle"></i><i className="text-xs text-yellow-400 fa-solid fa-circle"></i><i className="text-xs text-yellow-400 fa-solid fa-circle"></i></span>
                                <p className='text-center text-xs'>1k reviews</p>
                            </div>
                            <div className='flex flex-col text-center items-center justify-center'>
                                <span className='flex items-center justify-center gap-1'><i className="text-md fa-sharp fa-solid fa-plus"></i> <p className='text-center text-xs'>add review</p></span>
                            </div>
                        </span>

                        <span className='flex items-center justify-center flex-col w-full gap-3 md:flex-row xl:flex-col'>
                            <span className='cursor-pointer bg-cyan-50 shadow-md shadow-red-200 py-1.5 flex w-full items-center justify-evenly text-xl my-1 xl:text-2xl'><i className="fa-sharp text-center fa-solid fa-plus w-2/7"></i>
                                <p className='text-center w-5/7 tracking-wide'>Add to favourite</p>
                            </span>
                            <span className='flex w-full bg-red-500 text-cyan-200 py-1 items-center justify-evenly text-xl cursor-pointer mt-1 xl:text-2xl'>
                                <p className='text-center' onClick={() => getRoomSelectionPage(name)}>Book Now</p>
                            </span>
                        </span>
                    </div>
                </div>
            </section>

            <section className='flex items-center relative top-20 justify-center mt-4 px-6 h-auto w-screen mb-32 sm:px-16'>
                <div className='flex flex-col items-center gap-2 w-full justify-between max-w-7xl xl:flex-row xl:items-start'>
                    <div className='flex flex-col items-center justify-center px-0 sm:px-6 py-5 w-full xl:w-4/6'>
                        <div className='flex relative mb-4 items-center flex-wrap h-auto w-full justify-center xl:justify-center'>
                            {/* <div className='flex items-center justify-center'> */}
                            <span onClick={() => selectTraverse(0)} className={`${styles.traverse} flex items-center justify-center py-3 cursor-pointer px-4 text-cyan-100 hover:bg-white`}><i className="mr-2 fa-solid fa-clock"></i>Summary</span>
                            <span ref={summary}></span>

                            <span onClick={() => selectTraverse(1)} className={`${styles.traverse} flex items-center justify-center py-3 px-3.5 cursor-pointer text-cyan-100 hover:bg-white`}><i className="mr-2 fa-sharp fa-solid fa-calendar-days"></i>Room Dates
                            </span>
                            <span ref={roomDates} className={`${styles.RoomDates} flex relative left-0 mb-2 top-0 flex-wrap items-center justify-center px-2 py-3`} style={{ backgroundColor: "#0b244b" }}>
                                <div className='flex items-center justify-center flex-wrap'>
                                    <span className='flex items-center hover:cursor-pointer justify-center mb-2 border-2 rounded-sm m-2 px-2 '><DatePicker className={`${styles.datePicker} w-full py-2 text-cyan-200`} selected={startDate} onChange={(date = Date) => setCheckIndate(date)} placeholderText="Check In" /><i className="fa-sharp fa-solid fa-calendar-days mx-1 pl-1 text-cyan-200"></i></span>

                                    <span className='flex items-center hover:cursor-pointer justify-center mb-2 border-2 rounded-sm m-2 px-2 '><DatePicker className={`${styles.datePicker} w-full py-2 text-cyan-200`} selected={endDate} onChange={(date = Date) => setCheckOutdate(date)} placeholderText="Check Out" /><i className="fa-sharp fa-solid fa-calendar-days mx-1 pl-1 text-cyan-200"></i></span>
                                </div>

                                <div className='flex items-center justify-center flex-wrap'>
                                    <span className="dropdown flex items-center justify-center m-2 border-2 py-2 rounded-sm  px-4 lg:mx-2">
                                        <span className="dropdown-toggle text-cyan-200" href="/" role="button" id="dropdownMenuLink" data-mdb-toggle="dropdown"
                                            aria-expanded="false"> {destination} </span>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <li onClick={(e) => setDestination(e.target.textContent)}><a className="dropdown-item">Bhopal</a></li>
                                            <li onClick={(e) => setDestination(e.target.textContent)}><a className="dropdown-item">Delhi</a></li>
                                            <li onClick={(e) => setDestination(e.target.textContent)}><a className="dropdown-item">Mumbai</a></li>
                                        </ul>
                                    </span>

                                    <span className="dropdown flex items-center py-2 px-4 justify-center border-2 rounded-sm m-2  lg:mx-2">
                                        <label className="dropdown-toggle text-cyan-200" role="button" id="dropdownMenuLink" data-mdb-toggle="dropdown"
                                            aria-expanded="false"> {room} </label>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <li onClick={(e) => setRoom(e.target.textContent)}><a className="dropdown-item">Deluxe Room</a></li>
                                            <li onClick={(e) => setRoom(e.target.textContent)}><a className="dropdown-item">Double Room</a></li>
                                            <li onClick={(e) => setRoom(e.target.textContent)}><a className="dropdown-item">Single Room</a></li>
                                            {/* <li onClick={(e)=> setRoom(e.target.textContent)}><a className="dropdown-item">1</a></li> */}
                                        </ul>

                                        {/* <select className='w-28 py-2 px-3' name="" id="" style={{background: 'none', color: 'white', outline: 'none', border: 'none'}}>
                                            <option defaultValue="Rooms" value="">Rooms</option>
                                            <option className="text-black" value="">2</option>
                                            <option className="text-black" value="">3</option>
                                        </select> */}
                                    </span>
                                </div>

                                <span className='flex items-center justify-center px-2 cursor-pointer rounded-sm py-2 text-cyan-200 bg-red-500 ease-linear duration-200 m-2 hover:-translate-y-1'><button className='py-1 px-3'>Search</button></span>
                            </span>
                            {/* </div> */}

                            {/* <div className='flex items-center justify-center'> */}
                            <span onClick={() => selectTraverse(2)} className={`${styles.traverse} flex items-center justify-center cursor-pointer py-3 px-4 text-cyan-100 hover:bg-white`}><i className="mr-2 fa-sharp fa-solid fa-map-location-dot"></i>Prefrences</span>
                            <span ref={prefrences}></span>

                            <span onClick={() => selectTraverse(3)} className={`${styles.traverse} flex items-center justify-center cursor-pointer py-3 px-4 text-cyan-100 hover:bg-white`}><i className="mr-2 fa-sharp fa-solid fa-map-location-dot"></i>Map</span>
                            <span ref={map}></span>
                            {/* </div> */}

                            {/* <div className='flex items-center justify-center'> */}
                            <span onClick={() => selectTraverse(4)} className={`${styles.traverse} flex items-center justify-center cursor-pointer py-3 px-4 text-cyan-100 hover:bg-white`}><i className="mr-2 fa-sharp fa-solid fa-star"></i>Reviews</span>
                            <span ref={reviews}></span>

                            <span onClick={() => selectTraverse(5)} className={`${styles.traverse} flex items-center justify-center cursor-pointer py-3 px-4 text-cyan-100 hover:bg-white`}><i className="mr-2 fa-sharp fa-solid fa-map-location-dot"></i>Thinds to do</span>
                            <span ref={things_to_do}></span>

                            {/* </div> */}
                        </div>

                        {/* Room Types */}
                        <div className='flex flex-col items-start justify-center w-full xl:w-full'>
                            <h3 className='text-lg lg:text-xl xl:text-2xl'>Room Types</h3>

                            <RoomTypes />

                        </div>

                    </div>

                    <div className='flex flex-col items-start justify-center p-3 w-full sm:w-4/5 sm:p-5 md:p-5 lg:p-5 xl:p-5 xl:w-2/6'>
                        <DescriptionSidebar />
                    </div>
                </div>
            </section>

            {/* Fooeter */}
            <GuestFooter />
        </>
    )
}

export default HotelDescription