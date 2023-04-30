import React, { useState, useRef, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import hotel1 from "../../Assets/Images/hotel1.jpg";
import hotel2 from "../../Assets/Images/hotel2.jpg";
import styles from '../../Assets/CSS/TrendingHotel.module.css'
import utilities from '../../Assets/Utility/utility';

export default function TrendingHotel() {

  const getAllHotels = useRef()
  const ref = useRef([]);

  const refName = useRef([]);
  const allHotelName = (ele)=>{refName.current.push(ele)}

  const refPrice = useRef([])
  const allHotelPrice = (ele)=>{refPrice.current.push(ele)}

  const refLocation = useRef([]);
  const allHotelLocation = (ele)=>{refLocation.current.push(ele)}

  const refImages = useRef([]);
  const allHotelImages = (ele) => {refImages.current.push(ele)}

  const formatting = (price)=>{
    let formattedPrice = price.toString();
    let length = formattedPrice.length-1;
    let count = 0;
    let check = true;
    for(let i=length; i>0; i--){
      count++;
      if(count == 3){
        formattedPrice = formattedPrice.slice(0,i) + "," + formattedPrice.slice(i);
        check = false
      }
      else if(count%2 == 1 && !check){
        formattedPrice = formattedPrice.slice(0,i) + "," + formattedPrice.slice(i);
      }
    }

    return formattedPrice;
  }

  

  const getTrendingHotels = async () => {
    try {
      const trendingHotels = await axios.get(`${utilities.deploy_url}/api/hotels`)

      console.log(refName.current[0]);
      let i = 0;
      trendingHotels.data.map((element, index) => {
        if (element.type == '4 star' || element.type == '5 star') {
          // console.log(element)
          // getAllHotels.current.children[index].children[1].children[0].innerHTML = element.name
          // getAllHotels.current.children[index].children[1].children[1].innerHTML = getAllHotels.current.children[index].children[1].children[1].children[0].outerHTML + element.city

          if(i < 5){
            i++;
          }
          else{
            i = 0;
          }
          let random = Number.parseInt((Math.random(0)*100)%4)
          // refImages.current[i].src = `http://localhost:8800/${element.photos[random]}`
          const price = formatting(element.cheapestPrice);
          refName.current[i].innerHTML = element.name;
          refLocation.current[i].innerHTML = refLocation.current[i].children[0].outerHTML +  element.city;
          refPrice.current[i].innerHTML = `price: Rs.${price}`
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  getTrendingHotels()

  const navigate = useNavigate();

  const hotelDescription = (givenQuery) => {
    // nvaigate(`/Description?name=${givenQuery}&id=vishal`)
    navigate(`/Description?name=${givenQuery}`)
  }

  return (
    <>
      <section className='flex w-screen h-full mt-72 items-center justify-center sm:mt-56 lg:mt-28'>
        <div className='flex flex-col h-full max-w-7xl justify-center items-center'>
          <div className='flex items-center justify-center mb-4'><i className="fa-sharp fa-solid fa-caret-left mx-2 cursor-pointer text-xl sm:text-2xl"></i><h1 className='text-xl sm:text-2xl'>Most Famous Hotels</h1><i className="fa-sharp fa-solid fa-caret-right mx-2 cursor-pointer text-xl sm:text-2xl"></i></div>

          <div className={`${styles.hideScrollbar} flex items-start max-w-7xl h-full snap-mandatory snap-x w-80 justify-content overflow-x-scroll sm:w-auto`}>
            <div ref={getAllHotels} className=' flex items-start gap-y-3 py-3 h-full justify-center sm:grid sm:grid-cols-2 sm:px-2 lg:grid-cols-3'>
             
              <div className='relative flex flex-col snap-center h-full w-80 mr-2.5 shadow-md overflow-hidden shadow-indigo-500/40  rounded-sm sm:w-auto sm:mx-2.5  sm:my-2.5' style={{ borderBottom: '1px solid #0b244b42' }}>
                <img ref={(ele) =>allHotelImages(ele)} className="hover:cursor-pointer transition-all ease-in-out duration-300 hover:scale-125" onClick={() =>hotelDescription(refName.current[0].innerHTML)} src={hotel1} alt="error loading" />
                <div className='flex flex-col items-center z-20 bg-slate-50 justify-center py-2 px-3'>
                  <h2 ref={allHotelName} className='py-1 text-lg text-blue-500 text-center'>Hotel Name</h2>
                  <span ref={allHotelLocation}><i className="fa-sharp fa-solid fa-location-dot mr-2"></i>Location</span>
                </div>
                <div className='flex items-center justify-between px-4 py-1' style={{borderTop: "1px solid #00000033"}}>
                  <span ref={allHotelPrice} className=''>price: $569</span>
                  <a className='text-blue-500 cursor-pointer' onClick={() =>hotelDescription(refName.current[0].innerHTML)}>Details</a>
                </div>

                <p className={styles.card_price}>Rs.1250 / Night</p>
              </div>

              <div className='relative flex flex-col w-80 mx-2.5 h-full snap-center shadow-md overflow-hidden shadow-indigo-500/40  rounded-sm sm:w-auto sm:my-2.5' style={{ borderBottom: '1px solid #0b244b42' }}>
                <img ref={(ele) =>allHotelImages(ele)} className="hover:cursor-pointer transition-all ease-in-out duration-300 hover:scale-125" onClick={() =>hotelDescription(refName.current[1].innerHTML)} src={hotel1} alt="error loading" />
                <div className='flex flex-col items-center z-20 bg-slate-50 justify-center py-2 px-3'>
                  <h2 ref={allHotelName}  className='py-1 text-lg text-blue-500 text-center'>Hotel Name</h2>
                  <span ref={allHotelLocation}><i className="fa-sharp fa-solid fa-location-dot mr-2"></i>Location</span>
                </div>
                <div className='flex items-center justify-between px-4 py-1' style={{borderTop: "1px solid #00000033"}}>
                  <span ref={allHotelPrice} className=''>price: $569</span>
                  <a className='text-blue-500 cursor-pointer' onClick={() =>hotelDescription(refName.current[1].innerHTML)}>Details</a>
                </div>
                <p className={styles.card_price}>Rs.1250 / Night</p>
              </div>

              <div className='relative flex flex-col w-80 mx-2.5 h-full snap-center shadow-md overflow-hidden shadow-indigo-500/40  rounded-sm sm:w-auto sm:my-2.5' style={{ borderBottom: '1px solid #0b244b42' }}>
                <img ref={(ele) =>allHotelImages(ele)} className="hover:cursor-pointer transition-all ease-in-out duration-300 hover:scale-125" onClick={() =>hotelDescription(refName.current[2].innerHTML)} src={hotel1} alt="error loading" />
                <div className='flex flex-col z-20 bg-slate-50 items-center justify-center py-2 px-3'>
                  <h2 ref={allHotelName}  className='py-1 text-lg text-blue-500 text-center'>Hotel Name</h2>
                  <span ref={allHotelLocation}><i className="fa-sharp fa-solid fa-location-dot mr-2"></i>Location</span>
                </div>
                <div className='flex items-center justify-between px-4 py-1' style={{borderTop: "1px solid #00000033"}}>
                  <span ref={allHotelPrice} className=''>price: $569</span>
                  <a className='text-blue-500 cursor-pointer' onClick={() =>hotelDescription(refName.current[2].innerHTML)}>Details</a>
                </div>
                <p className={styles.card_price}>Rs.1250 / Night</p>
              </div>

              <div className='relative flex flex-col w-80 mx-2.5 h-full snap-center shadow-md overflow-hidden shadow-indigo-500/40  rounded-sm sm:w-auto sm:my-2.5' style={{ borderBottom: '1px solid #0b244b42' }}>
                <img ref={(ele) =>allHotelImages(ele)} className="hover:cursor-pointer transition-all ease-in-out duration-300 hover:scale-125" onClick={() =>hotelDescription(refName.current[3].innerHTML)} src={hotel1} alt="error loading" />
                <div className='flex flex-col items-center z-20 bg-slate-50 justify-center py-2 px-3'>
                  <h2 ref={allHotelName} className='py-1 text-lg text-blue-500 text-center'>Hotel Name</h2>
                  <span ref={allHotelLocation}><i className="fa-sharp fa-solid fa-location-dot mr-2"></i>Location</span>
                </div>
                <div className='flex items-center justify-between px-4 py-1' style={{borderTop: "1px solid #00000033"}}>
                  <span ref={allHotelPrice} className=''>price: $569</span>
                  <a className='text-blue-500 cursor-pointer' onClick={() =>hotelDescription(refName.current[3].innerHTML)}>Details</a>
                </div>
                <p className={styles.card_price}>Rs.1250 / Night</p>
              </div>

              <div className='relative flex flex-col w-80 mx-2.5 h-full snap-center shadow-md overflow-hidden shadow-indigo-500/40  rounded-sm sm:w-auto sm:my-2.5' style={{ borderBottom: '1px solid #0b244b42' }}>
                <img ref={(ele) =>allHotelImages(ele)} className="hover:cursor-pointer transition-all ease-in-out duration-300 hover:scale-125" onClick={() =>hotelDescription(refName.current[4].innerHTML)} src={hotel1} alt="error loading" />
                <div className='flex flex-col items-center z-20 bg-slate-50 justify-center py-2 px-3'>
                  <h2 ref={allHotelName} className='py-1 text-lg text-blue-500 text-center'>Hotel Name</h2>
                  <span ref={allHotelLocation}><i className="fa-sharp fa-solid fa-location-dot mr-2"></i>Location</span>
                </div>
                <div className='flex items-center justify-between px-4 py-1' style={{borderTop: "1px solid #00000033"}}>
                  <span ref={allHotelPrice} className=''>price: $569</span>
                  <a className='text-blue-500 cursor-pointer' onClick={() =>hotelDescription(refName.current[4].innerHTML)}>Details</a>
                </div>
                <p className={styles.card_price}>Rs.1250 / Night</p>
              </div>

              <div className='relative flex flex-col w-80 ml-2.5 h-full snap-center shadow-md overflow-hidden shadow-indigo-500/40  rounded-sm sm:w-auto sm:mx-2.5 sm:my-2.5' style={{ borderBottom: '1px solid #0b244b42' }}>
                <img ref={(ele) =>allHotelImages(ele)} className="hover:cursor-pointer transition-all ease-in-out duration-300 hover:scale-125" onClick={() =>hotelDescription(refName.current[5].innerHTML)} src={hotel1} alt="error loading" />
                <div className='flex flex-col items-center z-20 bg-slate-50 justify-center py-2 px-3'>
                  <h2 ref={allHotelName} className='py-1 text-lg text-blue-500 text-center'>Hotel Name</h2>
                  <span ref={allHotelLocation}><i className="fa-sharp fa-solid fa-location-dot mr-2"></i>Location</span>
                </div>
                <div className='flex items-center justify-between px-4 py-1' style={{borderTop: "1px solid #00000033"}}>
                  <span ref={allHotelPrice} className=''>price: $569</span>
                  <a className='text-blue-500 cursor-pointer' onClick={() =>hotelDescription(refName.current[5].innerHTML)}>Details</a>
                </div>
                <p className={styles.card_price}>Rs.1250 / Night</p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
