import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import FillDetails from '../Components/Booking/FillDetails'
import Payment from '../Components/Booking/Payment'
import RoomSelection from '../Components/Booking/RoomSelection'
import GuestFooter from '../Components/Footers/GuestFooter'
import GuestNavbar from '../Components/NavBars/GuestNavbar'
import UserNavbar from '../Components/NavBars/UserNavbar'
import { v4 as uuid } from 'uuid'
import utilities from '../Assets/Utility/utility'

function Booking() {
    const navigate = useNavigate();

    const [Room, setRoomDetials] = useState({
        userName: '',
        status: 'incomplete',
        message: 'process is incomplete',
        hotelName: '',
        roomName: '',
        price: 0,
        startDate: '',
        endDate: '',
        no_rooms: [],
        booking_id: '',
        uid: '',
        hotel_id: ''
    })

    const [selectedRoom, setSelectedRoomDetaisl] = useState({
        userName: '',
        status: 'incomplete',
        message: '',
        room: Room,
    })

    // Fill Details of Rooms
    const setDate = (start, end) => {
        Room.startDate = start
        Room.endDate = end
        console.log(Room)
    }

    const roomSleeps = (sleeps, rooms) => {
        console.log(sleeps, rooms);
        let temp = [];
        temp.push(sleeps);
        temp.push(rooms);
        // temp.push(price);

        let previousNo_rooms = Room.no_rooms;
        let check = true;
        for (let i = 0; i < previousNo_rooms.length; i++) {
            if ((previousNo_rooms[i][0] == sleeps)) {
                previousNo_rooms[i][1] = rooms
                check = false
            }
        }

        if (check) {
            Room.no_rooms.push(temp);
        }

        console.log(Room)

    }

    const roomDetails = async (hotel, room) => {
        Room.hotelName = hotel
        Room.roomName = room
        Room.uid = sessionStorage.getItem(`userId`);
        Room.hotel_id = sessionStorage.getItem('hotel_Id')

        const unique_id = uuid();
        const small_id = unique_id.slice(0, 8);
        Room.booking_id = unique_id;


        console.log(Room)

        // const formData = new FormData();
        // formData.append('userName', selectedRoom.userName);
        // formData.append('status', 'inComplete');
        // formData.append('message', 'process is incomplete');
        // for(let i=0; i<Room.no_rooms.length; i++){
        //     formData.append('no_rooms', Room.no_rooms[i]);
        // }
        // formData.append('startDate', Room.startDate)
        // formData.append('endDate', Room.endDate)
        // formData.append('price', Room.price)

        let ans = await axios.get(`${utilities.deploy_url}/api/users/${sessionStorage.getItem('userId')}`)
        ans = ans.data.userName;
        Room.userName = ans;

        console.log(Room)
        const vi = JSON.stringify(Room)

        await axios.post(`${utilities.deploy_url}/api/requests/send`,Room)
            .then((resp) => {
                console.log(resp)
                sessionStorage.setItem('booking_id', resp.data);
                sessionStorage.removeItem('hotel_id');
                navigate(`/Booking/EnterDetails`)
            })
            .catch((err) => {
                console.log("-->" ,err)
            })
    }

    const NavBar = () => {
        if (sessionStorage.getItem('userId')) {
            return (<UserNavbar bgColor='rgb(11 36 75)' />)
        }
        else {
            return (<GuestNavbar bgColor='rgb(11 36 75)' />)
        }
    }


    const BookingStep = () => {
        if (document.location.href.includes('RoomSelection')) {
            return (<RoomSelection setDate={setDate} roomSleeps={roomSleeps} roomDetails={roomDetails} />)
        }
        else if (document.location.href.includes('EnterDetails')) {
            return (<FillDetails />)
        }
        else if (document.location.href.includes('Payment')) {
            return (<Payment />)
        }
    }

    useEffect(() => {
        
    }, [])

    return (
        <>
            <NavBar />
            <BookingStep />
            <GuestFooter />
        </>
    )
}

export default Booking