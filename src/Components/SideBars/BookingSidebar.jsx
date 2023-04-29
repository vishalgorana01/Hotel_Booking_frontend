import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import utilities from '../../Assets/Utility/utility';

function BookingSidebar() {
    if (!sessionStorage.getItem('booking_id')) {
        console.log("sorry, your session is expired");
    }

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

    const plusRef = useRef([]);
    const pushPlusRef = (ele) => plusRef.current.push(ele);

    const plusMinusController = (givenKey) => {
        for (let i = 0; i < plusRef.current.length; i++) {
            if (i == givenKey) {
                plusRef.current[i].style.display = 'flex';
            }
            else {
                plusRef.current[i].style.display = 'none';
            }
        }
    }

    const receivedOne = async () => {
        let request = await axios.get(`${utilities.deploy_url}/api/requests/receivedOne/${sessionStorage.getItem('booking_id')}`)
        request = request.data

        const start = new Date(request.startDate)
        console.log(start)
        const end = new Date(request.endDate)

        const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        const Day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat']


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

    useEffect(() => {
        receivedOne();
    }, [])

    const arr = [
        {
            roomName: 'heritage suite',
            rooms: ['1 room for 2 persons', '1 room for 3 persons', '2 room for 2 persons']
        },
        {
            roomName: 'Decor suite',
            rooms: ['1 room for 2 persons', '1 room for 3 persons', '2 room for 2 persons']
        },
        {
            roomName: 'comfort suite',
            rooms: ['1 room for 2 persons', '1 room for 3 persons', '2 room for 2 persons']
        }
    ]

    const selectedRooms = arr.map((ele, index) => {
        return (
            <span key={index} className='flex flex-col gap-y-0.5 mb-1 items-center justify-center w-full'>
                <span className='flex items-center justify-between w-full'>
                    <h4 className='text-md font-bold text-black text-left w-full'>{index + 1}. {ele.roomName}</h4>
                    <i className='text-black text-xl font-bold cursor-pointer' onClick={() => plusMinusController(index)}>+</i>
                </span>
                <span className='flex-col hidden px-2 gap-y-1 items-center justify-center w-full' ref={(e) => pushPlusRef(e)}>
                    {ele.rooms.map((rooms, i) => {
                        return (
                            <h4 key={i} className='text-md font-semibold text-gray-700 text-left w-full'>{rooms}</h4>
                        )
                    })}
                </span>
            </span>
        )
    })

    useEffect(() => {

    }, [])
    return (
        <div className='flex items-start justify-center w-full gap-y-5 gap-x-5 flex-col md:flex-row xl:flex-col xl:items-center xl:w-96' >
            <span className='flex flex-col gap-y-5 items-center py-4 rounded-sm px-4 justify-center shadow-2xl w-full' style={{ backgroundColor: 'ghostwhite', border: '2px solid lightgray' }}>
                <span className='flex flex-col gap-y-5 items-center justify-center w-full pb-4' style={{ borderBottom: '2px solid #0c000033' }}>
                    <h2 className='text-lg text-black font-semibold text-left w-full'>Your booking details</h2>
                    <span className='flex items-center justify-start gap-x-8 w-full'>
                        <span className='flex flex-col gap-y-1.5 items-center justify-center w-28'>
                            <h4 className='text-sm font-normal text-gray-600 text-left w-full'>check in</h4>
                            <h4 className='text-md font-semibold text-black text-left w-full'>{parameters.startDate}</h4>
                            <h4 className='text-sm font-normal text-gray-600 text-left w-full'>from {parameters.startTime}</h4>
                        </span>
                        <span className='flex flex-col gap-y-1.5 items-center justify-center w-28'>
                            <h4 className='text-sm font-normal text-gray-600 text-left w-full'>check out</h4>
                            <h4 className='text-md font-semibold text-black text-left w-full'>{parameters.endDate}</h4>
                            <h4 className='text-sm font-normal text-gray-600 text-left w-full'>to {parameters.endTime}</h4>
                        </span>
                    </span>
                    <span className='flex flex-col gap-y-0.5 items-center justify-center w-full'>
                        <h4 className='text-md font-semibold text-gray-600 text-left w-full'>Total length of stay</h4>
                        <h4 className='text-sm font-bold text-black text-left w-full'>{parameters.length_of_Days} days</h4>
                    </span>
                </span>
                <span className='flex flex-col items-center justify-center w-full'>
                    <h2 className='text-sm text-gray-600 font-semibold text-left w-full mb-2'>Your selected</h2>
                    {/* {selectedRooms} */}

                    <span className='flex items-start justify-center flex-col w-full'>
                        <span className='flex items-center mb-2 justify-between w-full'>
                            <h4 className='text-md font-bold text-black text-left w-full'>{parameters.roomName}</h4>
                        </span>
                        {parameters.rooms.map((ele, index) => {
                            return (
                                <span key={index} className='text-justify mb-0.5 w-full pl-3 text-xs font-normal text-gray-600'>{ele[1]} rooms for {ele[0]} persons</span>
                            )
                        })}
                    </span>

                </span>
            </span>

            <span className='flex items-center justify-center w-full flex-col rounded-sm shadow-xl' style={{ backgroundColor: 'ghostwhite', border: '2px solid lightgray' }}>
                <span className='flex items-center justify-between py-3.5 px-3 w-full' style={{ backgroundColor: '#0b244b1f' }}>
                    <h2 className='text-black text-lg font-bold'>price</h2>
                    <b className='text-gray-600 text-md font-semibold'>Rs.1,32,476</b>
                </span>
                <span className='flex flex-col items-center justify-center py-3.5 px-3 w-full'>
                    <h2 className='text-black text-lg font-bold w-full text-left'>Excluded price</h2>
                    <span className='flex items-center justify-between w-full'>
                        <h2 className='text-gray-600 text-sm font-semibold'>Goods & service taxes</h2>
                        <b className='text-gray-600 text-sm font-semibold'>Rs.{parameters.price}</b>
                    </span>
                </span>
            </span>
        </div>
    )
}

export default BookingSidebar