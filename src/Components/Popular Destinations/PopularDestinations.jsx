import React, { useRef } from 'react'
import {useNavigate} from 'react-router-dom'
import destinations from '../../Assets/Images/hotel1.jpg'
import styles from '../../Assets/CSS/PopularDestination.module.css'
// import axios from 'axios'

function PopularDestinations() {
    const rightArrow = useRef();
    const rightArrowRef = useRef([]);
    const pushRightArrow = (ele)=>rightArrowRef.current.push(ele);

    const moveRight = () => {
        rightArrow.current.style.transition = 'all 0.3s'
        rightArrow.current.style.transform = 'translateX(6px)'
    }

    const moveLeft = () => {
        rightArrow.current.style.transition = 'all 0.3s'
        rightArrow.current.style.transform = 'translateX(0px)'
    }

    function left(index){
        rightArrowRef.current[index].style.transition = "all 0.3s"
        rightArrowRef.current[index].style.transform = "translateX(6px)"
    }

    function Right(index){
        rightArrowRef.current[index].style.transition = "all 0.3s"
        rightArrowRef.current[index].style.transform = "translateX(0px)"
    }

    const navigate = useNavigate();
    const getDestinationHotels = (givenQuery) => {
        navigate(`/HotelsByDestination?destination=${givenQuery}`)
    }

    return (
        <section className='flex relative w-screen h-auto mt-32 mb-32 items-start justify-center'>
            <div className='flex relative flex-col gap-4 h-auto p-2 w-full max-w-7xl justify-center items-center md:justify-between'>
                <div className='flex w-full flex-col px-3 gap-4 items-center justify-between py-2 md:flex-row md:gap-0'>
                    <div className='flex flex-col items-center justify-center py-1 gap-4 md:items-start'>
                        <h2 className='text-3xl'>Popular Desinations</h2>
                        <p className={`${styles.destinationsDetails} text-sm max-w-md`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci error odit harum labore cupiditate voluptatum qui voluptatem.</p>
                    </div>
                    <div className='flex items-center justify-center p-0.5 bg-red-500 rounded-sm'>
                        <button onMouseEnter={moveRight} onMouseLeave={moveLeft} className='flex items-center justify-center bg-red-500 text-cyan-200 rounded-sm py-2 px-4 text-md'>view all<i className="fa-sharp fa-solid ml-2 mt-1 fa-arrow-right" ref={rightArrow}></i></button>
                    </div>
                </div>

                <div className={`${styles.destinationsPhoto} grid px-4 gap-3 grid-cols-2 w-full md:grid-cols-3 `}>
                    <div onMouseEnter={()=>left(0)} onMouseLeave={()=>Right(0)} onClick={() => getDestinationHotels('Bhopal')} className={`relative w-full rounded-sm flex item-center justify-center cursor-pointer forHover`}>
                        <img className='rounded-sm' src={destinations} alt="error laoding" />
                        <div className='flex items-end justify-start bg-blend-darken absolute w-full h-full top-0 left-0' style={{ backgroundColor: 'rgb(0 3 8 / 74%)' }}>
                            <div className='flex items-end justify-center px-4 py-3'>
                                <span className='flex flex-col'>
                                    <h4 className='text-cyan-100'>123 hotels</h4>
                                    <h3 className='text-2xl text-cyan-100'>Bhopal</h3>
                                </span>
                                <i className="fa-sharp text-cyan-100 fa-solid ml-2 mb-1 text-md fa-arrow-right" ref={pushRightArrow}></i>
                            </div>
                        </div>
                    </div>

                    <div onMouseEnter={()=>left(1)} onMouseLeave={()=>Right(1)} onClick={() => getDestinationHotels('Indore')} className={`relative w-full rounded-sm flex item-center justify-center cursor-pointer forHover`}>
                        <img className='rounded-sm' src={destinations} alt="error laoding" />
                        <div className='flex items-end justify-start bg-blend-darken absolute w-full h-full top-0 left-0' style={{ backgroundColor: 'rgb(0 3 8 / 74%)' }}>
                            <div className='flex items-end justify-center px-4 py-3'>
                                <span className='flex flex-col'>
                                    <h4 className='text-cyan-100'>123 hotels</h4>
                                    <h3 className='text-2xl text-cyan-100'>Indore</h3>
                                </span>
                                <i className="fa-sharp text-cyan-100 fa-solid ml-2 mb-1 text-md fa-arrow-right" ref={pushRightArrow}></i>
                            </div>
                        </div>
                    </div>

                    <div onMouseEnter={()=>left(2)} onMouseLeave={()=>Right(2)} onClick={() => getDestinationHotels('Udaipur')} className={`relative w-full rounded-sm flex item-center justify-center cursor-pointer forHover`}>
                        <img className='rounded-sm' src={destinations} alt="error laoding" />
                        <div className='flex items-end justify-start bg-blend-darken absolute w-full h-full top-0 left-0' style={{ backgroundColor: 'rgb(0 3 8 / 74%)' }}>
                            <div className='flex items-end justify-center px-4 py-3'>
                                <span className='flex flex-col'>
                                    <h4 className='text-cyan-100'>123 hotels</h4>
                                    <h3 className='text-2xl text-cyan-100'>Udaipur</h3>
                                </span>
                                <i className="fa-sharp text-cyan-100 fa-solid ml-2 mb-1 text-md fa-arrow-right" ref={pushRightArrow}></i>
                            </div>
                        </div>
                    </div>

                    <div onMouseEnter={()=>left(3)} onMouseLeave={()=>Right(3)} onClick={() => getDestinationHotels('Goa')} className={`relative w-full rounded-sm flex item-center justify-center cursor-pointer forHover`}>
                        <img className='rounded-sm' src={destinations} alt="error laoding" />
                        <div className='flex items-end justify-start bg-blend-darken absolute w-full h-full top-0 left-0' style={{ backgroundColor: 'rgb(0 3 8 / 74%)' }}>
                            <div className='flex items-end justify-center px-4 py-3'>
                                <span className='flex flex-col'>
                                    <h4 className='text-cyan-100'>123 hotels</h4>
                                    <h3 className='text-2xl text-cyan-100'>Goa</h3>
                                </span>
                                <i className="fa-sharp text-cyan-100 fa-solid ml-2 mb-1 text-md fa-arrow-right" ref={pushRightArrow}></i>
                            </div>
                        </div>
                    </div>

                    <div onMouseEnter={()=>left(4)} onMouseLeave={()=>Right(4)} onClick={() => getDestinationHotels('Hyderabad')} className={`relative w-full rounded-sm flex item-center justify-center cursor-pointer forHover`}>
                        <img className='rounded-sm' src={destinations} alt="error laoding" />
                        <div className='flex items-end justify-start bg-blend-darken absolute w-full h-full top-0 left-0' style={{ backgroundColor: 'rgb(0 3 8 / 74%)' }}>
                            <div className='flex items-end justify-center px-4 py-3'>
                                <span className='flex flex-col'>
                                    <h4 className='text-cyan-100'>123 hotels</h4>
                                    <h3 className='text-2xl text-cyan-100'>Hyderabad</h3>
                                </span>
                                <i className="fa-sharp text-cyan-100 fa-solid ml-2 mb-1 text-md fa-arrow-right" ref={pushRightArrow}></i>
                            </div>
                        </div>
                    </div>

                    <div onMouseEnter={()=>left(5)} onMouseLeave={()=>Right(5)} onClick={() => getDestinationHotels('Ahmedabad')} className={`relative w-full rounded-sm flex item-center justify-center cursor-pointer forHover`}>
                        <img className='rounded-sm' src={destinations} alt="error laoding" />
                        <div className='flex items-end justify-start bg-blend-darken absolute w-full h-full top-0 left-0' style={{ backgroundColor: 'rgb(0 3 8 / 74%)' }}>
                            <div className='flex items-end justify-center px-4 py-3'>
                                <span className='flex flex-col'>
                                    <h4 className='text-cyan-100'>123 hotels</h4>
                                    <h3 className='text-2xl text-cyan-100'>Ahmedabad</h3>
                                </span>
                                <i className="fa-sharp text-cyan-100 fa-solid ml-2 mb-1 text-md fa-arrow-right" ref={pushRightArrow}></i>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default PopularDestinations