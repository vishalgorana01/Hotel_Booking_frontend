import React, { useRef, useState, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import DatePicker from "react-datepicker";
import styles from '../../Assets/CSS/Home.module.css'
import '../../App.css'

import image1 from '../../Assets/Images/umbrella-chair.jpg'
import DescriptionSidebar from '../SideBars/DescriptionSidebar';
import { useEffect } from 'react';
import utilities from '../../Assets/Utility/utility';

function RoomSelection(props) {
    const { setDate, roomSleeps, roomDetails } = props;

    const [startDate, setCheckIndate] = useState();
    const [endDate, setCheckOutdate] = useState();
    const [destination, setDestination] = useState('Destination');
    const [room, setRoom] = useState('Room');

    // const inDate = useMemo(()=>{setDate(startDate)},[startDate])

    const applyChanges = (() => {
        console.log(startDate)
        console.log(endDate);
        setDate(startDate, endDate)
    })

    const fillingDetails = (sleeps, rooms) => {
        roomSleeps(sleeps, rooms)
    }

    const allImages = useRef(null);

    const hideShow = (given) => {
        if (given == 'show') {
            allImages.current.style.display = 'flex';
        }
        else {
            allImages.current.style.display = 'none';
        }
    }


    const hotelData = [image1, image1, image1, image1, image1, image1, image1, image1, image1, image1,
        image1, image1, image1, image1, image1, image1, image1, image1, image1, image1,
        image1, image1, image1, image1, image1, image1, image1, image1, image1, image1,
        image1, image1, image1, image1, image1, image1, image1, image1, image1, image1];

    const hotelRoomImagesRef = useRef([]);
    const pushHotelRoomImagesRef = (ele) => hotelRoomImagesRef.current.push(ele)

    const hotelImages = hotelData.map((ele, index) => {
        return (
            <img key={index} src={ele} className='cursor-pointer' alt='loading error' ref={(ele) => pushHotelRoomImagesRef(ele)} />
        )
    })

    let check = true;
    const show_hide = useRef(null);
    const show_more_btn = useRef(null);
    const more_less = () => {
        if (check) {
            show_hide.current.style.display = 'flex'
            show_more_btn.current.innerHTML = 'show less';
            check = false
        }
        else {
            show_hide.current.style.display = 'none'
            show_more_btn.current.innerHTML = 'show more';
            check = true;
        }
    }

    const Heritage = ['Hot Tub', 'Free toiletries', 'Bathrobe', 'Toilet', 'Safety depost box', 'Towels', 'Linen', 'Staying area', 'Seating area', 'Satellite channels', 'Hair dryer', 'Video', 'Telephone', 'Sleepers', 'CD player', 'DVD player', 'Radio', 'Tea/Coffee', 'Wake up service/Alarm clock', 'Dressing room', 'Electric kettle', 'Additional toilet', 'Interconnected rooms', 'Laptop safe', 'Tumble dryer', 'Dining area', 'upper floor accessible by elevator', 'Fold-up bed']

    const HeritageRoomFacilities = Heritage.map((ele, index) => {
        return (
            <span key={index} className='flex items-center justify-center gap-x-1'>
                <i className="fa-sharp fa-solid fa-check text-md text-green-600"></i>
                <p className='text-sm font-light'>{ele}</p>
            </span>
        )
    })

    const queryParameters = new URLSearchParams(window.location.search)
    const hotel = queryParameters.get('hotel')

    const hotelName = useRef(null)
    const hotelImagesRef = useRef([])
    const pushHotelImagesRef = (ele) => hotelImagesRef.current.push(ele)

    const hotelDescription = useRef(null);
    const roomDescription = useRef(null);

    const hotelRoomNameRef = useRef([]);
    const pushHotelRoomNameRef = (ele) => hotelRoomNameRef.current.push(ele)

    const getSelectedHotelDetails = async () => {
        try {
            let hotelInformation = await axios.get(`${utilities.deploy_url}/api/hotels/${hotel}`)
            hotelInformation = hotelInformation.data
            console.log(hotelInformation);
            sessionStorage.setItem('hotel_Id', hotelInformation._id)

            // set hotel destination
            setDestination(hotelInformation.city)

            // set hotel room name
            hotelRoomNameRef.current[0].innerHTML = hotelInformation.comfort.roomName
            hotelRoomNameRef.current[1].innerHTML = hotelInformation.deluxe.roomName
            hotelRoomNameRef.current[2].innerHTML = hotelInformation.luxury.roomName

            hotelRoomNameRef.current[3].innerHTML = hotelInformation.comfort.roomName
            hotelRoomNameRef.current[4].innerHTML = hotelInformation.deluxe.roomName
            hotelRoomNameRef.current[5].innerHTML = hotelInformation.luxury.roomName

            hotelName.current.innerHTML = `${hotelInformation.name}, ${hotelInformation.city}`
            // for (let i = 0; i < hotelImagesRef.current.length; i++) {
            //     hotelImagesRef.current[i].src = `http://localhost:8800/${hotelInformation.photos[i % 6]}`
            // }

            let roomImages = [];
            // for (let i = 0; i < hotelInformation.comfort.roomImages.length; i++) {
            //     roomImages.push(hotelInformation.comfort.roomImages[i]);
            // }

            // for (let i = 0; i < hotelInformation.deluxe.roomImages.length; i++) {
            //     roomImages.push(hotelInformation.deluxe.roomImages[i]);
            // }

            // for (let i = 0; i < hotelInformation.luxury.roomImages.length; i++) {
            //     roomImages.push(hotelInformation.luxury.roomImages[i]);
            // }

            let len = roomImages.length;

            // for (let i = 0; i < hotelRoomImagesRef.current.length; i++) {
            //     hotelRoomImagesRef.current[i].src = `http://localhost:8800/${roomImages[i % len]}`
            // }

            hotelDescription.current.innerHTML = hotelInformation.description
            show_hide.current.innerHTML = `<span>
            ${hotelInformation.comfort.roomDescription}
            </br>
            </br>
            ${hotelInformation.deluxe.roomDescription}
            </br>
            </br>
            ${hotelInformation.luxury.roomDescription}
            </span>`

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSelectedHotelDetails();
    }, [])

    const navigate = useNavigate();
    const finishStep = () => {
        roomDetails(hotelName.current.innerHTML, room)
    }

    return (
        <>
            <section className='flex items-center justify-center w-screen pt-32 pb-16 px-6 sm:px-8 lg:px-12'>
                <div className='flex items-center justify-center w-full max-w-7xl'>

                    <div className='flex flex-col items-center justify-center w-full'>
                        <div className='flex items-start justify-between gap-x-6 w-full mb-4'>
                            <span className='hidden flex-col gap-y-5 items-center justify-between w-80 xl:flex'>
                                <div className='flex flex-col h-auto w-full py-4 px-3' style={{ backgroundColor: "#0b244b" }}>
                                    <span className='flex items-center hover:cursor-pointer justify-center mb-2 border-2 rounded-sm m-2 px-2 '><DatePicker className={`${styles.datePicker} py-2 text-cyan-200`} selected={startDate} onChange={(date = Date) => setCheckIndate(date)} placeholderText="Check In" /><i className="fa-sharp fa-solid fa-calendar-days mx-1 pl-1 text-cyan-200"></i></span>

                                    <span className='flex items-center hover:cursor-pointer justify-center mb-2 border-2 rounded-sm m-2 px-2 lg:mx-2'><DatePicker className={`${styles.datePicker} py-2 text-cyan-200`} selected={endDate} placeholderText="Check Out" onChange={(date = Date) => setCheckOutdate(date)} /><i className="fa-sharp fa-solid fa-calendar-days mx-1 pl-1 text-cyan-200"></i></span>

                                    <span className="dropdown flex items-center justify-center m-2 border-2 py-2 rounded-sm  px-4 lg:mx-2">
                                        <span className="text-cyan-200"> {destination} </span>
                                    </span>

                                    <span className='flex items-center justify-center px-2 cursor-pointer rounded-sm py-2 text-cyan-200 bg-red-500 ease-linear duration-200 m-2 hover:-translate-y-1 sm:col-span-2' onClick={(ele) => applyChanges(ele)}><button className='py-1 px-3'>Apply Changes</button></span>

                                    <span className="dropdown flex items-center justify-center border-2 py-2 rounded-sm m-2 px-4 lg:mx-2">
                                        <span className="dropdown-toggle text-cyan-200" href="/" role="button" id="dropdownMenuLink" data-mdb-toggle="dropdown"
                                            aria-expanded="false"> {room} </span>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <li onClick={(e) => setRoom(e.target.textContent)}><a className="dropdown-item" ref={(ele) => pushHotelRoomNameRef(ele)}>Comfort Room</a></li>
                                            <li onClick={(e) => setRoom(e.target.textContent)}><a className="dropdown-item" ref={(ele) => pushHotelRoomNameRef(ele)}>Double Room</a></li>
                                            <li onClick={(e) => setRoom(e.target.textContent)}><a className="dropdown-item" ref={(ele) => pushHotelRoomNameRef(ele)}>Single Room</a></li>
                                            {/* <li onClick={(e)=> setRoom(e.target.textContent)}><a className="dropdown-item">1</a></li> */}
                                        </ul>
                                    </span>

                                </div>

                                {/* Google or Location Map */}
                                <span className='h-72 w-full flex items-center justify-center bg-black'>

                                </span>
                            </span>

                            <span className='flex flex-col items-center justify-center w-full'>
                                <h1 className='w-full text-lg font-semibold text-left text-black mb-3 sm:text-2xl md:text-3xl' ref={hotelName}>Hotel Name, City Name</h1>
                                <span className='grid grid-cols-4 mb-1.5 gap-2.5 grid-rows-1 w-full sm:grid-rows-2 sm:mb-2.5'>
                                    <span className='w-full h-full hidden items-center justify-center sm:flex'>
                                        <img src={image1} alt="loading error" style={{ height: '100%' }} ref={(ele) => pushHotelImagesRef(ele)} />
                                    </span>
                                    <span className='w-full h-full flex items-center justify-center col-span-4 row-span-2 sm:col-span-3'>
                                        <img src={image1} alt="loading error" ref={(ele) => pushHotelImagesRef(ele)} />
                                    </span>
                                    <span className='w-full h-full hidden items-center justify-center sm:flex' >
                                        <img src={image1} alt="loading error" style={{ height: '100%' }} ref={(ele) => pushHotelImagesRef(ele)} />
                                    </span>
                                </span>
                                <span className='grid gap-1.5 w-full grid-cols-3 sm:grid-cols-4 sm:gap-2.5'>
                                    <span className='w-full h-full hidden items-center justify-center sm:flex'>
                                        <img src={image1} alt="loading error" ref={(ele) => pushHotelImagesRef(ele)} />
                                    </span>
                                    <span className='w-full h-full flex items-center justify-center '>
                                        <img src={image1} alt="loading error" ref={(ele) => pushHotelImagesRef(ele)} />
                                    </span>
                                    <span className='w-full h-full flex items-center justify-center '>
                                        <img src={image1} alt="loading error" ref={(ele) => pushHotelImagesRef(ele)} />
                                    </span>
                                    <span className='w-full cursor-pointer h-full flex items-center justify-center relative ' onClick={() => hideShow('show')}>
                                        <img src={image1} alt="loading error" ref={(ele) => pushHotelImagesRef(ele)} />
                                        <span className='absolute h-full w-full flex items-center justify-center text-md font-semibold text-cyan-200 sm:text-xl md:text-2xl' style={{ backgroundColor: '#00000094' }}>
                                            +40 photos
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </div>

                        <div className='flex items-center flex-col justify-center w-full xl:items-start xl:flex-row'>
                            <span className='flex flex-col items-center justify-between w-full'>
                                <h1 className='w-full text-left text-xl text-black md:text-2xl'>Description</h1>
                                <span className='text-justify w-full mb-3.5 text-xs font-normal sm:text-sm'>
                                    <p ref={hotelDescription}>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos facilis illum similique commodi deleniti, culpa ratione eaque iste dolorum nisi consequuntur neque error nemo ipsam tempora explicabo? Assumenda deserunt consequatur excepturi iste, cum temporibus accusamus qui sunt harum adipisci eligendi a voluptatum. Nemo, est! Odit similique placeat fuga, sit libero ea fugit debitis soluta exercitationem reprehenderit est ex. Quasi, sed fugit! Facere amet minima laudantium ut ipsum porro vel dicta, ea voluptates itaque ab eos ullam omnis soluta doloribus quae rerum necessitatibus dolorem id! Reprehenderit debitis quos velit eligendi libero architecto necessitatibus quasi quia esse obcaecati recusandae dicta autem excepturi consequuntur fugit, asperiores, non quisquam error adipisci! Mollitia ut quisquam dicta expedita, odio autem quasi, et culpa, adipisci ea ab libero impedit eum. Delectus quae, quis illo iure expedita fuga tempora illum natus porro praesentium ipsam aut eligendi itaque! Nemo sunt optio molestiae quaerat similique qui! Placeat pariatur obcaecati hic.
                                    </p>
                                    <br />
                                    <p className='hidden' ref={show_hide}>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab minus odit provident eaque fugiat quaerat, nisi illo non voluptatibus nemo ipsam corrupti, quibusdam fuga dolorem dignissimos distinctio nobis voluptatem ratione beatae quis architecto saepe sequi officia voluptates? Dignissimos perspiciatis pariatur aliquid delectus! Atque sint delectus sequi corporis amet, eveniet nostrum neque exercitationem odit, voluptates cum, expedita et modi velit corrupti minima ratione odio quaerat? Deleniti omnis dolorum laboriosam? Iure consequuntur aperiam, eos, quam consequatur eum nostrum, doloremque eaque cupiditate est debitis? Sunt ea et temporibus earum itaque, excepturi quibusdam eos iure consequuntur libero. Similique beatae quia, aut sit exercitationem nulla eius rem ullam molestiae illo ipsam provident expedita laboriosam voluptatibus cumque consequuntur quidem eaque! Odio cumque distinctio dolorum, quos officia nesciunt earum architecto sit aspernatur tempore magni sapiente veritatis repellendus, cum voluptatibus molestias alias consectetur voluptates blanditiis optio facere. Assumenda ratione dolorem adipisci a eum veritatis magnam vero magni tenetur.
                                    </p>
                                </span>
                                <span className='flex cursor-pointer items-center justify-center w-full py-2.5 rounded-md text-blue-500' style={{ border: '2px solid #1c65d6f0' }} onClick={() => more_less()} ref={show_more_btn}>Show More</span>
                            </span>

                            <span className='flex w-full flex-col max-w-4xl items-center justify-center sm:flex-row xl:w-3/6 xl:flex-col'>
                                <div className='flex text-justify items-center justify-center py-6 w-full sm:p-6'>
                                    <span className='flex items-start justify-center gap-2'>
                                        <i className="fa-sharp fa-solid fa-quote-left"></i>
                                        <p className='text-xs sm:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, veritatis officiis! Voluptate temporibus, maxime dolorem voluptates delectus blanditiis repudiandae fugiat iste! Impedit, laborum quas dolorem optio iure ipsam quasi quo? <br />
                                            <i className='text-sm text-blue-500'>by Jhonson from singapore</i></p>
                                    </span>
                                </div>

                                <div className='flex items-center text-justify justify-center py-6 w-full sm:p-6'>
                                    <span className='flex items-start justify-center gap-2'>
                                        <i className="fa-sharp fa-solid fa-quote-left"></i>
                                        <span>
                                            <h3 className='text-2xl font-bold mb-2.5'>Need Assitance ?</h3>
                                            <p className='text-xs mb-3 sm:text-sm md:text-sm lg:text-sm xl:test-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, veritatis officiis! Voluptate temporibus, maxime dolorem voluptates delectus blanditiis repudiandae fugiat iste! Impedit, laborum quas dolorem optio iure ipsam quasi quo? </p>
                                            <i className='text-3xl text-blue-500'>1-866-599-6674</i>
                                        </span>
                                    </span>
                                </div>
                            </span>
                        </div>

                        <div className={`${styles.ModifiedScrollbar} flex flex-col items-start justify-center py-12 w-full overflow-x-scroll`}>
                            <span className='flex items-center justify-start w-auto' style={{ borderBottom: '2px solid #ef4444' }}>
                                <span className='flex items-center justify-start w-96 py-3 font-bold text-xl text-cyan-200 px-3' style={{ backgroundColor: '#0b244b', borderRight: '2px solid #ef4444' }}>
                                    Room type
                                </span>
                                <span className='flex items-center justify-center w-40 py-3 font-bold text-xl text-cyan-200 px-3' style={{ backgroundColor: '#0b244b', borderRight: '2px solid #ef4444' }}>
                                    Sleeps
                                </span>
                                <span className='flex items-center justify-center w-64 py-3 font-bold text-xl text-cyan-200 px-3' style={{ backgroundColor: '#0b244b', borderRight: '2px solid #ef4444' }}>
                                    Price for 2 nights
                                </span>
                                <span className='flex items-center justify-center w-72 py-3 font-bold text-xl text-cyan-200 px-3' style={{ backgroundColor: '#0b244b', borderRight: '2px solid #ef4444' }}>
                                    Your choices
                                </span>
                                <span className='flex items-center justify-end w-40 py-3 font-bold text-xl text-cyan-200 px-3' style={{ backgroundColor: '#0b244b' }}>
                                    Select rooms
                                </span>
                            </span>

                            {/* Heritage Suite  */}
                            <span id='comfort_room' className='flex items-start justify-start w-auto' style={{ borderBottom: '4px solid #ef4444' }}>
                                <span className='flex gap-y-5 flex-col items-start justify-center w-96 py-3 font-bold text-xl px-3' style={{ borderRight: '2px solid #ef4444' }}>
                                    <h1 className='text-lg font-semibold text-blue-500 underline' ref={(ele) => pushHotelRoomNameRef(ele)}>Heritage Suite</h1>
                                    <span className='flex items-center justify-start w-full gap-x-2 text-sm font-light'>
                                        <p>1 extra large double bed</p>
                                        <span className="material-symbols-outlined text-md">
                                            king_bed
                                        </span>
                                    </span>
                                    <span className='text-justify w-full text-sm font-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quidem neque modi dicta iusto dolores.
                                    </span>
                                    <span className='flex items-center gap-2.5 justify-start flex-wrap w-full'>
                                        <span className='flex items-center justify-center gap-x-2 px-3 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                            <span className=" text-md material-symbols-outlined">
                                                psychiatry
                                            </span>
                                            <p className='text-sm font-light'>Private suite</p>
                                        </span>

                                        <span className='flex items-center justify-center gap-x-2 px-3 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                            <span className=" text-md material-symbols-outlined">
                                                psychiatry
                                            </span>
                                            <p className='text-sm font-light'>Private suite</p>
                                        </span>

                                        <span className='flex items-center justify-center gap-x-2 px-3 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                            <span className=" text-md material-symbols-outlined">
                                                psychiatry
                                            </span>
                                            <p className='text-sm font-light'>Private suite</p>
                                        </span>

                                        <span className='flex items-center justify-center gap-x-2 px-3 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                            <span className=" text-md material-symbols-outlined">
                                                psychiatry
                                            </span>
                                            <p className='text-sm font-light'>Private suite</p>
                                        </span>

                                        <span className='flex items-center justify-center gap-x-2 px-3 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                            <span className=" text-md material-symbols-outlined">
                                                psychiatry
                                            </span>
                                            <p className='text-sm font-light'>Private suite</p>
                                        </span>

                                        <span className='flex items-center justify-center gap-x-2 px-3 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                            <span className=" text-md material-symbols-outlined">
                                                psychiatry
                                            </span>
                                            <p className='text-sm font-light'>Private suite</p>
                                        </span>

                                        <span className='flex items-center justify-center gap-x-2 px-3 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                            <span className=" text-md material-symbols-outlined">
                                                psychiatry
                                            </span>
                                            <p className='text-sm font-light'>Private suite</p>
                                        </span>

                                        <span className='flex items-center justify-center gap-x-2 px-3 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                            <span className=" text-md material-symbols-outlined">
                                                psychiatry
                                            </span>
                                            <p className='text-sm font-light'>Private suite</p>
                                        </span>

                                        <span className='flex items-center justify-center gap-x-2 px-3 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                            <span className=" text-md material-symbols-outlined">
                                                psychiatry
                                            </span>
                                            <p className='text-sm font-light'>Private suite</p>
                                        </span>

                                        <span className='flex items-center justify-center gap-x-2 px-3 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                            <span className=" text-md material-symbols-outlined">
                                                psychiatry
                                            </span>
                                            <p className='text-sm font-light'>Private suite</p>
                                        </span>
                                    </span>

                                    <span className='flex items-center gap-x-4 gap-y-1.5 justify-start w-full flex-wrap'>
                                        {HeritageRoomFacilities}
                                    </span>
                                </span>
                                <span className='w-auto flex flex-col items-start justify-center'>
                                    <span className='w-auto flex items-start justify-center' style={{ borderBottom: '2px solid #ef4444' }}>
                                        <span className='flex flex-col gap-y-5 items-center justify-center w-40 py-3 font-bold text-xl px-3'>
                                            <span className='flex text-4xl items-center justify-center'>
                                                <i className="fa-sharp fa-solid fa-person"></i>
                                            </span>
                                        </span>
                                        <span className='flex flex-col items-start gap-y-2 justify-start w-64 py-3 font-bold px-3' style={{ borderRight: '2px solid #ef4444', borderLeft: '2px solid #ef4444' }}>
                                            <span className='text-red-700 text-sm'>₹ 1,55,250</span>
                                            <span className='text-black text-2xl'>₹ 1,55,250</span>
                                            <span className='text-xs font-light text-gray-600'>+₹ 1,55,250 taxes and charges</span>
                                        </span>
                                        <span className='flex flex-col items-start justify-start w-72 pt-3 pb-10 font-bold  px-3' style={{ borderRight: '2px solid #ef4444' }}>
                                            <span className='flex gap-x-2 items-center justify-center'>
                                                <i className="text-3xl text-black fa-solid fa-mug-hot"></i>
                                                <span><b className='text-sm text-black font-bold'>very good</b> <i className='text-xs font-light'>breakfast ₹150</i></span>
                                            </span>
                                            <span className='flex items-center gap-x-2 justify-center'><i className="fa-solid text-black fa-circle" style={{ fontSize: '6.5px' }}></i><p className='text-md text-black font-semibold'>Non-refundable</p></span>
                                        </span>
                                        <span className='flex items-center justify-end w-40 py-3 font-bold px-3'>
                                            <select onClick={(ele) => fillingDetails(1, ele.currentTarget.value)} defaultValue={'0'} className='outline rounded-sm py-1 px-3' name="" id="">
                                                <option value="1">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                            </select>
                                        </span>
                                    </span>

                                    <span className='w-auto flex items-start justify-center' style={{ borderBottom: '2px solid #ef4444' }}>
                                        <span className='flex flex-col gap-y-5 items-center justify-center w-40 py-3 font-bold text-xl px-3'>
                                            <span className='flex text-4xl gap-x-2 items-center justify-center'>
                                                <i className="fa-sharp fa-solid fa-person"></i>
                                                <i className="fa-sharp fa-solid fa-person"></i>
                                            </span>
                                        </span>
                                        <span className='flex flex-col items-start gap-y-2 justify-start w-64 py-3 font-bold px-3' style={{ borderRight: '2px solid #ef4444', borderLeft: '2px solid #ef4444' }}>
                                            <span className='text-red-700 text-sm'>₹ 1,55,250</span>
                                            <span className='text-black text-2xl'>₹ 1,55,250</span>
                                            <span className='text-xs font-light text-gray-600'>+₹ 1,55,250 taxes and charges</span>
                                        </span>
                                        <span className='flex flex-col items-start justify-start w-72 pt-3 pb-10 font-bold  px-3' style={{ borderRight: '2px solid #ef4444' }}>
                                            <span className='flex gap-x-2 items-center justify-center'>
                                                <i className="text-3xl text-black fa-solid fa-mug-hot"></i>
                                                <span><b className='text-sm text-black font-bold'>very good</b> <i className='text-xs font-light'>breakfast ₹150</i></span>
                                            </span>
                                            <span className='flex items-center gap-x-2 justify-center'><i className="fa-solid text-black fa-circle" style={{ fontSize: '6.5px' }}></i><p className='text-md text-black font-semibold'>Non-refundable</p></span>
                                        </span>
                                        <span className='flex items-center justify-end w-40 py-3 font-bold px-3'>
                                            <select onClick={(ele) => fillingDetails(2, ele.currentTarget.value)} className='outline rounded-sm py-1 px-3' name="" id="">
                                                <option value="1">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                            </select>
                                        </span>
                                    </span>

                                    <span className='w-auto flex items-start justify-center' style={{ borderBottom: '2px solid #ef4444' }}>
                                        <span className='flex flex-col gap-y-5 items-center justify-center w-40 py-3 font-bold text-xl px-3'>
                                            <span className='flex text-4xl gap-x-2 items-center justify-center'>
                                                <i className="fa-sharp fa-solid fa-person"></i>
                                                <i className="fa-sharp fa-solid fa-person"></i>
                                                <i className="fa-sharp fa-solid fa-person"></i>
                                            </span>
                                        </span>
                                        <span className='flex flex-col items-start gap-y-2 justify-start w-64 py-3 font-bold px-3' style={{ borderRight: '2px solid #ef4444', borderLeft: '2px solid #ef4444' }}>
                                            <span className='text-red-700 text-sm'>₹ 1,55,250</span>
                                            <span className='text-black text-2xl'>₹ 1,55,250</span>
                                            <span className='text-xs font-light text-gray-600'>+₹ 1,55,250 taxes and charges</span>
                                        </span>
                                        <span className='flex flex-col items-start justify-start w-72 pt-3 pb-10 font-bold  px-3' style={{ borderRight: '2px solid #ef4444' }}>
                                            <span className='flex gap-x-2 items-center justify-center'>
                                                <i className="text-3xl text-black fa-solid fa-mug-hot"></i>
                                                <span><b className='text-sm text-black font-bold'>very good</b> <i className='text-xs font-light'>breakfast ₹150</i></span>
                                            </span>
                                            <span className='flex items-center gap-x-2 justify-center'><i className="fa-solid text-black fa-circle" style={{ fontSize: '6.5px' }}></i><p className='text-md text-black font-semibold'>Non-refundable</p></span>
                                        </span>
                                        <span className='flex items-center justify-end w-40 py-3 font-bold px-3'>
                                            <select onClick={(ele) => fillingDetails(3, ele.currentTarget.value)} className='outline rounded-sm py-1 px-3' name="" id="">
                                                <option value="1">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                            </select>
                                        </span>
                                    </span>
                                </span>
                            </span>
                            {/* Heritage Suite ends */}

                            {/* Deco Suite */}
                            <span id='deluxe_room' className='flex items-start justify-start w-auto' style={{ borderBottom: '4px solid #ef4444' }}>
                                <span className='flex gap-y-5 flex-col items-start justify-center w-96 py-3 font-bold text-xl px-3' style={{ borderRight: '2px solid #ef4444' }}>
                                    <h1 className='text-lg font-semibold text-blue-500 underline' ref={(ele) => pushHotelRoomNameRef(ele)}>Deco Suite</h1>
                                    <span className='flex items-center justify-start w-full gap-x-2 text-sm font-light'>
                                        <p>1 extra large double bed</p>
                                        <span className="material-symbols-outlined text-md">
                                            king_bed
                                        </span>
                                    </span>
                                    <span className='text-justify w-full text-sm font-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quidem neque modi dicta iusto dolores.
                                    </span>
                                    <span className='flex items-center gap-2.5 justify-start flex-wrap w-full'>
                                        <span className='flex items-center justify-center gap-x-2 px-3 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                            <span className=" text-md material-symbols-outlined">
                                                psychiatry
                                            </span>
                                            <p className='text-sm font-light'>Private suite</p>
                                        </span>

                                        <span className='flex items-center justify-center gap-x-2 px-3 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                            <span className=" text-md material-symbols-outlined">
                                                psychiatry
                                            </span>
                                            <p className='text-sm font-light'>Private suite</p>
                                        </span>

                                        <span className='flex items-center justify-center gap-x-2 px-3 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                            <span className=" text-md material-symbols-outlined">
                                                psychiatry
                                            </span>
                                            <p className='text-sm font-light'>Private suite</p>
                                        </span>

                                        <span className='flex items-center justify-center gap-x-2 px-3 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                            <span className=" text-md material-symbols-outlined">
                                                psychiatry
                                            </span>
                                            <p className='text-sm font-light'>Private suite</p>
                                        </span>

                                        <span className='flex items-center justify-center gap-x-2 px-3 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                            <span className=" text-md material-symbols-outlined">
                                                psychiatry
                                            </span>
                                            <p className='text-sm font-light'>Private suite</p>
                                        </span>

                                        <span className='flex items-center justify-center gap-x-2 px-3 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                            <span className=" text-md material-symbols-outlined">
                                                psychiatry
                                            </span>
                                            <p className='text-sm font-light'>Private suite</p>
                                        </span>

                                        <span className='flex items-center justify-center gap-x-2 px-3 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                            <span className=" text-md material-symbols-outlined">
                                                psychiatry
                                            </span>
                                            <p className='text-sm font-light'>Private suite</p>
                                        </span>

                                        <span className='flex items-center justify-center gap-x-2 px-3 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                            <span className=" text-md material-symbols-outlined">
                                                psychiatry
                                            </span>
                                            <p className='text-sm font-light'>Private suite</p>
                                        </span>

                                        <span className='flex items-center justify-center gap-x-2 px-3 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                            <span className=" text-md material-symbols-outlined">
                                                psychiatry
                                            </span>
                                            <p className='text-sm font-light'>Private suite</p>
                                        </span>

                                        <span className='flex items-center justify-center gap-x-2 px-3 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                            <span className=" text-md material-symbols-outlined">
                                                psychiatry
                                            </span>
                                            <p className='text-sm font-light'>Private suite</p>
                                        </span>
                                    </span>

                                    <span className='flex items-center gap-x-4 gap-y-1.5 justify-start w-full flex-wrap'>
                                        {HeritageRoomFacilities}
                                    </span>
                                </span>
                                <span className='w-auto flex flex-col items-start justify-center'>
                                    <span className='w-auto flex items-start justify-center' style={{ borderBottom: '2px solid #ef4444' }}>
                                        <span className='flex flex-col gap-y-5 items-center justify-center w-40 py-3 font-bold text-xl px-3'>
                                            <span className='flex text-4xl items-center justify-center'>
                                                <i className="fa-sharp fa-solid fa-person"></i>
                                            </span>
                                        </span>
                                        <span className='flex flex-col items-start gap-y-2 justify-start w-64 py-3 font-bold px-3' style={{ borderRight: '2px solid #ef4444', borderLeft: '2px solid #ef4444' }}>
                                            <span className='text-red-700 text-sm'>₹ 1,55,250</span>
                                            <span className='text-black text-2xl'>₹ 1,55,250</span>
                                            <span className='text-xs font-light text-gray-600'>+₹ 1,55,250 taxes and charges</span>
                                        </span>
                                        <span className='flex flex-col items-start justify-start w-72 pt-3 pb-10 font-bold  px-3' style={{ borderRight: '2px solid #ef4444' }}>
                                            <span className='flex gap-x-2 items-center justify-center'>
                                                <i className="text-3xl text-black fa-solid fa-mug-hot"></i>
                                                <span><b className='text-sm text-black font-bold'>very good</b> <i className='text-xs font-light'>breakfast ₹150</i></span>
                                            </span>
                                            <span className='flex items-center gap-x-2 justify-center'><i className="fa-solid text-black fa-circle" style={{ fontSize: '6.5px' }}></i><p className='text-md text-black font-semibold'>Non-refundable</p></span>
                                        </span>
                                        <span className='flex items-center justify-end w-40 py-3 font-bold px-3'>
                                            <select onClick={(ele) => fillingDetails(1, ele.currentTarget.value)} className='outline rounded-sm py-1 px-3' name="" id="">
                                                <option value="1">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                            </select>
                                        </span>
                                    </span>

                                    <span className='w-auto flex items-start justify-center' style={{ borderBottom: '2px solid #ef4444' }}>
                                        <span className='flex flex-col gap-y-5 items-center justify-center w-40 py-3 font-bold text-xl px-3'>
                                            <span className='flex text-4xl gap-x-2 items-center justify-center'>
                                                <i className="fa-sharp fa-solid fa-person"></i>
                                                <i className="fa-sharp fa-solid fa-person"></i>
                                            </span>
                                        </span>
                                        <span className='flex flex-col items-start gap-y-2 justify-start w-64 py-3 font-bold px-3' style={{ borderRight: '2px solid #ef4444', borderLeft: '2px solid #ef4444' }}>
                                            <span className='text-red-700 text-sm'>₹ 1,55,250</span>
                                            <span className='text-black text-2xl'>₹ 1,55,250</span>
                                            <span className='text-xs font-light text-gray-600'>+₹ 1,55,250 taxes and charges</span>
                                        </span>
                                        <span className='flex flex-col items-start justify-start w-72 pt-3 pb-10 font-bold  px-3' style={{ borderRight: '2px solid #ef4444' }}>
                                            <span className='flex gap-x-2 items-center justify-center'>
                                                <i className="text-3xl text-black fa-solid fa-mug-hot"></i>
                                                <span><b className='text-sm text-black font-bold'>very good</b> <i className='text-xs font-light'>breakfast ₹150</i></span>
                                            </span>
                                            <span className='flex items-center gap-x-2 justify-center'><i className="fa-solid text-black fa-circle" style={{ fontSize: '6.5px' }}></i><p className='text-md text-black font-semibold'>Non-refundable</p></span>
                                        </span>
                                        <span className='flex items-center justify-end w-40 py-3 font-bold px-3'>
                                            <select onClick={(ele) => fillingDetails(2, ele.currentTarget.value)} className='outline rounded-sm py-1 px-3' name="" id="">
                                                <option value="1">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                            </select>
                                        </span>
                                    </span>

                                    <span className='w-auto flex items-start justify-center' style={{ borderBottom: '2px solid #ef4444' }}>
                                        <span className='flex flex-col gap-y-5 items-center justify-center w-40 py-3 font-bold text-xl px-3'>
                                            <span className='flex text-4xl gap-x-2 items-center justify-center'>
                                                <i className="fa-sharp fa-solid fa-person"></i>
                                                <i className="fa-sharp fa-solid fa-person"></i>
                                                <i className="fa-sharp fa-solid fa-person"></i>
                                            </span>
                                        </span>
                                        <span className='flex flex-col items-start gap-y-2 justify-start w-64 py-3 font-bold px-3' style={{ borderRight: '2px solid #ef4444', borderLeft: '2px solid #ef4444' }}>
                                            <span className='text-red-700 text-sm'>₹ 1,55,250</span>
                                            <span className='text-black text-2xl'>₹ 1,55,250</span>
                                            <span className='text-xs font-light text-gray-600'>+₹ 1,55,250 taxes and charges</span>
                                        </span>
                                        <span className='flex flex-col items-start justify-start w-72 pt-3 pb-10 font-bold  px-3' style={{ borderRight: '2px solid #ef4444' }}>
                                            <span className='flex gap-x-2 items-center justify-center'>
                                                <i className="text-3xl text-black fa-solid fa-mug-hot"></i>
                                                <span><b className='text-sm text-black font-bold'>very good</b> <i className='text-xs font-light'>breakfast ₹150</i></span>
                                            </span>
                                            <span className='flex items-center gap-x-2 justify-center'><i className="fa-solid text-black fa-circle" style={{ fontSize: '6.5px' }}></i><p className='text-md text-black font-semibold'>Non-refundable</p></span>
                                        </span>
                                        <span className='flex items-center justify-end w-40 py-3 font-bold px-3'>
                                            <select onClick={(ele) => fillingDetails(3, ele.currentTarget.value)} className='outline rounded-sm py-1 px-3' name="" id="">
                                                <option value="1">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                            </select>
                                        </span>
                                    </span>
                                </span>
                            </span>
                            {/* Deco site ends */}

                            {/* Luxury Room */}
                            <span id='luxury_room' className='flex items-start justify-start w-auto' style={{ borderBottom: '4px solid #ef4444' }}>
                                <span className='flex gap-y-5 flex-col items-start justify-center w-96 py-3 font-bold text-xl px-3' style={{ borderRight: '2px solid #ef4444' }}>
                                    <h1 className='text-lg font-semibold text-blue-500 underline' ref={(ele) => pushHotelRoomNameRef(ele)}>Luxury Room</h1>
                                    <span className='flex items-center justify-start w-full gap-x-2 text-sm font-light'>
                                        <p>1 extra large double bed</p>
                                        <span className="material-symbols-outlined text-md">
                                            king_bed
                                        </span>
                                    </span>
                                    <span className='text-justify w-full text-sm font-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quidem neque modi dicta iusto dolores.
                                    </span>
                                    <span className='flex items-center gap-2.5 justify-start flex-wrap w-full'>
                                        <span className='flex items-center justify-center gap-x-2 px-3 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                            <span className=" text-md material-symbols-outlined">
                                                psychiatry
                                            </span>
                                            <p className='text-sm font-light'>Private suite</p>
                                        </span>

                                        <span className='flex items-center justify-center gap-x-2 px-3 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                            <span className=" text-md material-symbols-outlined">
                                                psychiatry
                                            </span>
                                            <p className='text-sm font-light'>Private suite</p>
                                        </span>

                                        <span className='flex items-center justify-center gap-x-2 px-3 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                            <span className=" text-md material-symbols-outlined">
                                                psychiatry
                                            </span>
                                            <p className='text-sm font-light'>Private suite</p>
                                        </span>

                                        <span className='flex items-center justify-center gap-x-2 px-3 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                            <span className=" text-md material-symbols-outlined">
                                                psychiatry
                                            </span>
                                            <p className='text-sm font-light'>Private suite</p>
                                        </span>

                                        <span className='flex items-center justify-center gap-x-2 px-3 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                            <span className=" text-md material-symbols-outlined">
                                                psychiatry
                                            </span>
                                            <p className='text-sm font-light'>Private suite</p>
                                        </span>

                                        <span className='flex items-center justify-center gap-x-2 px-3 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                            <span className=" text-md material-symbols-outlined">
                                                psychiatry
                                            </span>
                                            <p className='text-sm font-light'>Private suite</p>
                                        </span>

                                        <span className='flex items-center justify-center gap-x-2 px-3 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                            <span className=" text-md material-symbols-outlined">
                                                psychiatry
                                            </span>
                                            <p className='text-sm font-light'>Private suite</p>
                                        </span>

                                        <span className='flex items-center justify-center gap-x-2 px-3 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                            <span className=" text-md material-symbols-outlined">
                                                psychiatry
                                            </span>
                                            <p className='text-sm font-light'>Private suite</p>
                                        </span>

                                        <span className='flex items-center justify-center gap-x-2 px-3 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                            <span className=" text-md material-symbols-outlined">
                                                psychiatry
                                            </span>
                                            <p className='text-sm font-light'>Private suite</p>
                                        </span>

                                        <span className='flex items-center justify-center gap-x-2 px-3 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                            <span className=" text-md material-symbols-outlined">
                                                psychiatry
                                            </span>
                                            <p className='text-sm font-light'>Private suite</p>
                                        </span>
                                    </span>

                                    <span className='flex items-center gap-x-4 gap-y-1.5 justify-start w-full flex-wrap'>
                                        {HeritageRoomFacilities}
                                    </span>
                                </span>
                                <span className='w-auto flex flex-col items-start justify-center'>
                                    <span className='w-auto flex items-start justify-center' style={{ borderBottom: '2px solid #ef4444' }}>
                                        <span className='flex flex-col gap-y-5 items-center justify-center w-40 py-3 font-bold text-xl px-3'>
                                            <span className='flex text-4xl items-center justify-center'>
                                                <i className="fa-sharp fa-solid fa-person"></i>
                                            </span>
                                        </span>
                                        <span className='flex flex-col items-start gap-y-2 justify-start w-64 py-3 font-bold px-3' style={{ borderRight: '2px solid #ef4444', borderLeft: '2px solid #ef4444' }}>
                                            <span className='text-red-700 text-sm'>₹ 1,55,250</span>
                                            <span className='text-black text-2xl'>₹ 1,55,250</span>
                                            <span className='text-xs font-light text-gray-600'>+₹ 1,55,250 taxes and charges</span>
                                        </span>
                                        <span className='flex flex-col items-start justify-start w-72 pt-3 pb-10 font-bold  px-3' style={{ borderRight: '2px solid #ef4444' }}>
                                            <span className='flex gap-x-2 items-center justify-center'>
                                                <i className="text-3xl text-black fa-solid fa-mug-hot"></i>
                                                <span><b className='text-sm text-black font-bold'>very good</b> <i className='text-xs font-light'>breakfast ₹150</i></span>
                                            </span>
                                            <span className='flex items-center gap-x-2 justify-center'><i className="fa-solid text-black fa-circle" style={{ fontSize: '6.5px' }}></i><p className='text-md text-black font-semibold'>Non-refundable</p></span>
                                        </span>
                                        <span className='flex items-center justify-end w-40 py-3 font-bold px-3'>
                                            <select onClick={(ele) => fillingDetails(1, ele.currentTarget.value)} className='outline rounded-sm py-1 px-3' name="" id="">
                                                <option value="1">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                            </select>
                                        </span>
                                    </span>

                                    <span className='w-auto flex items-start justify-center' style={{ borderBottom: '2px solid #ef4444' }}>
                                        <span className='flex flex-col gap-y-5 items-center justify-center w-40 py-3 font-bold text-xl px-3'>
                                            <span className='flex text-4xl gap-x-2 items-center justify-center'>
                                                <i className="fa-sharp fa-solid fa-person"></i>
                                                <i className="fa-sharp fa-solid fa-person"></i>
                                            </span>
                                        </span>
                                        <span className='flex flex-col items-start gap-y-2 justify-start w-64 py-3 font-bold px-3' style={{ borderRight: '2px solid #ef4444', borderLeft: '2px solid #ef4444' }}>
                                            <span className='text-red-700 text-sm'>₹ 1,55,250</span>
                                            <span className='text-black text-2xl'>₹ 1,55,250</span>
                                            <span className='text-xs font-light text-gray-600'>+₹ 1,55,250 taxes and charges</span>
                                        </span>
                                        <span className='flex flex-col items-start justify-start w-72 pt-3 pb-10 font-bold  px-3' style={{ borderRight: '2px solid #ef4444' }}>
                                            <span className='flex gap-x-2 items-center justify-center'>
                                                <i className="text-3xl text-black fa-solid fa-mug-hot"></i>
                                                <span><b className='text-sm text-black font-bold'>very good</b> <i className='text-xs font-light'>breakfast ₹150</i></span>
                                            </span>
                                            <span className='flex items-center gap-x-2 justify-center'><i className="fa-solid text-black fa-circle" style={{ fontSize: '6.5px' }}></i><p className='text-md text-black font-semibold'>Non-refundable</p></span>
                                        </span>
                                        <span className='flex items-center justify-end w-40 py-3 font-bold px-3'>
                                            <select onClick={(ele) => fillingDetails(2, ele.currentTarget.value)} className='outline rounded-sm py-1 px-3' name="" id="">
                                                <option value="1">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                            </select>
                                        </span>
                                    </span>

                                    <span className='w-auto flex items-start justify-center' style={{ borderBottom: '2px solid #ef4444' }}>
                                        <span className='flex flex-col gap-y-5 items-center justify-center w-40 py-3 font-bold text-xl px-3'>
                                            <span className='flex text-4xl gap-x-2 items-center justify-center'>
                                                <i className="fa-sharp fa-solid fa-person"></i>
                                                <i className="fa-sharp fa-solid fa-person"></i>
                                                <i className="fa-sharp fa-solid fa-person"></i>
                                            </span>
                                        </span>
                                        <span className='flex flex-col items-start gap-y-2 justify-start w-64 py-3 font-bold px-3' style={{ borderRight: '2px solid #ef4444', borderLeft: '2px solid #ef4444' }}>
                                            <span className='text-red-700 text-sm'>₹ 1,55,250</span>
                                            <span className='text-black text-2xl'>₹ 1,55,250</span>
                                            <span className='text-xs font-light text-gray-600'>+₹ 1,55,250 taxes and charges</span>
                                        </span>
                                        <span className='flex flex-col items-start justify-start w-72 pt-3 pb-10 font-bold  px-3' style={{ borderRight: '2px solid #ef4444' }}>
                                            <span className='flex gap-x-2 items-center justify-center'>
                                                <i className="text-3xl text-black fa-solid fa-mug-hot"></i>
                                                <span><b className='text-sm text-black font-bold'>very good</b> <i className='text-xs font-light'>breakfast ₹150</i></span>
                                            </span>
                                            <span className='flex items-center gap-x-2 justify-center'><i className="fa-solid text-black fa-circle" style={{ fontSize: '6.5px' }}></i><p className='text-md text-black font-semibold'>Non-refundable</p></span>
                                        </span>
                                        <span className='flex items-center justify-end w-40 py-3 font-bold px-3'>
                                            <select onClick={(ele) => fillingDetails(3, ele.currentTarget.value)} className='outline rounded-sm py-1 px-3' name="" id="">
                                                <option value="1">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                            </select>
                                        </span>
                                    </span>
                                </span>
                            </span>
                            {/* Luxury Room ends */}
                        </div>

                        <div className='w-full my-3 flex items-center justify-start'>
                            <button className='text-xl font-semibold py-2 px-4 rounded-sm text-cyan-200' style={{ backgroundColor: 'rgb(11 36 75)' }} onClick={() => { finishStep() }}>Next Step</button>
                        </div>

                        <div className='fixed w-screen top-0 z-50 hidden items-start overflow-y-scroll h-screen pt-32 pb-32 justify-center px-2 md:px-8 lg:px-12' style={{ backgroundColor: '#00000061' }} ref={allImages}>
                            <span className='relative grid grid-cols-2 gap-2 pt-12 pb-2 rounded-sm w-full max-w-7xl h-auto px-2 sm:grid-cols-3 md:grid-cols-4 md:px-8 md:pb-8 md:rounded-md lg:pb-12 lg:px-12 xl:px-12' style={{ backgroundColor: 'white', border: '4px solid #0b244b' }}>
                                {hotelImages}

                                <span className=' cursor-pointer absolute top-2 right-3' onClick={() => hideShow('hide')}>
                                    <i className="fa-sharp text-2xl text-red-500 fa-solid fa-xmark"></i>
                                </span>
                            </span>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default RoomSelection