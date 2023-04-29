import React, { useState } from 'react'
import BookingSidebar from '../SideBars/BookingSidebar'
import bookedImage from '../../Assets/Images/hotel2.jpg'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../../Assets/CSS/Home.module.css"
import { useNavigate } from 'react-router-dom';



function Payment() {
    const [startDate, setCheckIndate] = useState();
    const [endDate, setCheckOutdate] = useState();

    const navigate = useNavigate()
    const Reserve = ()=> {
        alert('Your Reserve this')
        navigate("/YourBookings")
    }

    return (
        <>
            <section className='flex items-center justify-center w-screen pt-32 pb-14 px-6 sm:px-8 lg:px-12'>
                <div className='flex items-center justify-center w-full max-w-7xl'>

                    <div className='flex flex-col items-start gap-x-4 gap-y-4 justify-center w-full xl:flex-row'>
                        {/* booking Sidebar */}
                        <BookingSidebar />

                        <div className='flex flex-col items-center gap-y-5 justify-center w-full'>
                            <span className='flex gap-x-3 gap-y-5 items-start justify-center py-3 px-2 w-full flex-col md:flex-row' style={{ backgroundColor: 'ghostwhite', border: '2px solid lightgray' }}>
                                <span className='w-60'>
                                    <img src={bookedImage} alt="loading error" />
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

                            <span className='flex flex-col items-center gap-y-4 justify-center py-3 px-3 w-full' style={{ backgroundColor: 'ghostwhite', border: '2px solid lightgray' }}>
                                <h1 className='text-lg text-black font-semibold text-left w-full sm:text-xl lg:text-2xl'>How do you want to play?</h1>

                                <span className='flex flex-col gap-3 items-start justify-start w-full sm:items-center sm:flex-row'>
                                    <span className='flex flex-col gap-y-0.5 items-start justify-center w-full'>
                                        <label className='text-sm text-black font-semibold'>Cardholder's name</label>
                                        <input type="text" name="" id="" className='outline-none px-1 w-full py-1 text-sm' required style={{ background: 'transparent', border: '2px solid lightgray' }} />
                                    </span>
                                    <span className='flex flex-col gap-y-0.5 items-start justify-center w-full'>
                                        <label className='text-sm text-black font-semibold'>last Name</label>
                                        <select name="" id="" className='outline-none px-1 w-full py-1 text-sm' required style={{ background: 'transparent', border: '2px solid lightgray' }}>
                                            <option value="">Debit card</option>
                                            <option value="">Credit card</option>
                                        </select>
                                    </span>
                                </span>

                                <span className='flex flex-col gap-3 items-start justify-start w-full sm:items-center sm:flex-row'>
                                    <span className='flex flex-col gap-y-0.5 items-start justify-center w-full'>
                                        <label className='text-sm text-black font-semibold'>card number</label>
                                        <input type="number" name="" id="" className='outline-none w-full px-1 py-1 text-sm' required style={{ background: 'transparent', border: '2px solid lightgray' }} />
                                    </span>
                                    <span className='flex flex-col gap-y-0.5 items-start justify-center w-full'>
                                        <label className='text-sm text-black font-semibold'>cvc code</label>
                                        <input type="number" name="" id="" className='outline-none w-full px-1 py-1 text-sm' required style={{ background: 'transparent', border: '2px solid lightgray' }} />
                                    </span>
                                </span>

                                <span className='flex flex-col gap-3 items-start justify-start w-full sm:items-center sm:flex-row'>
                                    <span className='flex flex-col gap-y-0.5 items-start justify-center w-full'>
                                        <label className='text-sm text-black font-semibold'>expiry date</label>
                                        <span className='flex items-center hover:cursor-pointer justify-center border-2 rounded-sm ' style={{ background: 'transparent', border: '2px solid lightgray' }}><DatePicker required className={`${styles.datePicker} outline-none w-full px-1 py-1 text-sm text-black`} selected={startDate} onChange={(date = Date) => setCheckIndate(date)} placeholderText="04/19/2025" /></span>
                                    </span>
                                </span>
                            </span>

                            <span className='w-full my-3 flex items-center justify-start'>
                                <button className='text-xl font-semibold py-2 px-4 rounded-sm text-cyan-200' style={{ backgroundColor: 'rgb(11 36 75)' }} onClick={()=>Reserve()}>Reserve</button>
                            </span>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Payment