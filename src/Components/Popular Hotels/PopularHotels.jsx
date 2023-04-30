import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import image1 from '../../Assets/Images/empty-gazebo-garden.jpg'
import Testimonials from '../SideBars/Testimonials'
import styles from '../../Assets/CSS/PopularHotel.module.css'
import utilities from '../../Assets/Utility/utility'
// import FontAwesomeIcon from 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'

export default function PopularHotels() {
    const ref = useRef([]);
    const refPopularHotelsName = useRef([]);
    const pushRefPopularHotelsName = (ele) => { refPopularHotelsName.current.push(ele) }

    const refPopularHotelsLocation = useRef([]);
    const pushRefPopularHotelsLocation = (ele) => { refPopularHotelsLocation.current.push(ele) }

    const refPopularHotelsPrice = useRef([]);
    const pushRefPopularHotelsPrice = (ele) => { refPopularHotelsPrice.current.push(ele) }

    const refPopularHotelsCoverImage = useRef([]);
    const pushRefPopularHotelsCoverImage = (ele) => refPopularHotelsCoverImage.current.push(ele)

    const formatting = (price) => {
        let formattedPrice = price.toString();
        let length = formattedPrice.length - 1;
        let count = 0;
        let check = true;
        for (let i = length; i > 0; i--) {
            count++;
            if (count == 3) {
                formattedPrice = formattedPrice.slice(0, i) + "," + formattedPrice.slice(i);
                check = false
            }
            else if (count % 2 == 1 && !check) {
                formattedPrice = formattedPrice.slice(0, i) + "," + formattedPrice.slice(i);
            }
        }

        return formattedPrice;
    }

    const getTrendingHotels = async () => {
        try {
            const trendingHotels = await axios.get(`${utilities.deploy_url}/api/hotels`)

            let i = 0;
            trendingHotels.data.map((element, index) => {
                if (element.type == '4 star' || element.type == '3 star') {
                    console.log(element)

                    if (i < 5) {
                        i++;
                    }
                    else {
                        i = 0;
                    }

                    let random = Number.parseInt((Math.random(0) * 100) % 4)

                    refPopularHotelsName.current[i].innerHTML = element.name;
                    // refPopularHotelsCoverImage.current[i].src = `http://localhost:8800/${element.photos[random]}`
                    refPopularHotelsLocation.current[i].innerHTML = element.address
                    const price = formatting(element.cheapestPrice);
                    refPopularHotelsPrice.current[i].innerHTML = `price: Rs.${price}`
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    getTrendingHotels();

    const navigate = useNavigate()
    const getPopularHotels = (givenQuery) => {
        navigate(`/Description?name=${givenQuery}`)
    }

    return (
        <>
            <div className='flex flex-col h-auto w-full text-sm sm:p-7 md:p-7 xl:p-0 xl:w-8/12 '>
                <div className='flex items-center w-full justify-start py-3 text-3xl'>
                    Popular hotels
                </div>

                <div className='grid grid-cols-1 items-center w-full gap-2 justify-center flex-wrap sm:grid-cols-2 sm:text-sm md:grid-cols-3 md:text-md'>

                    <div className='relative overflow-x-hidden flex flex-col w-full h-full shadow-lg rounded-md shadow-black' style={{ borderBottom: "1px solid #00000033" }}>
                        <img ref={(ele) => pushRefPopularHotelsCoverImage(ele)} className="cursor-pointer rounded-sm" onClick={() => getPopularHotels(refPopularHotelsName.current[0].innerHTML)} src={image1} alt="" />
                        <div className='flex flex-col my-2 items-center justify-center'>
                            <h3 ref={(ele) => pushRefPopularHotelsName(ele)} className='mt-3 text-center mt text-lg text-blue-500 cursor-pointer' onClick={() => getPopularHotels(refPopularHotelsName.current[0].innerHTML)}>Hotel name</h3>
                            <span ref={(ele) => pushRefPopularHotelsLocation(ele)} className='flex items-center justify-center'><i className="fa-sharp fa-solid fa-location-dot mr-2"></i>Hotel Location</span>
                            <span className='flex mt-3.5 items-center justify-center'><i className="fa-sharp fa-solid fa-location-dot mr-2"></i><i className="fa-sharp fa-solid fa-location-dot mr-2"></i><i className="fa-sharp fa-solid fa-location-dot mr-2"></i><i className="fa-sharp fa-solid fa-location-dot mr-2"></i><i className="fa-sharp fa-solid fa-location-dot mr-2"></i></span>
                            <p className='text-center text-sm'>123 reviews</p>
                            <div className='flex mt-3.5 pt-2 items-center justify-between px-2 w-full' style={{ borderTop: "1px solid #00000033" }}>
                                <span ref={(ele) => pushRefPopularHotelsPrice(ele)}>price: Rs.23,000</span>
                                <span className='text-blue-500 cursor-pointer' onClick={() => getPopularHotels(refPopularHotelsName.current[0].innerHTML)}>Details</span>
                            </div>
                        </div>
                        <p className={styles.card_price}>Rs.1250 / Night</p>
                    </div>

                    <div className='relative overflow-x-hidden flex flex-col w-full h-full shadow-lg rounded-md shadow-black' style={{ borderBottom: "1px solid #00000033" }}>
                        <img ref={(ele) => pushRefPopularHotelsCoverImage(ele)} className="cursor-pointer rounded-sm" onClick={() => getPopularHotels(refPopularHotelsName.current[1].innerHTML)} src={image1} alt="" />
                        <div className='flex flex-col my-2 items-center justify-center'>
                            <h3 ref={(ele) => pushRefPopularHotelsName(ele)} className='mt-3 text-center mt text-lg text-blue-500 cursor-pointer' onClick={() => getPopularHotels(refPopularHotelsName.current[1].innerHTML)}>Hotel name</h3>
                            <span ref={(ele) => pushRefPopularHotelsLocation(ele)} className='flex items-center justify-center'><i className="fa-sharp fa-solid fa-location-dot mr-2"></i>Hotel Location</span>
                            <span className='flex mt-3.5 items-center justify-center'><i className="fa-sharp fa-solid fa-location-dot mr-2"></i><i className="fa-sharp fa-solid fa-location-dot mr-2"></i><i className="fa-sharp fa-solid fa-location-dot mr-2"></i><i className="fa-sharp fa-solid fa-location-dot mr-2"></i><i className="fa-sharp fa-solid fa-location-dot mr-2"></i></span>
                            <p className='text-center text-sm'>123 reviews</p>
                            <div className='flex mt-3.5 pt-2 items-center justify-between px-2 w-full' style={{ borderTop: "1px solid #00000033" }}>
                                <span ref={(ele) => pushRefPopularHotelsPrice(ele)}>price: Rs.23,000</span>
                                <span className='text-blue-500 cursor-pointer' onClick={() => getPopularHotels(refPopularHotelsName.current[1].innerHTML)}>Details</span>
                            </div>
                        </div>
                        <p className={styles.card_price}>Rs.1250 / Night</p>
                    </div>

                    <div className='relative overflow-x-hidden flex flex-col w-full h-full shadow-lg rounded-md shadow-black' style={{ borderBottom: "1px solid #00000033" }}>
                        <img ref={(ele) => pushRefPopularHotelsCoverImage(ele)} className="cursor-pointer rounded-sm" src={image1} onClick={() => getPopularHotels(refPopularHotelsName.current[2].innerHTML)} alt="" />
                        <div className='flex flex-col my-2 items-center justify-center'>
                            <h3 ref={(ele) => pushRefPopularHotelsName(ele)} className='mt-3 text-center mt text-lg text-blue-500 cursor-pointer' onClick={() => getPopularHotels(refPopularHotelsName.current[2].innerHTML)}>Hotel name</h3>
                            <span ref={(ele) => pushRefPopularHotelsLocation(ele)} className='flex items-center justify-center'><i className="fa-sharp fa-solid fa-location-dot mr-2"></i>Hotel Location</span>
                            <span className='flex mt-3.5 items-center justify-center'><i className="fa-sharp fa-solid fa-location-dot mr-2"></i><i className="fa-sharp fa-solid fa-location-dot mr-2"></i><i className="fa-sharp fa-solid fa-location-dot mr-2"></i><i className="fa-sharp fa-solid fa-location-dot mr-2"></i><i className="fa-sharp fa-solid fa-location-dot mr-2"></i></span>
                            <p className='text-center text-sm'>123 reviews</p>
                            <div className='flex mt-3.5 pt-2 items-center justify-between px-2 w-full' style={{ borderTop: "1px solid #00000033" }}>
                                <span ref={(ele) => pushRefPopularHotelsPrice(ele)}>price: Rs.23,000</span>
                                <span className='text-blue-500 cursor-pointer' onClick={() => getPopularHotels(refPopularHotelsName.current[2].innerHTML)}>Details</span>
                            </div>
                        </div>
                        <p className={styles.card_price}>Rs.1250 / Night</p>
                    </div>

                    <div className='relative overflow-x-hidden flex flex-col w-full h-full shadow-lg rounded-md shadow-black' style={{ borderBottom: "1px solid #00000033" }}>
                        <img ref={(ele) => pushRefPopularHotelsCoverImage(ele)} className="cursor-pointer rounded-sm" src={image1} onClick={() => getPopularHotels(refPopularHotelsName.current[3].innerHTML)} alt="" />
                        <div className='flex flex-col my-2 items-center justify-center'>
                            <h3 ref={(ele) => pushRefPopularHotelsName(ele)} className='mt-3 text-center mt text-lg text-blue-500 cursor-pointer' onClick={() => getPopularHotels(refPopularHotelsName.current[3].innerHTML)}>Hotel name</h3>
                            <span ref={(ele) => pushRefPopularHotelsLocation(ele)} className='flex items-center justify-center'><i className="fa-sharp fa-solid fa-location-dot mr-2"></i>Hotel Location</span>
                            <span className='flex mt-3.5 items-center justify-center'><i className="fa-sharp fa-solid fa-location-dot mr-2"></i><i className="fa-sharp fa-solid fa-location-dot mr-2"></i><i className="fa-sharp fa-solid fa-location-dot mr-2"></i><i className="fa-sharp fa-solid fa-location-dot mr-2"></i><i className="fa-sharp fa-solid fa-location-dot mr-2"></i></span>
                            <p className='text-center text-sm'>123 reviews</p>
                            <div className='flex mt-3.5 pt-2 items-center justify-between px-2 w-full' style={{ borderTop: "1px solid #00000033" }}>
                                <span ref={(ele) => pushRefPopularHotelsPrice(ele)}>price: Rs.23,000</span>
                                <span className='text-blue-500 cursor-pointer' onClick={() => getPopularHotels(refPopularHotelsName.current[3].innerHTML)}>Details</span>
                            </div>
                        </div>
                        <p className={styles.card_price}>Rs.1250 / Night</p>
                    </div>

                    <div className='relative overflow-x-hidden flex flex-col w-full h-full shadow-lg rounded-md shadow-black' style={{ borderBottom: "1px solid #00000033" }}>
                        <img ref={(ele) => pushRefPopularHotelsCoverImage(ele)} className="cursor-pointer rounded-sm" src={image1} onClick={() => getPopularHotels(refPopularHotelsName.current[4].innerHTML)} alt="" />
                        <div className='flex flex-col my-2 items-center justify-center'>
                            <h3 ref={(ele) => pushRefPopularHotelsName(ele)} className='mt-3 text-center mt text-lg text-blue-500 cursor-pointer' onClick={() => getPopularHotels(refPopularHotelsName.current[4].innerHTML)}>Hotel name</h3>
                            <span ref={(ele) => pushRefPopularHotelsLocation(ele)} className='flex items-center justify-center'><i className="fa-sharp fa-solid fa-location-dot mr-2"></i>Hotel Location</span>
                            <span className='flex mt-3.5 items-center justify-center'><i className="fa-sharp fa-solid fa-location-dot mr-2"></i><i className="fa-sharp fa-solid fa-location-dot mr-2"></i><i className="fa-sharp fa-solid fa-location-dot mr-2"></i><i className="fa-sharp fa-solid fa-location-dot mr-2"></i><i className="fa-sharp fa-solid fa-location-dot mr-2"></i></span>
                            <p className='text-center text-sm'>123 reviews</p>
                            <div className='flex mt-3.5 pt-2 items-center justify-between px-2 w-full' style={{ borderTop: "1px solid #00000033" }}>
                                <span ref={(ele) => pushRefPopularHotelsPrice(ele)}>price: Rs.23,000</span>
                                <span className='text-blue-500 cursor-pointer' onClick={() => getPopularHotels(refPopularHotelsName.current[4].innerHTML)}>Details</span>
                            </div>
                        </div>
                        <p className={styles.card_price}>Rs.1250 / Night</p>
                    </div>

                    <div className='relative overflow-x-hidden flex flex-col w-full h-full shadow-lg rounded-md shadow-black' style={{ borderBottom: "1px solid #00000033" }}>
                        <img ref={(ele) => pushRefPopularHotelsCoverImage(ele)} className="cursor-pointer rounded-sm" src={image1} onClick={() => getPopularHotels(refPopularHotelsName.current[5].innerHTML)} alt="" />
                        <div className='flex flex-col my-2 items-center justify-center'>
                            <h3 ref={(ele) => pushRefPopularHotelsName(ele)} className='mt-3 text-center mt text-lg text-blue-500 cursor-pointer' onClick={() => getPopularHotels(refPopularHotelsName.current[5].innerHTML)}>Hotel name</h3>
                            <span ref={(ele) => pushRefPopularHotelsLocation(ele)} className='flex items-center justify-center'><i className="fa-sharp fa-solid fa-location-dot mr-2"></i>Hotel Location</span>
                            <span className='flex mt-3.5 items-center justify-center'><i className="fa-sharp fa-solid fa-location-dot mr-2"></i><i className="fa-sharp fa-solid fa-location-dot mr-2"></i><i className="fa-sharp fa-solid fa-location-dot mr-2"></i><i className="fa-sharp fa-solid fa-location-dot mr-2"></i><i className="fa-sharp fa-solid fa-location-dot mr-2"></i></span>
                            <p className='text-center text-sm'>123 reviews</p>
                            <div className='flex mt-3.5 pt-2 items-center justify-between px-2 w-full' style={{ borderTop: "1px solid #00000033" }}>
                                <span ref={(ele) => pushRefPopularHotelsPrice(ele)}>price: Rs.23,000</span>
                                <span className='text-blue-500 cursor-pointer' onClick={() => getPopularHotels(refPopularHotelsName.current[5].innerHTML)}>Details</span>
                            </div>
                        </div>
                        <p className={styles.card_price}>Rs.1250 / Night</p>
                    </div>

                </div>
            </div>
        </>
    )
}
