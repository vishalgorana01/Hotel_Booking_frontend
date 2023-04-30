import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../App.css'
import RoomDescription from './RoomDescription'
import { json } from 'react-router-dom'
import utilities from '../../Assets/Utility/utility'

function RoomTypes(props) {
    
    const [roomType, setRoomType] = useState('none')

    const setNewDisplayType = (givenDisplay)=>{
        setDisplay({
            ...display,
            displayType: givenDisplay
        })
    }

    const setRoomAndDisplayType = (givenDisplay, givenRoom) => {
        setDisplay({
            displayType: givenDisplay,
            room: givenRoom
        })
    }

    const queryParameters = new URLSearchParams(window.location.search)
    console.log(queryParameters)
    const name = queryParameters.get('name')
    console.log(name)
    // const id = queryParameters.get('id')
    // console.log(id)

    const [comfortRoom, setComfortRoom] = useState({
        roomName : '',
        roomServices: [],
        roomImages: [],
        roomPrice: '',
        roomDescription: ''
    })

    const [deluxeRoom, setDeluxeRoom] = useState({
        roomName: '',
        roomServices: [],
        roomImages: [],
        roomPrice: '',
        roomDescription: ''
    })

    const [luxuryRoom, setLuxuryRoom] = useState({
        roomName: '',
        roomServices: [],
        roomImages: [],
        roomPrice: '',
        roomDescription: ''
    })

    const [display, setDisplay] = useState({
        displayType: 'hidden',
        room: comfortRoom
    })

    const getRoomDetails = async ()=>{
        try {
            let hotelInformation = await axios.get(`${utilities.deploy_url}/api/hotels/${name}`);
            hotelInformation = hotelInformation.data

            // console.log("services -> ",(hotelInformation.comfort.roomServices))

            setComfortRoom({
                roomName : hotelInformation.comfort.roomName,
                roomServices: hotelInformation.comfort.roomServices.split(","),
                roomImages: hotelInformation.comfort.roomImages,
                roomPrice: hotelInformation.comfort.roomPrice,
                roomDescription: hotelInformation.comfort.roomDescription
            })

            // deluxe Room
            setDeluxeRoom({
                roomName: hotelInformation.deluxe.roomName,
                roomServices: hotelInformation.deluxe.roomServices.split(","),
                roomImages: hotelInformation.deluxe.roomImages,
                roomPrice: hotelInformation.deluxe.roomPrice,
                roomDescription: hotelInformation.deluxe.roomDescription
            })

            // Luxury Room
            setLuxuryRoom({
                roomName: hotelInformation.luxury.roomName,
                roomServices: hotelInformation.luxury.roomServices.split(","),
                roomImages: hotelInformation.luxury.roomImages,
                roomPrice: hotelInformation.luxury.roomPrice,
                roomDescription: hotelInformation.luxury.roomDescription
            })

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        getRoomDetails();
    }, [])


    return (
        <>
            <div className='flex flex-wrap items-center justify-start lg:flex-row'>

                <div className='flex items-center justify-center py-6 w-full sm:p-2 lg:w-1/2'>
                    <div className='flex flex-col items-start px-1 rounded-sm justify-center w-full' style={{ border: '1px solid black' }}>
                        <span className='w-full flex items-center justify-between'>
                            <h4 className=' underline text-blue-500 cursor-pointer text-md text-bold' onClick={() =>setRoomAndDisplayType('flex', comfortRoom)}>{comfortRoom.roomName}</h4>
                            <i className=" text-xl fa-sharp fa-solid fa-image text-blue-500 cursor-pointer" onClick={() =>setRoomAndDisplayType('flex', comfortRoom)}></i>
                        </span>

                        <span className='flex flex-col items-start justify-center mb-1 gap-y-0.5 w-full'>
                            <span className='flex items-center justify-center text-xs sm:text-sm'>
                                <b>Bed: </b>
                                <p>&nbsp;1 double bed</p>
                            </span>
                            {/* <span className='flex items-center justify-center text-xs sm:text-sm'>
                            <b>Bedroom1: </b>
                            <p>&nbsp;1 double bed</p>
                        </span>
                        <span className='flex items-center justify-center text-xs sm:text-sm'>
                            <b>Bedroom1: </b>
                            <p>&nbsp;1 double bed</p>
                        </span> */}
                        </span>

                        <span className='flex flex-wrap rounded-sm items-center justify-start gap-1'>
                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{comfortRoom.roomServices[0]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{comfortRoom.roomServices[1]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{comfortRoom.roomServices[2]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{comfortRoom.roomServices[3]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{comfortRoom.roomServices[4]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{comfortRoom.roomServices[5]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{comfortRoom.roomServices[6]}</p>
                            </span>

                            {/* conditions */}
                            <ul className='flex flex-col items-start w-full justify-center text-xs md:text-sm'>
                                <li className='list-none'>Non refundable</li>
                                <li className='list-none'>Pay in advance</li>
                            </ul>

                            <span className='flex items-center text-start justify-between w-full'>
                                <p className='text-xs'>Price for 1 <b>night:</b><br /><b className='text-green-500 text-lg font-semibold'>Rs. {comfortRoom.roomPrice}</b></p>
                                <span className='flex items-center justify-center px-2 cursor-pointer rounded-sm py-2 text-cyan-200 bg-red-500 ease-linear duration-200 m-2 hover:-translate-y-1'><button className='py-1 px-3'>Reserve</button></span>
                            </span>

                        </span>
                    </div>
                </div>

                {/* second */}
                <div className='flex items-center justify-center py-6 w-full sm:p-2 lg:w-1/2'>
                    <div className='flex flex-col items-start px-1 rounded-sm justify-center w-full' style={{ border: '1px solid black' }}>
                        <span className='w-full flex items-center justify-between'>
                            <h4 className=' underline text-blue-500 cursor-pointer text-md text-bold' onClick={() =>setRoomAndDisplayType('flex', deluxeRoom)}>{deluxeRoom.roomName}</h4>
                            <i className=" text-xl fa-sharp fa-solid fa-image text-blue-500 cursor-pointer" onClick={() =>setRoomAndDisplayType('flex', deluxeRoom)}></i>
                        </span>

                        <span className='flex flex-col items-start justify-center mb-1 gap-y-0.5 w-full'>
                            <span className='flex items-center justify-center text-xs sm:text-sm'>
                                <b>Bed: </b>
                                <p>&nbsp;1 double bed</p>
                            </span>
                            {/* <span className='flex items-center justify-center text-xs sm:text-sm'>
                            <b>Bedroom1: </b>
                            <p>&nbsp;1 double bed</p>
                        </span>
                        <span className='flex items-center justify-center text-xs sm:text-sm'>
                            <b>Bedroom1: </b>
                            <p>&nbsp;1 double bed</p>
                        </span> */}
                        </span>

                        <span className='flex flex-wrap rounded-sm items-center justify-start gap-1'>
                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{deluxeRoom.roomServices[0]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{deluxeRoom.roomServices[1]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{deluxeRoom.roomServices[2]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{deluxeRoom.roomServices[3]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{deluxeRoom.roomServices[4]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{deluxeRoom.roomServices[5]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{deluxeRoom.roomServices[6]}</p>
                            </span>

                            {/* conditions */}
                            <ul className='flex flex-col items-start w-full justify-center text-xs md:text-sm'>
                                <li className='list-none'>Non refundable</li>
                                <li className='list-none'>Pay in advance</li>
                            </ul>

                            <span className='flex items-center text-start justify-between w-full'>
                                <p className='text-xs'>{deluxeRoom.roomPrice}<b>night:</b><br /><b className='text-green-500 text-lg font-semibold'>Rs. 9,593</b></p>
                                <span className='flex items-center justify-center px-2 cursor-pointer rounded-sm py-2 text-cyan-200 bg-red-500 ease-linear duration-200 m-2 hover:-translate-y-1'><button className='py-1 px-3'>Reserve</button></span>
                            </span>

                        </span>
                    </div>
                </div>

                {/* Third */}
                <div className='flex items-center justify-center py-6 w-full sm:p-2 lg:w-1/2'>
                    <div className='flex flex-col items-start px-1 rounded-sm justify-center w-full' style={{ border: '1px solid black' }}>
                        <span className='w-full flex items-center justify-between'>
                            <h4 className=' underline text-blue-500 cursor-pointer text-md text-bold' onClick={() =>setRoomAndDisplayType('flex', luxuryRoom)}>{luxuryRoom.roomName}</h4>
                            <i className=" text-xl fa-sharp fa-solid fa-image text-blue-500 cursor-pointer" onClick={() =>setRoomAndDisplayType('flex', luxuryRoom)}></i>
                        </span>

                        <span className='flex flex-col items-start justify-center mb-1 gap-y-0.5 w-full'>
                            <span className='flex items-center justify-center text-xs sm:text-sm'>
                                <b>Bed: </b>
                                <p>&nbsp;1 double bed</p>
                            </span>
                            {/* <span className='flex items-center justify-center text-xs sm:text-sm'>
                            <b>Bedroom1: </b>
                            <p>&nbsp;1 double bed</p>
                        </span>
                        <span className='flex items-center justify-center text-xs sm:text-sm'>
                            <b>Bedroom1: </b>
                            <p>&nbsp;1 double bed</p>
                        </span> */}
                        </span>

                        <span className='flex flex-wrap rounded-sm items-center justify-start gap-1'>
                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{luxuryRoom.roomServices[0]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{luxuryRoom.roomServices[1]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{luxuryRoom.roomServices[2]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{luxuryRoom.roomServices[3]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{luxuryRoom.roomServices[4]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{luxuryRoom.roomServices[5]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{luxuryRoom.roomServices[6]}</p>
                            </span>

                            {/* conditions */}
                            <ul className='flex flex-col items-start w-full justify-center text-xs md:text-sm'>
                                <li className='list-none'>Non refundable</li>
                                <li className='list-none'>Pay in advance</li>
                            </ul>

                            <span className='flex items-center text-start justify-between w-full'>
                                <p className='text-xs'>Price for 1 <b>night:</b><br /><b className='text-green-500 text-lg font-semibold'>{deluxeRoom.roomPrice}</b></p>
                                <span className='flex items-center justify-center px-2 cursor-pointer rounded-sm py-2 text-cyan-200 bg-red-500 ease-linear duration-200 m-2 hover:-translate-y-1'><button className='py-1 px-3'>Reserve</button></span>
                            </span>

                        </span>
                    </div>
                </div>

                {/* Four */}
                <div className='flex items-center justify-center py-6 w-full sm:p-2 lg:w-1/2'>
                    <div className='flex flex-col items-start px-1 rounded-sm justify-center w-full' style={{ border: '1px solid black' }}>
                        <span className='w-full flex items-center justify-between'>
                            <h4 className=' underline text-blue-500 cursor-pointer text-md text-bold' onClick={() =>setRoomAndDisplayType('flex', comfortRoom)}>{comfortRoom.roomName}</h4>
                            <i className=" text-xl fa-sharp fa-solid fa-image text-blue-500 cursor-pointer" onClick={() =>setRoomAndDisplayType('flex', comfortRoom)}></i>
                        </span>

                        <span className='flex flex-col items-start justify-center mb-1 gap-y-0.5 w-full'>
                            <span className='flex items-center justify-center text-xs sm:text-sm'>
                                <b>Bed: </b>
                                <p>&nbsp;1 double bed</p>
                            </span>
                            {/* <span className='flex items-center justify-center text-xs sm:text-sm'>
                            <b>Bedroom1: </b>
                            <p>&nbsp;1 double bed</p>
                        </span>
                        <span className='flex items-center justify-center text-xs sm:text-sm'>
                            <b>Bedroom1: </b>
                            <p>&nbsp;1 double bed</p>
                        </span> */}
                        </span>

                        <span className='flex flex-wrap rounded-sm items-center justify-start gap-1'>
                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{comfortRoom.roomServices[0]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{comfortRoom.roomServices[1]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{comfortRoom.roomServices[2]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{comfortRoom.roomServices[3]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{comfortRoom.roomServices[4]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{comfortRoom.roomServices[5]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>Garden view</p>
                            </span>

                            {/* conditions */}
                            <ul className='flex flex-col items-start w-full justify-center text-xs md:text-sm'>
                                <li className='list-none'>Non refundable</li>
                                <li className='list-none'>Pay in advance</li>
                            </ul>

                            <span className='flex items-center text-start justify-between w-full'>
                                <p className='text-xs'>Price for 1 <b>night:</b><br /><b className='text-green-500 text-lg font-semibold'>{comfortRoom.roomPrice}</b></p>
                                <span className='flex items-center justify-center px-2 cursor-pointer rounded-sm py-2 text-cyan-200 bg-red-500 ease-linear duration-200 m-2 hover:-translate-y-1'><button className='py-1 px-3'>Reserve</button></span>
                            </span>

                        </span>
                    </div>
                </div>

                {/* Five */}
                <div className='flex items-center justify-center py-6 w-full sm:p-2 lg:w-1/2'>
                    <div className='flex flex-col items-start px-1 rounded-sm justify-center w-full' style={{ border: '1px solid black' }}>
                        <span className='w-full flex items-center justify-between'>
                            <h4 className=' underline text-blue-500 cursor-pointer text-md text-bold' onClick={() =>setRoomAndDisplayType('flex', deluxeRoom)}>{deluxeRoom.roomName}</h4>
                            <i className=" text-xl fa-sharp fa-solid fa-image text-blue-500 cursor-pointer" onClick={() =>setRoomAndDisplayType('flex', deluxeRoom)}></i>
                        </span>

                        <span className='flex flex-col items-start justify-center mb-1 gap-y-0.5 w-full'>
                            <span className='flex items-center justify-center text-xs sm:text-sm'>
                                <b>Bed: </b>
                                <p>&nbsp;1 double bed</p>
                            </span>
                            {/* <span className='flex items-center justify-center text-xs sm:text-sm'>
                            <b>Bedroom1: </b>
                            <p>&nbsp;1 double bed</p>
                        </span>
                        <span className='flex items-center justify-center text-xs sm:text-sm'>
                            <b>Bedroom1: </b>
                            <p>&nbsp;1 double bed</p>
                        </span> */}
                        </span>

                        <span className='flex flex-wrap rounded-sm items-center justify-start gap-1'>
                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{deluxeRoom.roomServices[0]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{deluxeRoom.roomServices[1]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{deluxeRoom.roomServices[2]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{deluxeRoom.roomServices[3]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{deluxeRoom.roomServices[4]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{deluxeRoom.roomServices[5]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{deluxeRoom.roomServices[6]}</p>
                            </span>

                            {/* conditions */}
                            <ul className='flex flex-col items-start w-full justify-center text-xs md:text-sm'>
                                <li className='list-none'>Non refundable</li>
                                <li className='list-none'>Pay in advance</li>
                            </ul>

                            <span className='flex items-center text-start justify-between w-full'>
                                <p className='text-xs'>Price for 1 <b>night:</b><br /><b className='text-green-500 text-lg font-semibold'>{deluxeRoom.roomPrice}</b></p>
                                <span className='flex items-center justify-center px-2 cursor-pointer rounded-sm py-2 text-cyan-200 bg-red-500 ease-linear duration-200 m-2 hover:-translate-y-1'><button className='py-1 px-3'>Reserve</button></span>
                            </span>

                        </span>
                    </div>
                </div>

                {/* six */}
                <div className='flex items-center justify-center py-6 w-full sm:p-2 lg:w-1/2'>
                    <div className='flex flex-col items-start px-1 rounded-sm justify-center w-full' style={{ border: '1px solid black' }}>
                        <span className='w-full flex items-center justify-between'>
                            <h4 className=' underline text-blue-500 cursor-pointer text-md text-bold' onClick={() =>setRoomAndDisplayType('flex', luxuryRoom)}>{luxuryRoom.roomName}</h4>
                            <i className=" text-xl fa-sharp fa-solid fa-image text-blue-500 cursor-pointer" onClick={() =>setRoomAndDisplayType('flex', luxuryRoom)}></i>
                        </span>

                        <span className='flex flex-col items-start justify-center mb-1 gap-y-0.5 w-full'>
                            <span className='flex items-center justify-center text-xs sm:text-sm'>
                                <b>Bed: </b>
                                <p>&nbsp;1 double bed</p>
                            </span>
                            {/* <span className='flex items-center justify-center text-xs sm:text-sm'>
                            <b>Bedroom1: </b>
                            <p>&nbsp;1 double bed</p>
                        </span>
                        <span className='flex items-center justify-center text-xs sm:text-sm'>
                            <b>Bedroom1: </b>
                            <p>&nbsp;1 double bed</p>
                        </span> */}
                        </span>

                        <span className='flex flex-wrap rounded-sm items-center justify-start gap-1'>
                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{luxuryRoom.roomServices[0]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>Garden view</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>Garden view</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>Garden view</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>Garden view</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>Garden view</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-0.5 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>Garden view</p>
                            </span>

                            {/* conditions */}
                            <ul className='flex flex-col items-start w-full justify-center text-xs md:text-sm'>
                                <li className='list-none'>Non refundable</li>
                                <li className='list-none'>Pay in advance</li>
                            </ul>

                            <span className='flex items-center text-start justify-between w-full'>
                                <p className='text-xs'>Price for 1 <b>night:</b><br /><b className='text-green-500 text-lg font-semibold'>Rs. 9,593</b></p>
                                <span className='flex items-center justify-center px-2 cursor-pointer rounded-sm py-2 text-cyan-200 bg-red-500 ease-linear duration-200 m-2 hover:-translate-y-1'><button className='py-1 px-3'>Reserve</button></span>
                            </span>

                        </span>
                    </div>
                </div>

            </div>

            {/* Room Description */}
            <RoomDescription displayType={display.displayType} roomType = {display.room} setDisplayType={setNewDisplayType}/>
        </>
    )
}

export default RoomTypes