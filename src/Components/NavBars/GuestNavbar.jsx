import React, { useRef } from 'react'
import styles from '../../Assets/CSS/Navbar.module.css'
import logo from '../../Assets/Images/logo.png'

export default function GuestNavbar(props) {
    const sideBar = useRef();

    const { bgColor } = props
    // bgColor = 'black'

    // sideBar.current.style.transition = "all 0.5s";
    const showSideBar = (e) => {
        sideBar.current.style.transition = "all 0.5s";
        sideBar.current.style.transform = "translateX(0px)";
    }

    const hideSideBar = (e) => {
        sideBar.current.style.transition = "all 0.5s";
        sideBar.current.style.transform = "translateX(-100%)";
    }

    return (
        <>
            <section className='absolute t-0 w-screen overflow-x-hidden z-50' style={{ backgroundColor: bgColor }}>
                <nav className={`flex items-center max-h-20 justify-center w-full py-1 md:py-2`}>
                    <div className={`flex items-center justify-between w-11/12 py-2 max-w-7xl`}>
                        <span className='flex items-center justify-center'>
                            <img className='h-20 w-20' src={logo} alt="logo" />
                            <p className=' -ml-2.5 text-cyan-500 tracking-widest'>OTELIO</p>
                        </span>
                        <ul className='items-center justify-center py-2 text-cyan-200 hidden lg:flex'>
                            <li className='py-1 px-3 cursor-pointer'><a className={styles.active}>Home</a></li>
                            <li className='py-1 px-3 cursor-pointer ease-linear duration-200 hover:-translate-y-1'><a>About us</a></li>
                            <li className='py-1 px-3 cursor-pointer ease-linear duration-200 hover:-translate-y-1'><a>All Hotels</a></li>
                            <li className='py-1 px-3 cursor-pointer ease-linear duration-200 hover:-translate-y-1'><a>Rooms</a></li>
                            <li className='py-1 px-3 cursor-pointer ease-linear duration-200 hover:-translate-y-1'><a>Contact us</a></li>
                            <li className='py-1.5 px-4 cursor-pointer rounded-sm bg-red-500 mx-3 ease-linear duration-200 hover:-translate-y-1' onClick={() => { document.location.href = "/Register" }}><button>Sign up</button></li>
                        </ul>
                        <div className='block py-1 px-1 text-cyan-200 cursor-pointer lg:hidden' onClick={showSideBar}><i className="fa-sharp fa-solid fa-bars text-xl"></i></div>
                    </div>
                </nav>

                {/* Guest Sidebar */}
                <div className='-translate-x-full z-20 px-4 py-1 flex-col fixed h-full w-60 top-0 left-0 ' style={{ background: "#020d1e" }} ref={sideBar}>
                    <div className='flex py-1 px-1 absolute right-3 top-3 my-2 mx-2 font-medium' onClick={hideSideBar}><i className="fa-sharp fa-solid fa-xmark text-cyan-200"></i></div>
                    <span className='flex w-full items-center justify-start -ml-4'>
                        <img className='h-20 w-20' src={logo} alt="logo" />
                        <p className=' -ml-2.5 text-cyan-500 tracking-widest'>OTELIO</p>
                    </span>
                    <ul className='flex justify-start flex-col text-cyan-50'>

                        <span className='flex items-center justify-start py-1 px-2 cursor-pointer bg-slate-400 rounded-sm mb-4' style={{ backgroundColor: "#172539" }}><i className="fa-solid fa-magnifying-glass"></i><input type="text" className='outline border-none outline-none bg-transparent px-2' placeholder='Search' /></span>

                        <li className='text-start py-1 mb-2.5 cursor-pointer'><a><i className="fa-sharp fa-solid fa-house mx-2"></i>Home</a></li>
                        <li className='text-start py-1 mb-2.5 cursor-pointer'><a><i className="fa-solid fa-user-group mx-2"></i>About us</a></li>
                        <li className='text-start py-1 mb-2.5 cursor-pointer'><a><i className="fa-sharp fa-solid fa-bookmark mx-2"></i>Explore</a></li>
                        <li className='text-start py-1 mb-2.5 cursor-pointer'><a><i className="fa-sharp fa-solid fa-hotel mx-2"></i>Trending hotels</a></li>
                        {/* <li className='py-1 mb-2.5 cursor-pointer'><a><i className="fa-sharp fa-solid fa-person-shelter mx-2"></i>Rooms</a></li> */}
                        <li className='text-start py-1 mb-2.5 cursor-pointer'><a href='/Register'><i className="fa-sharp fa-solid fa-user mx-2"></i>Sign up</a></li>
                        {/* <li className='py-1 px-2 w-fit mt-2 cursor-pointer border-double border-4 border-indigo-700 rounded mx-3'><button>Book Online</button></li> */}
                    </ul>

                    <span className='absolute left-4 bottom-2 py-1 mb-2.5 cursor-pointer text-cyan-200'><a><i className="fa-sharp fa-solid fa-right-from-bracket text-cyan-200 mx-2"></i>Logout</a></span>
                </div>
            </section>
        </>
    )
}
