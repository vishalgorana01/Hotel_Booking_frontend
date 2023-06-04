import React, { useEffect, useState, useRef } from 'react'
import styles from '../../Assets/CSS/Home.module.css'
import QRCode from 'react-qr-code';
import axios from 'axios';

import hotelImg from '../../Assets/Images/hotel1.jpg'
import utilities from '../../Assets/Utility/utility';

import confirmImage from '../../Assets/Images/umbrella-chair.jpg'

function BookingSatus() {
    const Data = [1, 2, 3, 4, 5];

    const [inCompleteBookings, setIncompleteBookings] = useState(
        <div>loading..</div>
    )

    const [PendingBookings, setPendingBookings] = useState(Data.map((ele, index) => {
        return (
            <span key={index} className={`${styles.HideScrollbar} flex items-start justify-start xl:justify-center w-screen  overflow-x-scroll`} style={{ backgroundColor: `${index % 2 == 0 ? 'rgb(0 0 0 / 5%)' : 'white'}` }}>
                <span className={`flex px-8 py-3.5 items-center justify-between w-full max-w-7xl`}>
                    <span className='flex items-start gap-x-1 justify-center'>
                        <h1 className='text-md text-black'>{index + 1}.</h1>
                        <span className='flex cursor-pointer flex-col items-start justify-center w-full'>
                            <h1 className='text-md font-medium text-blue-600 underline underline-offset-2'>Hotel Name</h1>
                            <h3 className='text-xs font-medium text-blue-800'>Room Name</h3>
                        </span>
                    </span>
                    <span className='hidden items-center text-green-600 justify-center gap-x-10 w-80 md:flex'>
                        <span className='flex flex-col gap-y-1.5 items-center justify-center w-1/2'>
                            <h4 className='text-sm font-normal text-end w-full'>check in</h4>
                            <h4 className='text-md font-semibold text-end w-full'>Fri 12 Apr 2023</h4>
                            <h4 className='text-sm font-normal text-end w-full'>from 12:00 am</h4>
                        </span>
                        <span className='flex flex-col gap-y-1.5 items-center justify-center w-1/2'>
                            <h4 className='text-sm font-normal text-left w-full'>check out</h4>
                            <h4 className='text-md font-semibold text-left w-full'>Tue 14 Apr 2023</h4>
                            <h4 className='text-sm font-normal text-left w-full'>to 12:00 pm</h4>
                        </span>
                    </span>
                    <span className='flex flex-col items-end justify-center text-left'>
                        {/* <h1 className='text-2xl text-left font-semibold'>Status</h1> */}
                        <h3 className='text-xs text-red-700 text-center font-medium'>Payment <br />pending</h3>
                    </span>
                </span>
            </span>
        )
    })
    );

    const [ConfirmedBookings, setConfirmedBookings] = useState(Data.map((ele, index) => {
        return (
            <span key={index} className={`${styles.HideScrollbar} flex items-start justify-start xl:justify-center w-screen  overflow-x-scroll`} style={{ backgroundColor: `${index % 2 == 0 ? 'rgb(0 0 0 / 5%)' : 'white'}` }}>
                <span className={`flex px-8 py-3.5 items-center justify-between w-full max-w-7xl`}>
                    <span className='flex items-start gap-x-1 justify-center'>
                        <h1 className='text-md text-black'>{index + 1}.</h1>
                        <span className='flex cursor-pointer flex-col items-start justify-center w-full'>
                            <h1 className='text-md font-medium text-blue-600 underline underline-offset-2'>Hotel Name</h1>
                            <h3 className='text-xs font-medium text-blue-800'>Room Name</h3>
                        </span>
                    </span>
                    <span className='hidden items-center text-green-600 justify-center gap-x-10 w-80 md:flex'>
                        <span className='flex flex-col gap-y-1.5 items-center justify-center w-1/2'>
                            <h4 className='text-sm font-normal text-end w-full'>check in</h4>
                            <h4 className='text-md font-semibold text-end w-full'>Fri 12 Apr 2023</h4>
                            <h4 className='text-sm font-normal text-end w-full'>from 12:00 am</h4>
                        </span>
                        <span className='flex flex-col gap-y-1.5 items-center justify-center w-1/2'>
                            <h4 className='text-sm font-normal text-left w-full'>check out</h4>
                            <h4 className='text-md font-semibold text-left w-full'>Tue 14 Apr 2023</h4>
                            <h4 className='text-sm font-normal text-left w-full'>to 12:00 pm</h4>
                        </span>
                    </span>
                    <span className='flex gap-x-2.5 items-end justify-center text-left'>
                        <i className="fa-solid text-green-700 fa-square-check"></i>
                        <h3 className='text-sm text-green-500 text-center font-medium'>Confirmed</h3>
                    </span>
                </span>
            </span>
        )
    })
    )

    const [active, setActive] = useState({
        incomplete: true,
        pending: false,
        confirm: false,
    })

    let check = true;
    const confirmModelRef = useRef();

    const hideShowConfirmModel = async (given_id) => {
        console.log(given_id)
        if (check && given_id != undefined) {
            await axios.get(`${utilities.deploy_url}/api/requests/receivedOne/${given_id}`)
                .then((resp) => {
                    console.log(resp)
                    confirmModelRef.current.style.display = 'flex';
                    check = false;
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        else {
            confirmModelRef.current.style.display = 'none';
            check = true;
        }
    }


    const [data, setData] = useState([1, 2, 3, 4, 5])

    const getAllBookings = async () => {
        var userName = await axios.get(`${utilities.deploy_url}/api/users/${sessionStorage.getItem('userId')}`)
        userName = userName.data.userName;
        console.log(userName)

        try {
            await axios.get(`${utilities.deploy_url}/api/requests/userRequests/${userName}`)
                .then((resp) => {
                    console.log(resp.data)

                    let i = 1;
                    let j = 1;
                    let k = 1;
                    // For Incomplete Bookings
                    setIncompleteBookings(resp.data.reverse().map((ele, index) => {
                        if (ele.status == "incomplete") {
                            const startDate = new Date(ele.startDate);
                            const endDate = new Date(ele.endDate);
                            const Days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun']
                            const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

                            return (
                                <span key={index} className={`${styles.HideScrollbar} flex items-start justify-start xl:justify-center w-screen  overflow-x-scroll`} style={{ backgroundColor: `${index % 2 == 0 ? 'rgb(0 0 0 / 5%)' : 'white'}` }}>
                                    <span className={`flex px-8 py-3.5 items-center justify-between w-full max-w-7xl`}>
                                        <span className='flex items-start gap-x-1 justify-center'>
                                            <h1 className='text-md text-black'>{i++}.</h1>
                                            <span className='flex cursor-pointer flex-col items-start justify-center w-full'>
                                                <h1 className='text-md font-medium text-blue-600 underline underline-offset-2'>{ele.hotelName}</h1>
                                                <h3 className='text-xs font-medium text-blue-800'>{ele.roomName}</h3>
                                            </span>
                                        </span>
                                        <span className='hidden items-center text-green-600 justify-center gap-x-10 w-80 md:flex'>
                                            <span className='flex flex-col gap-y-1.5 items-center justify-center w-1/2'>
                                                <h4 className='text-sm font-normal text-end w-full'>check in</h4>
                                                <h4 className='text-md font-semibold text-end w-full'>{`${Days[startDate.getDay()]} ${startDate.getDate()} ${Months[startDate.getMonth()]} ${startDate.getFullYear()}`}</h4>
                                                <h4 className='text-sm font-normal text-end w-full'>from 12:00 am</h4>
                                            </span>
                                            <span className='flex flex-col gap-y-1.5 items-center justify-center w-1/2'>
                                                <h4 className='text-sm font-normal text-left w-full'>check out</h4>
                                                <h4 className='text-md font-semibold text-left w-full'>{`${Days[endDate.getDay()]} ${endDate.getDate()} ${Months[endDate.getMonth()]} ${endDate.getFullYear()}`}</h4>
                                                <h4 className='text-sm font-normal text-left w-full'>to 12:00 pm</h4>
                                            </span>
                                        </span>
                                        <span className='flex flex-col items-end justify-center text-left'>
                                            {/* <h1 className='text-2xl text-left font-semibold'>Status</h1> */}
                                            <h3 className='text-xs text-red-700 text-center font-medium'>Incomplete <br />process</h3>
                                        </span>
                                    </span>
                                </span>
                            )
                        }
                    }))

                    // For Pending Bookings
                    setPendingBookings(resp.data.reverse().map((ele, index) => {
                        if (ele.status == 'payment pending') {
                            const startDate = new Date(ele.startDate);
                            const endDate = new Date(ele.endDate);
                            const Days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun']
                            const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

                            return (
                                <span key={index} className={`${styles.HideScrollbar} flex items-start justify-start xl:justify-center w-screen  overflow-x-scroll`} style={{ backgroundColor: `${index % 2 == 0 ? 'rgb(0 0 0 / 5%)' : 'white'}` }}>
                                    <span className={`flex px-8 py-3.5 items-center justify-between w-full max-w-7xl`}>
                                        <span className='flex items-start gap-x-1 justify-center'>
                                            <h1 className='text-md text-black'>{j++}.</h1>
                                            <span className='flex cursor-pointer flex-col items-start justify-center w-full'>
                                                <h1 className='text-md font-medium text-blue-600 underline underline-offset-2'>{ele.hotelName}</h1>
                                                <h3 className='text-xs font-medium text-blue-800'>{ele.roomName}</h3>
                                            </span>
                                        </span>
                                        <span className='hidden items-center text-green-600 justify-center gap-x-10 w-80 md:flex'>
                                            <span className='flex flex-col gap-y-1.5 items-center justify-center w-1/2'>
                                                <h4 className='text-sm font-normal text-end w-full'>check in</h4>
                                                <h4 className='text-md font-semibold text-end w-full'>{`${Days[startDate.getDay()]} ${startDate.getDate()} ${Months[startDate.getMonth()]} ${startDate.getFullYear()}`}</h4>
                                                <h4 className='text-sm font-normal text-end w-full'>from 12:00 am</h4>
                                            </span>
                                            <span className='flex flex-col gap-y-1.5 items-center justify-center w-1/2'>
                                                <h4 className='text-sm font-normal text-left w-full'>check out</h4>
                                                <h4 className='text-md font-semibold text-left w-full'>{`${Days[endDate.getDay()]} ${endDate.getDate()} ${Months[endDate.getMonth()]} ${endDate.getFullYear()}`}</h4>
                                                <h4 className='text-sm font-normal text-left w-full'>to 12:00 pm</h4>
                                            </span>
                                        </span>
                                        <span className='flex flex-col items-end justify-center text-left'>
                                            {/* <h1 className='text-2xl text-left font-semibold'>Status</h1> */}
                                            <h3 className='text-xs text-red-700 text-center font-medium'>Payment <br />pending</h3>
                                        </span>
                                    </span>
                                </span>
                            )
                        }
                    }))


                    // for Confirmed Bookings
                    setConfirmedBookings(resp.data.reverse().map((ele, index) => {
                        if (ele.status == 'confirmed') {
                            const startDate = new Date(ele.startDate);
                            const endDate = new Date(ele.endDate);
                            const Days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun']
                            const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

                            return (
                                <span key={index} className={`${styles.HideScrollbar} flex items-start justify-start xl:justify-center w-screen  overflow-x-scroll`} style={{ backgroundColor: `${index % 2 == 0 ? 'rgb(0 0 0 / 5%)' : 'white'}` }}>
                                    <span className={`flex px-8 py-3.5 items-center justify-between w-full max-w-7xl`}>
                                        <span className='flex items-start gap-x-1 justify-center'>
                                            <h1 className='text-md text-black'>{k++}.</h1>
                                            <span className='flex cursor-pointer flex-col items-start justify-center w-full' onClick={() => hideShowConfirmModel(ele._id)}>
                                                <h1 className='text-md font-medium text-blue-600 underline underline-offset-2'>{ele.hotelName}</h1>
                                                <h3 className='text-xs font-medium text-blue-800'>{ele.roomName}</h3>
                                            </span>
                                        </span>
                                        <span className='hidden items-center text-green-600 justify-center gap-x-10 w-80 md:flex'>
                                            <span className='flex flex-col gap-y-1.5 items-center justify-center w-1/2'>
                                                <h4 className='text-sm font-normal text-end w-full'>check in</h4>
                                                <h4 className='text-md font-semibold text-end w-full'>{`${Days[startDate.getDay()]} ${startDate.getDate()} ${Months[startDate.getMonth()]} ${startDate.getFullYear()}`}</h4>
                                                <h4 className='text-sm font-normal text-end w-full'>from 12:00 am</h4>
                                            </span>
                                            <span className='flex flex-col gap-y-1.5 items-center justify-center w-1/2'>
                                                <h4 className='text-sm font-normal text-left w-full'>check out</h4>
                                                <h4 className='text-md font-semibold text-left w-full'>{`${Days[endDate.getDay()]} ${endDate.getDate()} ${Months[endDate.getMonth()]} ${endDate.getFullYear()}`}</h4>
                                                <h4 className='text-sm font-normal text-left w-full'>to 12:00 pm</h4>
                                            </span>
                                        </span>
                                        <span className='flex gap-x-2.5 items-end justify-center text-left'>
                                            <i className="fa-solid text-green-700 fa-square-check"></i>
                                            <h3 className='text-sm text-green-500 text-center font-medium'>Confirmed</h3>
                                        </span>
                                    </span>
                                </span>
                            )
                        }
                    }))

                })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllBookings();
    }, [])


    const [typeOfBooking, setTypeOfBooking] = useState(inCompleteBookings);

    const selectTypeOfBooking = (key) => {
        if (key == 1) {
            active.incomplete = true
            active.pending = false
            active.confirm = false

            getAllBookings()
                .then(() => {
                    setTypeOfBooking(inCompleteBookings)
                })
        }
        else if (key == 2) {
            active.incomplete = false
            active.pending = true
            active.confirm = false

            getAllBookings()
                .then(() => {
                    setTypeOfBooking(PendingBookings)
                })
        }
        else if (key == 3) {
            active.incomplete = false
            active.pending = false
            active.confirm = true

            getAllBookings()
                .then(() => {
                    setTypeOfBooking(ConfirmedBookings)
                })
        }
    }

    return (
        <>
            <section className='flex items-center justify-center w-screen pt-16 md:pt-20 py-12'>
                <div className="flex flex-col relative items-center justify-center max-w-7xl w-full overflow-y-scroll">

                    <div className='flex items-center justify-center w-screen' style={{ borderBottom: '3px solid #ef4444', borderTop: '3px solid #ef4444', backgroundColor: '#0b244b' }}>
                        <span className={`grid grid-cols-3 w-full text-sm font-semibold text-cyan-200 max-w-7xl px-3 md:grid-cols-3`} >
                            <span className='flex cursor-pointer items-center justify-start text-left py-2.5' style={{ borderRight: '3px solid #ef4444', color: `${active.incomplete ? '#ef4444' : ''}` }} onClick={() => selectTypeOfBooking(1)}>InComplete Bookings</span>
                            <span className='cursor-pointer items-center justify-center text-center  py-2.5 md:flex' style={{ color: `${active.pending ? '#ef4444' : ''}` }} onClick={() => selectTypeOfBooking(2)}>Pending Bookings</span>
                            <span className='flex cursor-pointer items-center justify-end text-end py-2.5 ' style={{ borderLeft: '3px solid #ef4444', color: `${active.confirm ? '#ef4444' : ''}` }} onClick={() => selectTypeOfBooking(3)}>Confirmed Bookings</span>
                        </span>
                    </div>

                    <div className='flex flex-col items-center justify-center w-auto'>
                        {/* {inCompleteBookings} */}
                        {/* {PendingBookings} */}
                        {/* {ConfirmedBookings} */}
                        {typeOfBooking}
                    </div>

                    {/* Modal for inComplete Booking */}
                    <div className='hidden items-start justify-center fixed w-screen h-screen top-0 overflow-y-scroll py-12 z-20' style={{ backgroundColor: '#13161a7d' }} ref={confirmModelRef}>
                        <div className='flex flex-col items-center justify-center relative px-3 sm:px-6 py-9 h-auto rounded-sm w-full max-w-5xl' style={{ border: '2px solid red', backgroundColor: 'ghostwhite' }}>

                            <i className='fa-solid fa-xmark text-red-700 font-bold text-xl cursor-pointer absolute right-2 top-1' onClick={() => hideShowConfirmModel()}></i>

                            <span className='flex items-center gap-y-10 justify-start flex-col w-full'>
                                <span className='flex flex-col items-start gap-x-5 gap-y-3 py-6 px-6 justify-center w-full md:flex-row' style={{ backgroundColor: '#00800033' }}>
                                    <span className='flex items-start md:justify-center w-28'><i style={{ fontSize: '5.5rem' }} className="fa-sharp text-green-600 fa-solid fa-clipboard-check"></i></span>
                                    <span className='flex flex-col gap-y-2 items-start justify-center w-full'>
                                        <h1 className='text-xl font-semibold text-black'>Booking Confirmed</h1>
                                        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci inventore, voluptatum esse corrupti alias repudiandae modi, ad tenetur at veritatis placeat animi voluptates laborum.</p>
                                    </span>
                                </span>

                                <span className='flex flex-col w-full gap-x-6 gap-y-9 items-center justify-center md:flex-row'>
                                    <span className='flex flex-col gap-y-7 items-center justify-center w-full md:w-2/5'>
                                        <span className='flex items-center justify-start gap-y-5 gap-x-3 w-full'>
                                            <span className='w-40 h-40'>
                                                <QRCode
                                                    size={150}
                                                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                                    value={`vishal`}
                                                    viewBox={`0 0 256 256`}
                                                />
                                            </span>

                                            <span className='flex flex-col items-start gap-y-2 justify-center'>
                                                <h4 className='text-sm font-light text-black'>Booking Number</h4>
                                                <h2 className='text-black mb-3 font-semibold text-lg'>#00800033</h2>
                                                <button className='text-lg text-blue-500 rounded-md font-semibold py-2 px-3' style={{ border: '2px solid #3B82F6' }}>save the QR</button>
                                            </span>
                                        </span>

                                        <span className='flex flex-col items-start gap-y-2 justify-center w-full'>
                                            <label htmlFor="" className='text-lg text-black font-semibold'>Get an email remainder</label>
                                            <input type="email" className='text-black rounded-md outline-none px-2 py-1.5 w-full max-w-sm' style={{ border: '2px solid #00000085' }} />
                                        </span>

                                        <span className='flex items-center gap-y-2 gap-x-3 justify-start w-full'>
                                            <button className='text-lg text-blue-500 rounded-md font-semibold py-2 px-3' style={{ border: '2px solid #3B82F6' }}>set remainder</button>
                                            <button className='text-lg text-gray-500 rounded-md font-semibold py-2 px-3' style={{ border: '2px solid #00000085' }}>Set Calendar Event</button>
                                        </span>
                                    </span>

                                    <span className=' w-full flex items-center justify-center md:w-3/5'>
                                        <img src={confirmImage} alt="loading error" />
                                    </span>
                                </span>

                            </span>

                            {/*<span className='flex px-3 flex-col items-center justify-center w-full'>
                                <span className='flex gap-x-3 gap-y-5 items-start justify-center py-3 px-2 w-full flex-col md:flex-row'>
                                    <span className='w-60'>
                                        <img src={hotelImg} alt="loading error" />
                                    </span>
                                    <span className='flex flex-col gap-y-1 items-start justify-center w-full'>
                                        <span className='flex items-center text-sm gap-x-2 text-yellow-600 justify-center text-xs'>
                                            <p>hotel</p>
                                            <span className='flex items-center justify-center'>
                                                <i className="fa-sharp text-xs fa-solid fa-star"></i>
                                                <i className="fa-sharp text-xs fa-solid fa-star"></i>
                                                <i className="fa-sharp text-xs fa-solid fa-star"></i>
                                                <i className="fa-sharp text-xs fa-solid fa-star"></i>
                                                <i className="fa-sharp text-xs fa-solid fa-star"></i>
                                            </span>
                                        </span>
                                        <h1 className='text-lg text-black font-semibold sm:text-xl md:text-2xl'>Hotel Name, City Name</h1>
                                        <span className='text-sm text-gray-500 text-justify'>janapath cournath palace, 1101 New Delhi, India</span>
                                        <span className='flex items-center justify-start gap-x-2 gap-y-2 flex-wrap'>
                                            <span className='flex items-center justify-center px-1.5 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                                <span className=" text-green-600 text-md material-symbols-outlined">
                                                    psychiatry
                                                </span>
                                                <p className='text-sm font-light'>Private suite</p>
                                            </span>

                                            <span className='flex items-center justify-center gap-x-2 px-1.5 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                                <span className=" text-green-600 text-md material-symbols-outlined">
                                                    psychiatry
                                                </span>
                                                <p className='text-sm font-light'>Private suite</p>
                                            </span>

                                            <span className='flex items-center justify-center gap-x-2 px-1.5 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                                <span className=" text-green-600 text-md material-symbols-outlined">
                                                    psychiatry
                                                </span>
                                                <p className='text-sm font-light'>Private suite</p>
                                            </span>

                                            <span className='flex items-center justify-center gap-x-2 px-1.5 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                                <span className=" text-green-600 text-md material-symbols-outlined">
                                                    psychiatry
                                                </span>
                                                <p className='text-sm font-light'>Private suite</p>
                                            </span>

                                            <span className='flex items-center justify-center gap-x-2 px-1.5 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                                <span className=" text-green-600 text-md material-symbols-outlined">
                                                    psychiatry
                                                </span>
                                                <p className='text-sm font-light'>Private suite</p>
                                            </span>

                                            <span className='flex items-center justify-center gap-x-2 px-1.5 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                                <span className=" text-green-600 text-md material-symbols-outlined">
                                                    psychiatry
                                                </span>
                                                <p className='text-sm font-light'>Private suite</p>
                                            </span>

                                            <span className='flex items-center justify-center gap-x-2 px-1.5 py-1 rounded-sm' style={{ border: '1px solid black' }}>
                                                <span className=" text-green-600 text-md material-symbols-outlined">
                                                    psychiatry
                                                </span>
                                                <p className='text-sm font-light'>Private suite</p>
                                            </span>
                                        </span>
                                    </span>
                                </span>

                                <span className='flex items-center justify-start py-3.5 gap-x-4 w-full' >
                                    <span className='flex flex-col gap-y-1 items-center justify-center'>
                                        <h6 className='text-sm font-semibold'>check in</h6>
                                        <span className='text-md px-3 py-1.5 rounded-sm bg-slate-100' style={{ border: '1px solid black' }}>
                                            Wed, 12 Jan
                                        </span>
                                    </span>

                                    <span className='flex flex-col gap-y-1 items-center justify-center'>
                                        <h6 className='text-sm font-semibold'>check out</h6>
                                        <span className='text-md px-3 py-1.5 rounded-sm bg-slate-100' style={{ border: '1px solid black' }}>
                                            Wed, 12 Jan
                                        </span>
                                    </span>
                                </span>

                            </span>*/}
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default BookingSatus