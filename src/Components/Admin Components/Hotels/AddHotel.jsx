import React, { useState } from 'react'
import axios from 'axios'
import styles from '../../../Assets/CSS/Admin.module.css'
import AddRoom from '../Rooms/AddRoom';
import Rooms from '../Rooms/Rooms';
import utilities from '../../../Assets/Utility/utility';

function AddHotel() {
    // const boxColor = 'rgb(0 22 55)';
    const boxColor = '#020d1e';

    const [socialMedia, setSocialMedia] = useState(
        {
            instagram: '',
            facebook: '',
            pintrest: '',
            twitter: '',
            linkedIn: ''
        }
    )

    const [comfortRoom, setComfortRoomDetails] = useState(
        {
            roomName: '',
            roomImages: [],
            roomPrice: '',
            roomServices: [],
            roomDescription: ''
        }
    )

    const [Deluxe, setDeluxeRoomDetails] = useState(
        {
            roomName: '',
            roomImages: [],
            roomPrice: '',
            roomServices: [],
            roomDescription: ''
        }
    )

    const [Luxury, setLuxuryRoomDetails] = useState(
        {
            roomName: '',
            roomImages: [],
            roomPrice: '',
            roomServices: [],
            roomDescription: ''
        }
    )

    const [contactDetails, setContactDetails] = useState({
        name: '',
        email: '',
        phoneNumber1: '',
        phoneNumber2: ''
    })

    const [hotel, setHotelinfo] = useState(
        {
            name: "",
            description: "",
            startingPrice: '',
            address: "",
            images: [],
            type: '',
            destination: 'Select a destination',

            comfort: comfortRoom,
            deluxe: Deluxe,
            luxury: Luxury,

            media: socialMedia,
            features: [],

            contact: contactDetails,
            videoLink: ""
        }
    )

    const handleChange = (e) => {
        const { name, value } = e.target
        // console.log(value)
        setHotelinfo({
            ...hotel,
            // ...hotel.rooms.comfortRoom,
            [name]: value
        },
            console.log(hotel)
        )
    }

    const handleChangeSocialMedia = (e) => {
        const { name, value } = e.target
        // console.log(name, " --> ", value)

        setSocialMedia({
            ...socialMedia,
            [name]: value
        })

        setHotelinfo({
            ...hotel,
            media: socialMedia
        })

        console.log(hotel)
    }

    // const [destination, setDestination] = useState('')

    const handleChangeRooms = (ele, roomType) => {
        const { name, value } = ele.target
        console.log(name, " --> ", roomType, " --> ", value)
        console.log()

        if (roomType == 'comfortRoom') {
            comfortRoom[name] = value

            setHotelinfo({
                ...hotel,
                comfort: comfortRoom
            })
        }
        else if (roomType == 'Luxury') {
            Luxury[name] = value

            setHotelinfo({
                ...hotel,
                comfort: comfortRoom
            })
        }
        else if (roomType == 'Deluxe') {
            Deluxe[name] = value

            setHotelinfo({
                ...hotel,
                comfort: comfortRoom
            })
        }
    }


    function convertToBase64(file) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result)
            };
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }

    function convertArrayOfFiles(arrayFiles) {

    }

    const handleChangeRoomsImage = async (ele, files, roomType) => {
        console.log(files.length)

        if (roomType == 'comfortRoom') {
            let preImages = files
            comfortRoom.roomImages = []

            comfortRoom.roomImages = preImages

            setHotelinfo({
                ...hotel,
                comfort: comfortRoom
            })

            console.log(hotel)
        }
        else if (roomType == 'Deluxe') {
            let preImages = files
            Deluxe.roomImages = []
            preImages = (files)

            Deluxe.roomImages = preImages

            setHotelinfo({
                ...hotel,
                deluxe: Deluxe
            })

            console.log(hotel)
        }
        else if (roomType == 'Luxury') {
            let preImages = files

            Luxury.roomImages = []
            preImages = (files)

            Luxury.roomImages = preImages

            setHotelinfo({
                ...hotel,
                luxury: Luxury
            })

            console.log(hotel)
        }
    }

    const handleServices = (givenService, roomType, checked) => {
        console.log(hotel)

        if (roomType == 'comfortRoom') {
            let preServices = comfortRoom.roomServices
            if (checked) {
                preServices.push(givenService);
            }
            else {
                let index = preServices.indexOf(givenService)
                preServices.splice(index, 1)

            }

            console.log(hotel)

        }
        else if (roomType == 'Deluxe') {
            let preServices = Deluxe.roomServices
            if (checked) {
                preServices.push(givenService);
            }
            else {
                let index = preServices.indexOf(givenService)
                preServices.splice(index, 1)

            }

            console.log(hotel)

        }
        else if (roomType == 'Luxury') {
            let preServices = Luxury.roomServices
            if (checked) {
                preServices.push(givenService);
            }
            else {
                let index = preServices.indexOf(givenService)
                preServices.splice(index, 1)

            }

            console.log(hotel)
        }

    }


    const handleFeatures = (givenFeatues, checked) => {
        let preFeatures = hotel.features
        if (checked) {
            preFeatures.push(givenFeatues)
        }
        else {
            let index = preFeatures.indexOf(givenFeatues)
            preFeatures.splice(index, 1)
        }

        setHotelinfo({
            ...hotel,
            features: preFeatures
        })

        console.log(hotel)
    }

    const handleContactDetails = (e) => {
        const { name, value } = e.target

        setContactDetails({
            ...contactDetails,
            [name]: value
        })

        setHotelinfo({
            ...hotel,
            contact: contactDetails
        })

        console.log(hotel)
    }

    const handleHotelImages = async (ele, files) => {
        console.log(files)

        hotel.images = files

        console.log(hotel)
    }


    const addHotel = async (e) => {
        // const { name, description } = hotel
        const formData = new FormData()
        formData.append('name', hotel.name)
        formData.append('description', hotel.description)
        formData.append('type', hotel.type)
        formData.append('address', hotel.address)
        formData.append('destination', hotel.destination)
        formData.append('startingPrice', hotel.startingPrice)

        // comfort room
        formData.append('comfortRoomName', hotel.comfort.roomName)
        for (let i = 0; i < hotel.comfort.roomImages.length; i++) {
            formData.append('comfortRoomImages', hotel.comfort.roomImages[i])
        }
        formData.append('comfortRoomPrice', hotel.comfort.roomPrice)
        formData.append('comfortRoomServices', hotel.comfort.roomServices)
        formData.append('comfortRoomDescription', hotel.comfort.roomDescription)

        // Deluxe room
        formData.append('deluxeRoomName', hotel.deluxe.roomName)
        for (let i = 0; i < hotel.deluxe.roomImages.length; i++) {
            formData.append('deluxeRoomImages', hotel.deluxe.roomImages[i])
        }
        formData.append('deluxeRoomPrice', hotel.deluxe.roomPrice)
        formData.append('deluxeRoomServices', hotel.deluxe.roomServices)
        formData.append('deluxeRoomDescription', hotel.deluxe.roomDescription)

        // Luxury room
        formData.append('luxuryRoomName', hotel.luxury.roomName)
        for (let i = 0; i < hotel.luxury.roomImages.length; i++) {
            formData.append('luxuryRoomImages', hotel.luxury.roomImages[i])
        }
        formData.append('luxuryRoomPrice', hotel.luxury.roomPrice)
        formData.append('luxuryRoomServices', hotel.luxury.roomServices)
        formData.append('luxuryRoomDescription', hotel.luxury.roomDescription)

        formData.append('features', hotel.features)

        formData.append('instagram', hotel.media.instagram)
        formData.append('facebook', hotel.media.facebook)
        formData.append('twitter', hotel.media.twitter)
        formData.append('linkedin', hotel.media.linkedIn)
        formData.append('pintrest', hotel.media.pintrest)

        formData.append('contactName', hotel.contact.name)
        formData.append('contactEmail', hotel.contact.email)
        formData.append('contactPhoneNumber1', hotel.contact.phoneNumber1)
        formData.append('contactPhoneNumber2', hotel.contact.phoneNumber2)

        for (let i = 0; i < hotel.images.length; i++) {
            formData.append('hotelImages', hotel.images[i])
        }

        formData.append('videoLink', hotel.videoLink)

        axios.post(`${utilities.deploy_url}/api/hotels`, formData)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <section className={`${styles.modifiedScrollbar} flex flex-col items-center justify-start max-w-7xl py-4 px-3 h-screen overflow-y-scroll w-full`}>
                <div className='flex items-center justify-center w-full px-1 mb-3'>
                    <span className='flex items-center justify-start w-full'>
                        <h2 className='text-cyan-100 text-xl sm:text-2xl'>Add a Hotel</h2>
                    </span>
                </div>

                <div className='flex flex-col items-center justify-center mb-4 rounded-sm w-full px-3.5 py-3 text-cyan-100' style={{ border: `2px solid ${boxColor}`, backgroundColor: "#020d1e4a" }}>
                    <span className='flex felx-col items-center justify-start w-full mb-2.5'>
                        <h3 className='text-md md:text-xl tracking-wide font-thin'>Descripton & price</h3>
                    </span>

                    <form action="" className='w-full flex flex-col items-center justify-center px-3 mb-2.5'>
                        <label htmlFor="" className='flex w-full items-center justify-start text-md mb-1'>Title<i className='text-red-500 text-lg mr-1.5'>*</i></label>
                        <input type="text" name='name' value={hotel.name} className='w-full rounded-sm px-1.5 py-2 mb-3.5 outline-none border-none' placeholder='Enter your hotel name' onChange={(ele) => handleChange(ele)} style={{ backgroundColor: '#38455a' }} />

                        <label htmlFor="" className='flex w-full items-center justify-start text-md mb-1'>Description<i className='text-red-500 text-lg mr-1.5'>*</i></label>
                        <textarea type="text" name='description' value={hotel.description} className='w-full rounded-sm px-1.5 py-2 mb-3.5 outline-none border-none' placeholder='Enter your description' onChange={handleChange} style={{ backgroundColor: '#38455a' }} />

                        <span className='flex flex-col items-center gap-2 justify-between w-full md:flex-row'>
                            <span className='flex flex-col items-center justify-center w-full md:w-1/2'>
                                <label htmlFor="" className='flex items-center justify-start w-full text-md mb-1'>Type<i className='text-red-500 text-lg mr-1.5'>*</i></label>
                                <select name="type" onChange={(e) => handleChange(e)} value={hotel.type} className='w-full rounded-sm px-1.5 py-2 mb-3.5 outline-none border-none' style={{ backgroundColor: '#38455a' }}>
                                    <option value="Select a type">Select a type</option>
                                    <option value="1 star">1 star</option>
                                    <option value="2 star">2 star</option>
                                    <option value="3 star">3 star</option>
                                    <option value="4 star">4 star</option>
                                    <option value="5 star">5 star</option>
                                    <option value="6 star">6 star</option>
                                    <option value="7 star">7 star</option>
                                </select>
                            </span>

                            <span className='flex flex-col items-center justify-center w-full md:w-1/2'>
                                <label htmlFor="" className='flex items-center justify-start w-full text-md mb-1'>Destination<i className='text-red-500 text-lg mr-1.5'>*</i></label>
                                <select name="destination" onChange={(e) => handleChange(e)} value={hotel.destination} className='w-full rounded-sm px-1.5 py-2 mb-3.5 outline-none border-none' style={{ backgroundColor: '#38455a' }}>
                                    <option defaultValue="select destination">{hotel.destination}</option>
                                    <option value="Bhopal">Bhopal</option>
                                    <option value="Indore">Indore</option>
                                    <option value="Hyderabad">Hyderabad</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Ahmedabad">Ahmedabad</option>
                                    <option value="Udaipur">Udaipur</option>
                                    <option value="Kolkata">Kolkata</option>
                                    <option value="Ohter">Ohter</option>
                                </select>
                            </span>
                        </span>

                        <span className='flex items-center gap-2 justify-between w-full'>
                            <span className='flex flex-col items-center justify-center w-full md:w-1/2'>
                                <label htmlFor="" className='flex w-full items-center justify-start text-md mb-1'>Price<i className='text-red-500 text-lg mr-1.5'>*</i></label>
                                <input type="number" name='startingPrice' value={hotel.startingPrice} className='w-full rounded-sm px-1.5 py-2 mb-3.5 outline-none border-none' placeholder='price per night (in rupees)' onChange={(ele) => handleChange(ele)} style={{ backgroundColor: '#38455a' }} />
                            </span>
                        </span>
                    </form>

                    {/* <span className='w-full flex items-center justify-start px-3 text-cyan-200'><button className='py-1.5 px-3 bg-red-500 ease-linear duration-200 hover:-translate-y-1 sm:col-span-2' onClick={addHotel}>Add Now</button></span> */}
                </div>

                <AddRoom color={boxColor} comfort={hotel.comfort} deluxe={hotel.deluxe} luxury={hotel.luxury} handleChangeRooms={handleChangeRooms} handleChangeRoomsImage={handleChangeRoomsImage} handleServices={handleServices} />

                <div className='flex flex-col items-center justify-center mb-4 rounded-sm w-full px-3.5 py-3 text-cyan-100' style={{ border: `2px solid ${boxColor}`, backgroundColor: "#020d1e4a" }}>
                    <span className='flex felx-col items-center justify-start w-full mb-2.5'>
                        <h3 className='text-md md:text-xl tracking-wide font-thin'>Social Media</h3>
                    </span>

                    <span className='grid grid-cols-1 items-center gap-2 justify-between w-full md:grid-cols-2'>
                        <span className='flex flex-col items-center justify-center w-full'>
                            <label htmlFor="" className='flex w-full items-center justify-start text-md mb-1'>Instagram<i className='text-red-500 text-lg mr-1.5'>*</i></label>
                            <input type="text" name='instagram' value={socialMedia.instagram} className='w-full rounded-sm px-1.5 py-2 mb-3.5 outline-none border-none' placeholder='Enter your description' onChange={(ele) => handleChangeSocialMedia(ele)} style={{ backgroundColor: '#38455a' }} />
                        </span>

                        <span className='flex flex-col items-center justify-center w-full md'>
                            <label htmlFor="" className='flex w-full items-center justify-start text-md mb-1'>Facebook<i className='text-red-500 text-lg mr-1.5'>*</i></label>
                            <input type="text" name='facebook' value={socialMedia.facebook} className='w-full rounded-sm px-1.5 py-2 mb-3.5 outline-none border-none' placeholder='Enter your description' onChange={(ele) => handleChangeSocialMedia(ele)} style={{ backgroundColor: '#38455a' }} />
                        </span>

                        <span className='flex flex-col items-center justify-center w-full'>
                            <label htmlFor="" className='flex w-full items-center justify-start text-md mb-1'>Twitter<i className='text-red-500 text-lg mr-1.5'>*</i></label>
                            <input type="text" name='twitter' value={socialMedia.twitter} className='w-full rounded-sm px-1.5 py-2 mb-3.5 outline-none border-none' placeholder='Enter your description' onChange={(ele) => handleChangeSocialMedia(ele)} style={{ backgroundColor: '#38455a' }} />
                        </span>

                        <span className='flex flex-col items-center justify-center w-full'>
                            <label htmlFor="" className='flex w-full items-center justify-start text-md mb-1'>Linked in<i className='text-red-500 text-lg mr-1.5'>*</i></label>
                            <input type="text" name='linkedIn' value={socialMedia.linkedIn} className='w-full rounded-sm px-1.5 py-2 mb-3.5 outline-none border-none' placeholder='Enter your description' onChange={(ele) => handleChangeSocialMedia(ele)} style={{ backgroundColor: '#38455a' }} />
                        </span>

                        <span className='flex flex-col items-center justify-center w-full'>
                            <label htmlFor="" className='flex w-full items-center justify-start text-md mb-1'>Pinterest<i className='text-red-500 text-lg mr-1.5'>*</i></label>
                            <input type="text" name='pintrest' value={socialMedia.pintrest} className='w-full rounded-sm px-1.5 py-2 mb-3.5 outline-none border-none' placeholder='Enter your description' onChange={(ele) => handleChangeSocialMedia(ele)} style={{ backgroundColor: '#38455a' }} />
                        </span>
                    </span>
                </div>


                <div className='flex flex-col items-center justify-center mb-4 rounded-sm w-full px-3.5 py-3 text-cyan-100' style={{ border: `2px solid ${boxColor}`, backgroundColor: "#020d1e4a" }}>
                    <span className='flex felx-col items-center justify-start w-full mb-3'>
                        <h3 className='text-md md:text-xl tracking-wide font-thin'>Features</h3>
                    </span>

                    <span className='grid grid-cols-1 flex-wrap items-center justify-start w-full gap-x-12 gap-y-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleFeatures('outside window', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>outside windows</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleFeatures('outside window', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>TV-cable or satelite</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleFeatures('AC rooms', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>AC rooms</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleFeatures('Non-AC rooms', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>Non-AC rooms</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleFeatures('24X7 reception facility', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>24X7 reception facility</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleFeatures('Telephone', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>Telephone</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleFeatures('Mini bar fridge', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>Mini bar fridge</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleFeatures('Microwave', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>Microwave</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleFeatures('Hair dryer on requests', ele.currentTarget.checked)} />
                            <label htmlFor="" className='font-thin text-sm text-start'>Hair dryer on requests</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleFeatures('Lounge chairs', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>Lounge chairs</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleFeatures('Desks', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>Desks</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleFeatures('Iron & Ironing board available on request', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>Iron & Ironing board available on request</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleFeatures('DVD Player on request', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>DVD Player on request</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleFeatures('Free WIFI in all Rooms', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>Free WIFI in all Rooms</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleFeatures('King size beds (Single beds on request)', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>King size beds (Single beds on request)</label>
                        </span>

                    </span>
                </div>


                <div className='flex flex-col items-center justify-center mb-4 rounded-sm w-full px-3.5 py-3 text-cyan-100' style={{ border: `2px solid ${boxColor}`, backgroundColor: "#020d1e4a" }}>
                    <span className='flex felx-col items-center justify-start w-full mb-3'>
                        <h3 className='text-md md:text-xl tracking-wide font-thin'>Contact Information</h3>
                    </span>

                    <span className='grid grid-cols-1 items-center gap-2 justify-between w-full md:grid-cols-2'>
                        <span className='flex flex-col items-center justify-center w-full'>
                            <label htmlFor="" className='flex w-full items-center justify-start text-md mb-1'>Your Name<i className='text-red-500 text-lg mr-1.5'>*</i></label>
                            <input type="text" name='name' value={contactDetails.name} className='w-full rounded-sm px-1.5 py-2 mb-3.5 outline-none border-none' placeholder='Enter your fullname' onChange={(ele) => handleContactDetails(ele)} style={{ backgroundColor: '#38455a' }} />
                        </span>

                        <span className='flex flex-col items-center justify-center w-full md'>
                            <label htmlFor="" className='flex w-full items-center justify-start text-md mb-1'>Your Email<i className='text-red-500 text-lg mr-1.5'>*</i></label>
                            <input type="text" name='email' value={contactDetails.email} className='w-full rounded-sm px-1.5 py-2 mb-3.5 outline-none border-none' placeholder='example@gmail.com' onChange={(ele) => handleContactDetails(ele)} style={{ backgroundColor: '#38455a' }} />
                        </span>

                        <span className='flex flex-col items-center justify-center w-full md'>
                            <label htmlFor="" className='flex w-full items-center justify-start text-md mb-1'>Phone Number<i className='text-red-500 text-lg mr-1.5'>*</i></label>
                            <input type="number" name='phoneNumber1' value={contactDetails.phoneNumber1} className='w-full rounded-sm px-1.5 py-2 mb-3.5 outline-none border-none' placeholder='+91 95678 87976' onChange={(ele) => handleContactDetails(ele)} style={{ backgroundColor: '#38455a' }} />
                        </span>

                        <span className='flex flex-col items-center justify-center w-full md'>
                            <label htmlFor="" className='flex w-full items-center justify-start text-md mb-1'>Phone Number<i className='text-red-500 text-lg mr-1.5'>*</i></label>
                            <input type="number" name='phoneNumber2' value={contactDetails.phoneNumber2} className='w-full rounded-sm px-1.5 py-2 mb-3.5 outline-none border-none' placeholder='+91 95678 87976' onChange={(ele) => handleContactDetails(ele)} style={{ backgroundColor: '#38455a' }} />
                        </span>
                    </span>
                </div>


                <div className='flex flex-col items-center justify-center mb-4 rounded-sm w-full px-3.5 py-3 text-cyan-100' style={{ border: `2px solid ${boxColor}`, backgroundColor: "#020d1e4a" }}>
                    <span className='flex flex-col items-center justify-center w-full md'>
                        <label htmlFor="" className='flex w-full items-center justify-start text-md mb-1'>Hotel Images<i className='text-red-500 text-lg mr-1.5'>*</i></label>
                        <input multiple type="file" name='hotelImages' defaultValue="" className='w-full rounded-sm px-1.5 py-2 mb-3.5 outline-none border-none' onChange={(ele) => handleHotelImages(ele, ele.target.files)} style={{ backgroundColor: '#38455a' }} />
                    </span>

                    <span className='flex flex-col items-center justify-center w-full md'>
                        <label htmlFor="" className='flex w-full items-center justify-start text-md mb-1'>Video Link<i className='text-red-500 text-lg mr-1.5'>*</i></label>
                        <input type="text" name='videoLink' value={hotel.videoLink} className='w-full rounded-sm px-1.5 py-2 mb-3.5 outline-none border-none' placeholder='https://www.youtube.com/watch?v=dVkK36KOcqs' onChange={(ele) => handleChange(ele)} style={{ backgroundColor: '#38455a' }} />
                    </span>

                    <span className='flex flex-col items-center justify-center w-full md'>
                        <label htmlFor="" className='flex w-full items-center justify-start text-md mb-1'>Location<i className='text-red-500 text-lg mr-1.5'>*</i></label>
                        <input type="text" name='address' value={hotel.address} className='w-full rounded-sm px-1.5 py-2 mb-3.5 outline-none border-none' placeholder='Enter Address' onChange={(ele) => handleChange(ele)} style={{ backgroundColor: '#38455a' }} />
                    </span>
                </div>

                <span className='w-full flex items-center justify-start text-cyan-200'><button className='py-1.5 px-3 bg-red-500 ease-linear duration-200 hover:-translate-y-1 sm:col-span-2' onClick={addHotel}>Add Now</button></span>

            </section>
        </>
    )
}

export default AddHotel