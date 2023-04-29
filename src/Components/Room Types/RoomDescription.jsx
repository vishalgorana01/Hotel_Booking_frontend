import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styles from '../../Assets/CSS/RoomDescription.module.css';
import roomImage from '../../Assets/Images/twig-near-ceramic-cups.jpg'
import utilities from '../../Assets/Utility/utility';

function RoomDescription(props) {
    // const [display, setDisplay] = useState('hidden');

    console.log(props.roomType.roomServices[0])
    // console.log(`http://localhost:8800/${props.roomType.roomImages[0]}`)

    const queryParameters = new URLSearchParams(window.location.search)
    console.log(queryParameters)
    const name = queryParameters.get('name')
    console.log(name)

    const [Room, setRoom] = useState({
        roomName: '',
        roomDescription: '',
        roomServices: [],
        // roomImages: [],
        roomPrice: ''
    })

    const getRoomDescripiton = async () => {
        try {
            let hotelInformation = await axios.get(`${utilities.deploy_url}api/hotels/${name}`);
            hotelInformation = hotelInformation.data

            setRoom({
                roomName: props.roomType.roomName,
                roomDescription: props.roomType.roomDescription,
                // roomImages: props.roomType.roomImages,
                roomServices: props.roomType.roomServices,
                roomPrice: props.roomType.roomPrice
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getRoomDescripiton();
    }, [])

    return (
        <>
            <section className={`${styles.roomDescriptionContainer} ${props.displayType} fixed top-0 left-0 z-50 w-full h-screen overflow-y-scroll py-3 items-start justify-center px-1 sm:py-12 sm:px-8 `} style={{ backgroundColor: '#000000ad' }}>
                <div className='relative flex flex-col items-center rounded-md justify-center gap-4 px-4 py-12 w-full max-w-7xl lg:items-start lg:flex-row' style={{ border: '2px solid red', backgroundColor: 'floralwhite' }}>

                    <i className="absolute top-3 right-3 cursor-pointer text-xl fa-sharp fa-solid fa-xmark" onClick={() => props.setDisplayType('hidden')}></i>

                    <div className='flex flex-col items-center justify-center lg:w-1/2'>
                        <img src={roomImage} alt="error loading" />
                        <span className='w-full flex items-center justify-start'>
                            <img className='w-1/3 h-full' src={roomImage} alt="error loading" />
                            <img className='w-1/3' src={roomImage} alt="error loading" />
                            <span className=' relative flex items-center justify-center w-1/3'>
                                <img className='w-full h-full' src={roomImage} alt="error loading" />
                                <span className='absolute text-white top-0 cursor-pointer left-0 w-full h-full flex items-center justify-center text-sm sm:text-md lg:text-2xl' style={{ backgroundColor: '#000000a1' }}>
                                    +40 Photos
                                </span>
                            </span>
                        </span>

                        <span className='w-full grid grid-cols-3 gap-1.5 py-5'>
                            <img className='w-full' src={roomImage} alt="error loading" />
                            <img className='w-full' src={roomImage} alt="error loading" />
                            <img className='w-full' src={roomImage} alt="error loading" />

                            <img className='w-full' src={roomImage} alt="error loading" />
                            <img className='w-full' src={roomImage} alt="error loading" />
                            <img className='w-full' src={roomImage} alt="error loading" />

                            <img className='w-full' src={roomImage} alt="error loading" />
                            <img className='w-full' src={roomImage} alt="error loading" />
                            <img className='w-full' src={roomImage} alt="error loading" />
                        </span>
                    </div>

                    <div className='flex flex-col items-start justify-start h-full lg:w-1/2'>
                        <span className='flex items-center w-full justify-between mb-3.5'>
                            <h4 className='text-start text-xl font-semibold text-black'>{props.roomType.roomName}</h4>
                        </span>

                        <span className='flex flex-wrap items-center justify-start mb-4 gap-1'>

                            <span className='flex items-center justify-center rounded-sm p-1 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{props.roomType.roomServices[0]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-1 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{props.roomType.roomServices[1]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-1 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{props.roomType.roomServices[2]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-1 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{props.roomType.roomServices[3]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-1 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{props.roomType.roomServices[4]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-1 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{props.roomType.roomServices[5]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-1 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{props.roomType.roomServices[6]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-1 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{props.roomType.roomServices[7]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-1 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{props.roomType.roomServices[8]}</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm p-1 gap-0.5 border-1 border-solid border-black' style={{ border: "1px solid #000000d6" }}>
                                <span className=" text-sm material-symbols-outlined">
                                    psychiatry
                                </span>
                                <p className='text-xs'>{props.roomType.roomServices[9]}</p>
                            </span>

                        </span>

                        <span className='flex justify-start items-center'>
                            <h4 className='text-md font-semibold text-black'>Room Type :&nbsp;</h4>
                            <p className='text-md'>{props.roomType.roomName}</p>
                        </span>

                        <span className='flex flex-col items-center justify-start mb-5 w-full'>
                            <span className='flex items-center justify-start w-full mb-3.5'>
                                <p className='text-sm'>one extra large bed &nbsp;</p>
                                <span className="material-symbols-outlined">
                                    king_bed
                                </span>
                            </span>

                            <p className='text-sm text-justify'>
                                {props.roomType.roomDescription}
                            </p>
                        </span>

                        <span className='flex flex-col items-start justify-center w-full mb-5'>
                            <h4 className='text-start w-full text-black text-md font-semibold mb-3.5'>In private kitchen</h4>

                            <span className='grid grid-cols-2 gap-x-2 gap-y-1.5 sm:gap-x-12'>
                                <span className='w-full gap-1.5 text-md font-lighter flex items-center justify-start'>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    <p className="text-left">{props.roomType.roomServices[0]}</p>
                                </span>

                                <span className='w-full gap-1.5 text-md font-lighter flex items-center justify-start'>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    <p className="text-left">{props.roomType.roomServices[1]}</p>
                                </span>

                                <span className='w-full gap-1.5 text-md font-lighter flex items-center justify-start'>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    <p className="text-left">{props.roomType.roomServices[2]}</p>
                                </span>
                            </span>
                        </span>

                        <span className='flex flex-col items-start justify-center w-full mb-5'>
                            <h4 className='text-start w-full text-black text-md font-semibold mb-3.5'>In private bathroom</h4>

                            <span className='grid grid-cols-2 gap-x-2 gap-y-1.5 sm:gap-x-12'>
                                <span className='w-full gap-1.5 text-md font-lighter flex items-center justify-start'>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    <p className="text-left">{props.roomType.roomServices[3]}</p>
                                </span>

                                <span className='w-full gap-1.5 text-md font-lighter flex items-center justify-start'>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    <p className="text-left">{props.roomType.roomServices[4]}</p>
                                </span>

                                <span className='w-full gap-1.5 text-md font-lighter flex items-center justify-start'>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    <p className="text-left">{props.roomType.roomServices[5]}</p>
                                </span>

                                <span className='w-full gap-1.5 text-md font-lighter flex items-center justify-start'>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    <p className="text-left">{props.roomType.roomServices[6]}</p>
                                </span>

                                <span className='w-full gap-1.5 text-md font-lighter flex items-center justify-start'>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    <p className="text-left">{props.roomType.roomServices[7]}</p>
                                </span>

                                <span className='w-full gap-1.5 text-md font-lighter flex items-center justify-start'>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    <p className="text-left">{props.roomType.roomServices[8]}</p>
                                </span>

                                <span className='w-full gap-1.5 text-md font-lighter flex items-center justify-start'>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    <p className="text-left">{props.roomType.roomServices[9]}</p>
                                </span>

                                <span className='w-full gap-1.5 text-md font-lighter flex items-center justify-start'>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    <p className="text-left">{props.roomType.roomServices[10]}</p>
                                </span>

                                <span className='w-full gap-1.5 text-md font-lighter flex items-center justify-start'>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    <p className="text-left">{props.roomType.roomServices[11]}</p>
                                </span>

                            </span>
                        </span>

                        <span className='flex flex-col items-start justify-center w-full mb-5'>
                            <h4 className='text-start w-full text-black text-md font-semibold mb-3.5'>In view</h4>

                            <span className='grid grid-cols-2 gap-x-2 gap-y-1.5 sm:gap-x-12'>
                                <span className='w-full gap-1.5 text-md font-lighter flex items-center justify-start'>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    <p className="text-left">{props.roomType.roomServices[12]}</p>
                                </span>

                                <span className='w-full gap-1.5 text-md font-lighter flex items-center justify-start'>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    <p className="text-left">{props.roomType.roomServices[0]}</p>
                                </span>

                                <span className='w-full gap-1.5 text-md font-lighter flex items-center justify-start'>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    <p className="text-left">{props.roomType.roomServices[1]}</p>
                                </span>

                                <span className='w-full gap-1.5 text-md font-lighter flex items-center justify-start'>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    <p className="text-left">{props.roomType.roomServices[2]}</p>
                                </span>

                                <span className='w-full gap-1.5 text-md font-lighter flex items-center justify-start'>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    <p className="text-left">{props.roomType.roomServices[3]}</p>
                                </span>

                            </span>
                        </span>

                        <span className='flex flex-col items-start justify-center w-full mb-5'>
                            <h4 className='text-start w-full text-black text-md font-semibold mb-3.5'>Room facilities</h4>

                            <span className='grid grid-cols-2 gap-x-2 gap-y-1.5 sm:gap-x-12'>
                                <span className='w-full gap-1.5 text-md font-lighter flex items-center justify-start'>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    <p className="text-left">{props.roomType.roomServices[0]}</p>
                                </span>

                                <span className='w-full gap-1.5 text-md font-lighter flex items-center justify-start'>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    <p className="text-left">{props.roomType.roomServices[10]}</p>
                                </span>

                                <span className='w-full gap-1.5 text-md font-lighter flex items-center justify-start'>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    <p className="text-left">{props.roomType.roomServices[11]}</p>
                                </span>

                                <span className='w-full gap-1.5 text-md font-lighter flex items-center justify-start'>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    <p className="text-left">{props.roomType.roomServices[8]}</p>
                                </span>

                                <span className='w-full gap-1.5 text-md font-lighter flex items-center justify-start'>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    <p className="text-left">{props.roomType.roomServices[2]}</p>
                                </span>

                                <span className='w-full gap-1.5 text-md font-lighter flex items-center justify-start'>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    <p className="text-left">{props.roomType.roomServices[0]}</p>
                                </span>

                                <span className='w-full gap-1.5 text-md font-lighter flex items-center justify-start'>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    <p className="text-left">{props.roomType.roomServices[9]}</p>
                                </span>

                                <span className='w-full gap-1.5 text-md font-lighter flex items-center justify-start'>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    <p className="text-left">{props.roomType.roomServices[6]}</p>
                                </span>

                                <span className='w-full gap-1.5 text-md font-lighter flex items-center justify-start'>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    <p className="text-left">{props.roomType.roomServices[2]}</p>
                                </span>

                                <span className='w-full gap-1.5 text-md font-lighter flex items-center justify-start'>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    <p className="text-left">{props.roomType.roomServices[0]}</p>
                                </span>

                                <span className='w-full gap-1.5 text-md font-lighter flex items-center justify-start'>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    <p className="text-left">{props.roomType.roomServices[1]}</p>
                                </span>

                                <span className='w-full gap-1.5 text-md font-lighter flex items-center justify-start'>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    <p className="text-left">{props.roomType.roomServices[9]}</p>
                                </span>

                                <span className='w-full gap-1.5 text-md font-lighter flex items-center justify-start'>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    <p className="text-left">{props.roomType.roomServices[10]}</p>
                                </span>

                                <span className='w-full gap-1.5 text-md font-lighter flex items-center justify-start'>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    <p className="text-left">{props.roomType.roomServices[2]}</p>
                                </span>

                                <span className='w-full gap-1.5 text-md font-lighter flex items-center justify-start'>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    <p className="text-left">{props.roomType.roomServices[10]}</p>
                                </span>

                            </span>
                        </span>

                        <span className='flex flex-col items-start justify-center w-full mb-5'>
                            <h4 className='text-start w-full text-black text-md font-semibold mb-3.5'>Smoking : &nbsp;</h4>
                            <p className='text-start text-md'>Not allowed</p>
                        </span>

                    </div>


                </div>
            </section>
        </>
    )
}

export default RoomDescription