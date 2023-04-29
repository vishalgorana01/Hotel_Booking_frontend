import React, { useEffect, useState } from 'react'
import BookingSidebar from '../SideBars/BookingSidebar'
import axios from 'axios'

import bookedImage from '../../Assets/Images/hotel2.jpg'
import { useNavigate } from 'react-router-dom'
import utilities from '../../Assets/Utility/utility'

function FillDetails() {

    const [parameters, setParameters] = useState({
        startDate: 'Fri 31 Mar 2023',
        endDate: 'Fri 31 Mar 2023',
        length_of_Days: '2',
        startTime: '12:00 am',
        endTime: '12:00 pm',
        rooms: [],
        hotelName: 'Hotel Name',
        roomName: 'roomName',
        price: '1,23,345'
    })

    var [hotelId, setHotelId] = useState(null);

    const receivedOne = async () => {
        let request = await axios.get(`${utilities.deploy_url}/api/requests/receivedOne/${sessionStorage.getItem('booking_id')}`)
        request = request.data
        console.log(request)
        hotelId = request.hotel_id
        setHotelId(request.hotel_id);
        console.log(hotelId)

        const start = new Date(request.startDate)
        console.log(start)
        const end = new Date(request.endDate)

        const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        const Day = ['Sun', 'Mon', 'Tue', 'wed', 'Thr', 'Fri', 'Sat']

        setParameters({
            ...parameters,
            startDate: `${Day[start.getDay()]} ${start.getDate()} ${month[start.getMonth()]} ${start.getFullYear()}`,
            endDate: `${Day[end.getDay()]} ${end.getDate()} ${month[end.getMonth()]} ${end.getFullYear()}`,
            // startTime: `${start.getHours()}:${start.getMinutes()}`,
            // endTime: `${end.getHours()}:${end.getMinutes()}`,
            length_of_Days: `${(start.getMonth() == end.getMonth()) ? (end.getDate() - start.getDate() + 1) : (end.getDate() + start.getDate() + 1)}`,
            roomName: request.roomName,
            hotelName: request.hotelName,
            rooms: request.no_rooms,
        })
    }

    const [hotelParameters, setHotelParameters] = useState({
        hotelName: '',
        hotelCoverImageLink: '',
        address: '',
        type: ''
    })

    const getHotelParameters = async () => {
        let hotelInformation = await axios.get(`${utilities.deploy_url}/api/hotels/byId/${hotelId}`)
        console.log(hotelInformation.data)
        hotelInformation = hotelInformation.data

        setHotelParameters({
            hotelName: `${hotelInformation.name}, ${hotelInformation.city}`,
            type: hotelInformation.type,
            hotelCoverImageLink: hotelInformation.photos[0],
            address: `${hotelInformation.address}, ${hotelInformation.city}`
        })
    }

    useEffect(() => {
        if (sessionStorage.getItem('booking_id')) {
            receivedOne()
                .then((res) => {
                    getHotelParameters()
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [])

    const Rating = () => {
        if (hotelParameters.type == '1 star') {
            return (
                <span className='flex items-center justify-center'>
                    <i className="fa-sharp text-xs text-yellow-600 fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs fa-solid fa-star"></i>
                </span>
            )
        }
        else if (hotelParameters.type == '2 star') {
            return (
                <span className='flex items-center justify-center'>
                    <i className="fa-sharp text-xs text-yellow-600 fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs text-yellow-600 fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs fa-solid fa-star"></i>
                </span>
            )
        }
        else if (hotelParameters.type == '3 star') {
            return (
                <span className='flex items-center justify-center'>
                    <i className="fa-sharp text-xs text-yellow-600 fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs text-yellow-600 fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs text-yellow-600 fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs fa-solid fa-star"></i>
                </span>
            )
        }
        else if (hotelParameters.type == '4 star') {
            return (
                <span className='flex items-center justify-center'>
                    <i className="fa-sharp text-xs text-yellow-600 fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs text-yellow-600 fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs text-yellow-600 fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs text-yellow-600 fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs fa-solid fa-star"></i>
                </span>
            )
        }
        else if (hotelParameters.type == '5 star') {
            return (
                <span className='flex items-center justify-center'>
                    <i className="fa-sharp text-xs text-yellow-600 fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs text-yellow-600 fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs text-yellow-600 fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs text-yellow-600 fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs text-yellow-600 fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs fa-solid fa-star"></i>
                </span>
            )
        }
        else if (hotelParameters.type == '6 star') {
            return (
                <span className='flex items-center justify-center'>
                    <i className="fa-sharp text-xs text-yellow-600 fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs text-yellow-600 fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs text-yellow-600 fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs text-yellow-600 fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs text-yellow-600 fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs text-yellow-600 fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs fa-solid fa-star"></i>
                </span>
            )
        }
        else if (hotelParameters.type == '7 star') {
            return (
                <span className='flex items-center justify-center'>
                    <i className="fa-sharp text-xs text-yellow-600 fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs text-yellow-600 fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs text-yellow-600 fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs text-yellow-600 fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs text-yellow-600 fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs text-yellow-600 fa-solid fa-star"></i>
                    <i className="fa-sharp text-xs text-yellow-600 fa-solid fa-star"></i>
                </span>
            )
        }

    }

    const [Details, setDetails] = useState({
        firstName: '',
        lastName: '',
        phone1: 0,
        phone2: 0,
        email: '',
        status: "payment pending"
    })

    const handleChange = (name, val) => {
        setDetails({
            ...Details,
            [name]: val
        })

        console.log(Details)
    }

    const navigate = useNavigate();

    const nextStep = async () => {
        const updatedHotel = await axios.put(`${utilities.deploy_url}/api/requests/updateRequest/${sessionStorage.getItem('booking_id')}`, Details)
        console.log(updatedHotel)
    }

    return (
        <>
            <section className='flex items-center justify-center w-screen pt-32 pb-14 px-6 sm:px-8 lg:px-12'>
                <div className='flex items-center justify-center w-full max-w-7xl'>

                    <div className='flex flex-col items-start gap-x-4 gap-y-4 justify-center w-full xl:flex-row'>
                        {/* Booking SideBar */}
                        <BookingSidebar />

                        <div className='flex flex-col items-center gap-y-5 justify-center w-full'>
                            <span className='flex gap-x-3 gap-y-5 items-start justify-center py-3 px-2 w-full flex-col md:flex-row' style={{ backgroundColor: 'ghostwhite', border: '2px solid lightgray' }}>
                                <span className='w-60'>
                                    <img src={bookedImage} alt="loading error" />
                                </span>
                                <span className='flex flex-col gap-y-1 items-start justify-center w-full'>
                                    <span className='flex items-center text-sm gap-x-2 justify-center text-xs'>
                                        <p className='text-yellow-600'>hotel</p>
                                        <Rating />
                                    </span>
                                    <h1 className='text-lg text-black font-semibold sm:text-xl md:text-2xl'>{parameters.hotelName}</h1>
                                    <span className='text-sm text-gray-500 text-justify'>{hotelParameters.address}</span>
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

                            <span className='flex flex-col items-center gap-y-4 justify-center py-3 px-3 w-full' style={{ backgroundColor: 'ghostwhite', border: '2px solid lightgray' }}>
                                <h1 className='text-lg text-black font-semibold text-left w-full sm:text-xl lg:text-2xl'>Enter your Details</h1>

                                <span className='flex flex-col gap-3 items-start justify-start w-full sm:items-center sm:flex-row'>
                                    <span className='flex flex-col gap-y-0.5 items-start justify-center w-full'>
                                        <label className='text-sm text-black font-semibold'>first Name</label>
                                        <input type="text" name="firstName" id="" className='outline-none px-1 w-full py-1 text-sm' required style={{ background: 'transparent', border: '2px solid lightgray' }} onChange={(ele) => handleChange(ele.currentTarget.name, ele.currentTarget.value)} />
                                    </span>
                                    <span className='flex flex-col gap-y-0.5 items-start justify-center w-full'>
                                        <label className='text-sm text-black font-semibold'>last Name</label>
                                        <input type="text" name="lastName" id="" className='outline-none px-1 w-full py-1 text-sm' required style={{ background: 'transparent', border: '2px solid lightgray' }} onChange={(ele) => handleChange(ele.currentTarget.name, ele.currentTarget.value)} />
                                    </span>
                                </span>

                                <span className='flex flex-col gap-3 items-start justify-start w-full sm:items-center sm:flex-row'>
                                    <span className='flex flex-col gap-y-0.5 items-start justify-center w-full'>
                                        <label className='text-sm text-black font-semibold'>contact no :</label>
                                        <input type="number" name="phone1" id="" className='outline-none w-full px-1 py-1 text-sm' required style={{ background: 'transparent', border: '2px solid lightgray' }} onChange={(ele) => handleChange(ele.currentTarget.name, ele.currentTarget.value)} />
                                    </span>
                                    <span className='flex flex-col gap-y-0.5 items-start justify-center w-full'>
                                        <label className='text-sm text-black font-semibold'>contact no</label>
                                        <input type="number" name="phone2" id="" className='outline-none w-full px-1 py-1 text-sm' required style={{ background: 'transparent', border: '2px solid lightgray' }} onChange={(ele) => handleChange(ele.currentTarget.name, ele.currentTarget.value)} />
                                    </span>
                                </span>

                                <span className='flex flex-col gap-3 items-start justify-start w-full sm:items-center sm:flex-row'>
                                    <span className='flex flex-col gap-y-0.5 items-start justify-center w-full'>
                                        <label className='text-sm text-black font-semibold'>email</label>
                                        <input type="email" name="email" id="" className='outline-none px-1 py-1 w-full text-sm sm:w-1/2' required style={{ background: 'transparent', border: '2px solid lightgray' }} onChange={(ele) => handleChange(ele.currentTarget.name, ele.currentTarget.value)} />
                                    </span>
                                </span>
                            </span>

                            <span className='w-full my-3 flex items-center justify-start'>
                                <button className='text-xl font-semibold py-2 px-4 rounded-sm text-cyan-200' style={{ backgroundColor: 'rgb(11 36 75)' }} onClickCapture={() => nextStep().then(() => {
                                    navigate(`/Booking/Payment`)
                                })
                                .catch((err)=>{
                                    console.log(err)
                                })}>Next Step</button>
                            </span>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default FillDetails