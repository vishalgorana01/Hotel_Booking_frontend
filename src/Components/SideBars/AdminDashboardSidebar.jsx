import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export var slideRight;

function AdminDashboardSidebar() {
    const rightArrowRef = useRef([])
    const pushRightArrowRef = (ele) => rightArrowRef.current.push(ele)

    const dropdownRef = useRef([])
    const pushDropdownRef = (ele) => dropdownRef.current.push(ele)

    const sidebar = useRef()
    const logo = useRef()
    const headlines = useRef([])
    const pushHeadlines = (ele) => headlines.current.push(ele)

    const rotate = (index) => {

        for (let i = 0; i < rightArrowRef.current.length; i++) {
            if (i == index) {

                if (rightArrowRef.current[i].style.transform == 'rotateZ(0deg)') {
                    rightArrowRef.current[i].style.transition = 'all 0.3s'
                    rightArrowRef.current[i].style.transform = 'rotateZ(90deg)'

                    dropdownRef.current[i].style.display = 'flex'
                }
                else {
                    rightArrowRef.current[i].style.transition = 'all 0.3s'
                    rightArrowRef.current[i].style.transform = 'rotateZ(0deg)'

                    dropdownRef.current[i].style.display = 'none'
                }

            }
            else {
                rightArrowRef.current[i].style.transition = 'all 0.3s'
                rightArrowRef.current[i].style.transform = 'rotateZ(0deg)'

                dropdownRef.current[i].style.display = 'none'
            }
        }
    }

    let check = false;
    const contract = () => {
        if (!check) {
            logo.current.style.display = 'none'

            for (let i = 0; i < headlines.current.length; i++) {
                headlines.current[i].style.display = 'none'
            }

            for (let i = 0; i < rightArrowRef.current.length; i++) {
                rightArrowRef.current[i].style.display = 'none'
            }

            sidebar.current.classList.remove("w-96")
            sidebar.current.classList.add("w-auto")
            check = true
        }
        else {
            logo.current.style.display = 'flex'

            for (let i = 0; i < headlines.current.length; i++) {
                headlines.current[i].style.display = 'flex'
            }

            for (let i = 0; i < rightArrowRef.current.length; i++) {
                rightArrowRef.current[i].style.display = 'flex'
            }

            sidebar.current.classList.remove("w-auto")
            sidebar.current.classList.add("w-96")

            check = false
        }
    }

    const slideLeft = ()=>{
        sidebar.current.style.transition = 'all 1s'
        sidebar.current.style.transform = 'translateX(-100%)'
    }

    slideRight = ()=>{
        sidebar.current.style.transition = 'all 1s'
        sidebar.current.style.transform = 'translateX(0%)'
    }

    const navigate = useNavigate()

    return (
        <div ref={sidebar} className='flex fixed left-0 z-10 top-0 h-full flex-col w-80 items-start ease-in-out duration-1000 -translate-x-96 justify-start xl:static xl:w-96 xl:translate-x-0' style={{ backgroundColor: '#020d1e', borderRight: '1px solid rgb(12 32 63)'}}>
            <span className='flex items-center gap-3 justify-start py-2 px-4 w-full' style={{borderBottom: '1px solid rgb(12 32 63)'}}>
                <i onClick={() => contract()} className="fa-sharp text-2xl text-cyan-100 hidden fa-solid fa-bars cursor-pointer xl:block"></i>
                <i onClick={()=> slideLeft()} className="fa-sharp fa-solid text-2xl text-cyan-100 cursor-pointer fa-arrow-left-long xl:hidden"></i>
                <span className='flex items-center justify-center py-1 cursor-pointer'>
                    <h3 ref={logo} className='text-2xl text-cyan-100 text-100'>LOGO</h3>
                </span>
            </span>

            <ul className='flex items-center justify-center mt-3 gap-4 w-full flex-col px-4 py-2'>
                <li className=' flex items-center justify-between w-full text-cyan-100'><a className='flex items-center justify-center gap-2.5' href="/AdminPanel/Dashboard"><i className="fa-sharp text-xl fa-solid fa-square"></i><b className=' tracking-wide font-normal text-md' ref={pushHeadlines}>Dashboard</b></a></li>

                <li className=' flex items-center justify-between w-full text-cyan-100'><a className='flex items-center justify-center gap-2.5' href="/AdminPanel/Bookings"><i className="fa-sharp text-xl fa-solid fa-bookmark"></i><b className=' tracking-wide font-normal text-md' ref={pushHeadlines}>Bookings</b></a> <i ref={pushRightArrowRef} onClick={() => rotate(0)} className="fa-solid text-sm fa-chevron-right cursor-pointer"></i> </li>
                <span ref={pushDropdownRef} className='relative hidden text-gray-300 px-4 items-start justify-center flex-col gap-3.5 t-0 w-full'>
                    {/* <a className='cursor-pointer pl-4' href="/AdminPanel/Bookings" >All Bookings</a> */}
                    <a className='cursor-pointer pl-4' href="/AdminPanel/AddBooking">Add Booking</a>
                    <a className='cursor-pointer pl-4' href="/AdminPanel/EditBooking">Edit Booking</a>
                </span>


                <li className=' flex items-center justify-between w-full text-cyan-100'><a className='flex items-center justify-center gap-2.5' href="/AdminPanel/Rooms"><i className="fa-sharp text-xl fa-solid fa-door-open"></i><b className=' tracking-wide font-normal text-md' ref={pushHeadlines}>Rooms</b></a> <i ref={pushRightArrowRef} onClick={() => rotate(1)} className="fa-solid text-sm fa-chevron-right cursor-pointer"></i> </li>
                <span ref={pushDropdownRef} className='relative hidden text-gray-300 px-4 items-start justify-center flex-col gap-3.5 t-0 w-full'>
                    {/* <a className='cursor-pointer pl-4' href="/AdminPanel/Rooms">All Rooms</a> */}
                    <a className='cursor-pointer pl-4' href="/AdminPanel/addRoom">Add Room</a>
                    <a className='cursor-pointer pl-4' href="/AdminPanel/editRoom">Edit Room</a>
                    <a className='cursor-pointer pl-4' href="/AdminPanel/deleteRoom">Delete Room</a>
                </span>

                <li className=' flex items-center justify-between w-full text-cyan-100'><a className='flex items-center justify-center gap-2.5' href="/AdminPanel/Customers"><i className="text-xl fa-solid fa-user-group"></i><b className=' tracking-wide font-normal text-md' ref={pushHeadlines}>Customers</b></a></li>

                <li className=' flex items-center justify-between w-full text-cyan-100'><a className='flex items-center justify-center gap-2.5' href="/AdminPanel/Hotels"><i className="fa-sharp text-xl fa-solid fa-hotel"></i><b className=' tracking-wide font-normal text-md' ref={pushHeadlines}>Hotels</b></a> <i ref={pushRightArrowRef} onClick={() => rotate(2)} className="fa-solid text-sm fa-chevron-right cursor-pointer"></i> </li>
                <span ref={pushDropdownRef} className='relative hidden text-gray-300 px-6 items-start justify-center flex-col gap-3.5 t-0 w-full'>
                    {/* <a className='cursor-pointer pl-4' href="">All Hotels</a> */}
                    <a className='cursor-pointer pl-4' href="/AdminPanel/Hotels/addhotel">Add Hotel</a>
                    <a className='cursor-pointer pl-4' href="/AdminPanel/editHotel">Edit Hotel</a>
                    <a className='cursor-pointer pl-4' href="/AdminPanel/deleteHotel">Delete Hotel</a>
                </span>

                <li className=' flex items-center justify-between w-full text-cyan-100'><a className='flex items-center justify-center gap-2.5' href="/AdminPanel/Payments"><i className="fa-sharp text-xl fa-solid fa-coins"></i><b className=' tracking-wide font-normal text-md' ref={pushHeadlines}>Payments</b></a> <i ref={pushRightArrowRef} onClick={() => rotate(3)} className="fa-solid text-sm fa-chevron-right cursor-pointer"></i> </li>
                <span ref={pushDropdownRef} className='relative hidden text-gray-300 px-4 items-start justify-center flex-col gap-3.5 t-0 w-full'>
                    <a className='cursor-pointer pl-4' href="">Payment Methods</a>
                    <a className='cursor-pointer pl-4' href="">Invoice List</a>
                    <a className='cursor-pointer pl-4' href="">Invoice Details</a>
                </span>

                <li className=' flex items-center justify-between w-full text-cyan-100'><a className='flex items-center justify-center gap-2.5' href="/AdminPanel/Supports"><i className="fa-solid text-xl fa-comment-dots"></i><b className=' tracking-wide font-normal text-md' ref={pushHeadlines}>Supports</b></a> </li>

                <li className=' flex items-center justify-between w-full text-cyan-100'><a className='flex items-center justify-center gap-2.5' href="/AdminPanel/Settings"><i className="fa-sharp text-xl fa-solid fa-gear"></i><b className=' tracking-wide font-normal text-md' ref={pushHeadlines}>Settings</b></a> </li>

            </ul>
        </div>
    )
}

export default AdminDashboardSidebar