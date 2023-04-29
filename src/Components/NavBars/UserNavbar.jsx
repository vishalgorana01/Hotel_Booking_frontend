import React, { useRef, useState } from 'react'
import styles from '../../Assets/CSS/Navbar.module.css'
import axios from 'axios';
import utilities from '../../Assets/Utility/utility';

export default function UserNavbar(props) {
    const sideBar = useRef();

    const [activeUrl, setActiveUrl] = useState({
        home: true,
        yourBooking: false,
        popularHotels: false,
        rooms: false,
        bookNow: false,
    })

    // sideBar.current.style.transition = "all 0.5s";

    const showSideBar = (e) => {
        sideBar.current.style.transition = "all 0.5s";
        sideBar.current.style.transform = "translateX(0px)";
    }

    const hideSideBar = (e) => {
        sideBar.current.style.transition = "all 0.5s";
        sideBar.current.style.transform = "translateX(-100%)";
    }

    const [userName, setUserName] = useState();

    const getUser = async () => {
        try {
            const loggedInUser = await axios.get(`${utilities.deploy_url}/api/users/${sessionStorage.getItem("userId")}`);
            // console.log(loggedInUser);
            setUserName(loggedInUser.data.userName);
        } catch (error) {
            console.log(error);
        }
    }

    getUser();

    return (
        <>
            <section className='absolute t-0 w-screen overflow-x-hidden' style={{backgroundColor: `${props.bgColor}`}}>
                <nav className={`flex items-center max-h-20 justify-center w-full py-1 md:py-2`}>
                    <div className={`flex items-center justify-between w-11/12 py-2 max-w-7xl`}>
                        <div className='text-cyan-100 font-medium cursor-pointer'>logo</div>
                        <ul className='items-center justify-center py-2 text-cyan-200 hidden md:flex'>
                            <li className='py-1 px-3 cursor-pointer'><a href='/Home' className={activeUrl.home?styles.active:''}>Home</a></li>
                            <li className='py-1 px-3 cursor-pointer ease-linear duration-200 hover:-translate-y-1'><a href='/YourBookings' className={activeUrl.yourBooking?styles.active:''}>Your Bookings</a></li>
                            <li className='py-1 px-3 cursor-pointer ease-linear duration-200 hover:-translate-y-1'><a className={activeUrl.popularHotels?styles.active:''}>Popular Hotels</a></li>
                            <li className='py-1 px-3 cursor-pointer ease-linear duration-200 hover:-translate-y-1'><a className={activeUrl.rooms?styles.active:''}>Rooms</a></li>
                            <li className='py-1 px-3 cursor-pointer ease-linear duration-200 hover:-translate-y-1'><a className={activeUrl.bookNow?styles.active:''}>Book Now</a></li>
                        </ul>
                        <span className='py-1.5 items-center justify-center hidden cursor-pointer rounded-sm mx-3 ease-linear duration-200 hover:-translate-y-1 md:flex'><i className="fa-sharp fa-solid fa-user text-cyan-200 mr-2"></i><button className='text-cyan-200'>{userName}</button></span>

                        <div className='block py-1 px-1 text-cyan-200 cursor-pointer md:hidden' onClick={showSideBar}><i className="fa-sharp fa-solid fa-bars text-xl"></i></div>
                    </div>
                </nav>

                {/* Logged In User Siderbar */}
                <div className='-translate-x-full z-10 px-4 py-1 flex-col fixed h-full w-60 top-0 left-0 ' style={{ background: "#020d1e" }} ref={sideBar}>
                    <div className='flex py-1 px-1 absolute right-3 top-3 my-2 mx-2 font-medium' onClick={hideSideBar}><i className="fa-sharp fa-solid fa-xmark text-cyan-200"></i></div>
                    <div className='text-cyan-50 text-xl py-1 my-2 mb-4 text-start'>logo</div>
                    <ul className='flex justify-start flex-col text-cyan-50'>

                        <span className='flex items-center justify-start py-1 px-2 cursor-pointer bg-slate-400 rounded-sm mb-4' style={{backgroundColor: "#172539"}}><i className="fa-solid fa-magnifying-glass"></i><input type="text" className='outline border-none outline-none bg-transparent px-2' placeholder='Search'/></span>

                        <li className='py-1 mb-2.5 cursor-pointer text-start'><a href='/Home'><i className="fa-sharp fa-solid fa-house mx-2"></i>Home</a></li>
                        <li className='py-1 mb-2.5 cursor-pointer text-start'><a><i className="fa-sharp fa-solid fa-user mx-2"></i> Profile</a></li>
                        <li className='py-1 mb-2.5 cursor-pointer text-start'><a href='/YourBookings'><i className="fa-sharp fa-solid fa-bookmark mx-2"></i>Your Bookings</a></li>
                        <li className='py-1 mb-2.5 cursor-pointer text-start'><a><i className="fa-sharp fa-solid fa-hotel mx-2"></i>Popular hotels</a></li>
                        <li className='py-1 mb-2.5 cursor-pointer text-start'><a><i className="fa-sharp fa-solid fa-person-shelter mx-2"></i>Rooms</a></li>
                        <li className='py-1 mb-2.5 cursor-pointer text-start'><a><i className="fa-sharp fa-solid fa-phone mx-2"></i>Book now</a></li>
                        {/* <li className='py-1 px-2 w-fit mt-2 cursor-pointer border-double border-4 border-indigo-700 rounded mx-3'><button>Book Online</button></li> */}
                    </ul>

                    <span className='absolute left-4 bottom-2 py-1 mb-2.5 cursor-pointer text-cyan-200'><a href='/'><i className="fa-sharp fa-solid fa-right-from-bracket text-cyan-200 mx-2"></i>Logout</a></span>
                </div>
            </section>
        </>
    )
}
