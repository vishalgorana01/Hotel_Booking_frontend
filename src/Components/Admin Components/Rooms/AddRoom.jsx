import React, { useRef, useState } from 'react'

function AddRoom(props) {
    const { boxColor, comfort, handleChangeRooms, handleChangeRoomsImage, handleServices, deluxe, luxury } = props;
    console.log(comfort)

    const roomNameRef = useRef()
    // const 



    return (
        <>
            <div className='flex flex-col items-center justify-center mb-4 rounded-sm w-full px-3.5 py-3 text-cyan-100' style={{ border: `2px solid ${boxColor}`, backgroundColor: "#020d1e4a" }}>
                <span className='flex felx-col items-center justify-start w-full mb-2.5'>
                    <h3 className='text-md md:text-xl tracking-wide font-thin'>Add Room</h3>
                </span>

                <form action="" className='w-full flex flex-col items-center justify-center px-3 mb-5'>
                    <label htmlFor="" className='flex w-full items-center justify-start text-md mb-1'>Comfort Room<i className='text-red-500 text-lg mr-1.5'>*</i></label>

                    <span className='grid grid-cols-1 justify-between gap-1.5 mb-3 sm:grid-cols-2 lg:grid-cols-3 w-full'>
                        <span className='flex flex-col items-start justify-center w-full'>
                            <label htmlFor="" className='flex w-full items-center justify-start font-light text-md mb-1'>Room Name<i className='text-red-500 text-lg mr-1.5'>*</i></label>
                            <input type="text" name='roomName' value={comfort.roomName} className='w-full rounded-sm px-1.5 py-2 mb-3.5 outline-none border-none' placeholder='Enter your hotel name' onChange={(ele) => handleChangeRooms(ele, 'comfortRoom')} style={{ backgroundColor: '#38455a' }} />
                        </span>

                        <span className='flex flex-col items-start justify-center w-full'>
                            <label htmlFor="" className='flex w-full items-center justify-start font-light text-md mb-1'>Room Image<i className='text-red-500 text-lg mr-1.5'>*</i></label>
                            <input multiple type="file" name='roomImages' defaultValue="" className='w-full rounded-sm px-1.5 py-1.5 mb-3.5 outline-none border-none' placeholder='Enter your hotel name' onChange={(ele) => handleChangeRoomsImage(ele, ele.target.files, 'comfortRoom')} style={{ backgroundColor: '#38455a' }} />
                        </span>

                        <span className='flex flex-col items-start justify-center w-full'>
                            <label htmlFor="" className='flex w-full items-center justify-start font-light text-md mb-1'>Room Price<i className='text-red-500 text-lg mr-1.5'>*</i></label>
                            <input type="number" name='roomPrice' value={comfort.roomPrice} onChange={(ele) => handleChangeRooms(ele, 'comfortRoom')} className='w-full rounded-sm px-1.5 py-2 mb-3.5 outline-none border-none' placeholder='Enter your hotel name' style={{ backgroundColor: '#38455a' }} />
                        </span>
                    </span>

                    <label htmlFor="" className='flex w-full items-center justify-start text-md mb-1'>Description<i className='text-red-500 text-lg mr-1.5'>*</i></label>
                    <textarea type="text" name='roomDescription' value={comfort.roomDescription} className='w-full rounded-sm px-1.5 py-2 mb-3.5 outline-none border-none' placeholder='Room description' onChange={(ele) => handleChangeRooms(ele, 'comfortRoom')} style={{ backgroundColor: '#38455a' }} />

                    <label htmlFor="" className='flex w-full items-center justify-start text-md mb-1'>Room service added<i className='text-red-500 text-lg mr-1.5'>*</i></label>

                    <span className='grid grid-cols-1 flex-wrap items-center justify-start w-full gap-x-12 gap-y-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('outside windows', 'comfortRoom', ele.currentTarget.checked)} defaultValue="" />
                            <label htmlFor="" className='text-start font-thin text-sm'>outside windows</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('TV-cable or satelite', 'comfortRoom', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>TV-cable or satelite</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('AC rooms', 'comfortRoom', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>AC rooms</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('Non-AC rooms', 'comfortRoom', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>Non-AC rooms</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('24X7 reception facility', 'comfortRoom', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>24X7 reception facility</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('Telephone', 'comfortRoom', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>Telephone</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('Mini bar fridge', 'comfortRoom', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>Mini bar fridge</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('Microwave', 'comfortRoom', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>Microwave</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('Hair dryer on requests', 'comfortRoom', ele.currentTarget.checked)} />
                            <label htmlFor="" className='font-thin text-sm text-start'>Hair dryer on requests</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('Lounge chairs', 'comfortRoom', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>Lounge chairs</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('Desks', 'comfortRoom', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>Desks</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('Iron & Ironing board available on request', 'comfortRoom', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>Iron & Ironing board available on request</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('DVD Player on request', 'comfortRoom', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>DVD Player on request</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('Free WIFI in all Rooms', 'comfortRoom', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>Free WIFI in all Rooms</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('King size beds (Single beds on request)', 'comfortRoom', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>King size beds (Single beds on request)</label>
                        </span>

                    </span>

                </form>



                <form action="" className='w-full flex flex-col items-center justify-center px-3 mb-5'>
                    <label htmlFor="" className='flex w-full items-center justify-start text-md mb-1'>Deluxe Room<i className='text-red-500 text-lg mr-1.5'>*</i></label>

                    <span className='grid grid-cols-1 justify-between gap-1.5 mb-3 sm:grid-cols-2 lg:grid-cols-3 w-full'>
                        <span className='flex flex-col items-start justify-center w-full'>
                            <label htmlFor="" className='flex w-full items-center justify-start font-light text-md mb-1'>Room Name<i className='text-red-500 text-lg mr-1.5'>*</i></label>
                            <input type="text" name='roomName' value={deluxe.roomName} className='w-full rounded-sm px-1.5 py-2 mb-3.5 outline-none border-none' placeholder='Enter your hotel name' onChange={(ele) => handleChangeRooms(ele, 'Deluxe')} style={{ backgroundColor: '#38455a' }} />
                        </span>

                        <span className='flex flex-col items-start justify-center w-full'>
                            <label htmlFor="" className='flex w-full items-center justify-start font-light text-md mb-1'>Room Image<i className='text-red-500 text-lg mr-1.5'>*</i></label>
                            <input multiple type="file" name='roomImages' defaultValue="" className='w-full rounded-sm px-1.5 py-1.5 mb-3.5 outline-none border-none' placeholder='Enter your hotel name' onChange={(ele) => handleChangeRoomsImage(ele, ele.target.files, 'Deluxe')} style={{ backgroundColor: '#38455a' }} />
                        </span>

                        <span className='flex flex-col items-start justify-center w-full'>
                            <label htmlFor="" className='flex w-full items-center justify-start font-light text-md mb-1'>Room Price<i className='text-red-500 text-lg mr-1.5'>*</i></label>
                            <input type="number" name='roomPrice' value={deluxe.roomPrice} onChange={(ele) => handleChangeRooms(ele, 'Deluxe')} className='w-full rounded-sm px-1.5 py-2 mb-3.5 outline-none border-none' placeholder='Enter your hotel name' style={{ backgroundColor: '#38455a' }} />
                        </span>
                    </span>

                    <label htmlFor="" className='flex w-full items-center justify-start text-md mb-1'>Description<i className='text-red-500 text-lg mr-1.5'>*</i></label>
                    <textarea type="text" name='roomDescription' value={deluxe.roomDescription} className='w-full rounded-sm px-1.5 py-2 mb-3.5 outline-none border-none' placeholder='Room description' onChange={(ele) => handleChangeRooms(ele, 'Deluxe')} style={{ backgroundColor: '#38455a' }} />

                    <label htmlFor="" className='flex w-full items-center justify-start text-md mb-1'>Room service added<i className='text-red-500 text-lg mr-1.5'>*</i></label>

                    <span className='grid grid-cols-1 flex-wrap items-center justify-start w-full gap-x-12 gap-y-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('outside windows', 'Deluxe', ele.currentTarget.checked)} defaultValue="" />
                            <label htmlFor="" className='text-start font-thin text-sm'>outside windows</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('TV-cable or satelite', 'Deluxe', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>TV-cable or satelite</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('AC rooms', 'Deluxe', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>AC rooms</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('Non-AC rooms', 'Deluxe', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>Non-AC rooms</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('24X7 reception facility', 'Deluxe', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>24X7 reception facility</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('Telephone', 'Deluxe', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>Telephone</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('Mini bar fridge', 'Deluxe', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>Mini bar fridge</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('Microwave', 'Deluxe', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>Microwave</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('Hair dryer on requests', 'Deluxe', ele.currentTarget.checked)} />
                            <label htmlFor="" className='font-thin text-sm text-start'>Hair dryer on requests</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('Lounge chairs', 'Deluxe', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>Lounge chairs</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('Desks', 'Deluxe', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>Desks</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('Iron & Ironing board available on request', 'Deluxe', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>Iron & Ironing board available on request</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('DVD Player on request', 'Deluxe', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>DVD Player on request</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('Free WIFI in all Rooms', 'Deluxe', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>Free WIFI in all Rooms</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('King size beds (Single beds on request)', 'Deluxe', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>King size beds (Single beds on request)</label>
                        </span>

                    </span>

                </form>




                <form action="" className='w-full flex flex-col items-center justify-center px-3 mb-5'>
                    <label htmlFor="" className='flex w-full items-center justify-start text-md mb-1'>Luxury Room<i className='text-red-500 text-lg mr-1.5'>*</i></label>

                    <span className='grid grid-cols-1 justify-between gap-1.5 mb-3 sm:grid-cols-2 lg:grid-cols-3 w-full'>
                        <span className='flex flex-col items-start justify-center w-full'>
                            <label htmlFor="" className='flex w-full items-center justify-start font-light text-md mb-1'>Room Name<i className='text-red-500 text-lg mr-1.5'>*</i></label>
                            <input type="text" name='roomName' value={luxury.roomName} className='w-full rounded-sm px-1.5 py-2 mb-3.5 outline-none border-none' placeholder='Enter your hotel name' onChange={(ele) => handleChangeRooms(ele, 'Luxury')} style={{ backgroundColor: '#38455a' }} />
                        </span>

                        <span className='flex flex-col items-start justify-center w-full'>
                            <label htmlFor="" className='flex w-full items-center justify-start font-light text-md mb-1'>Room Image<i className='text-red-500 text-lg mr-1.5'>*</i></label>
                            <input multiple type="file" name='roomImages' defaultValue="" className='w-full rounded-sm px-1.5 py-1.5 mb-3.5 outline-none border-none' placeholder='Enter your hotel name' onChange={(ele) => handleChangeRoomsImage(ele, ele.target.files, 'Luxury')} style={{ backgroundColor: '#38455a' }} />
                        </span>

                        <span className='flex flex-col items-start justify-center w-full'>
                            <label htmlFor="" className='flex w-full items-center justify-start font-light text-md mb-1'>Room Price<i className='text-red-500 text-lg mr-1.5'>*</i></label>
                            <input type="number" name='roomPrice' value={luxury.roomPrice} onChange={(ele) => handleChangeRooms(ele, 'Luxury')} className='w-full rounded-sm px-1.5 py-2 mb-3.5 outline-none border-none' placeholder='Enter your hotel name' style={{ backgroundColor: '#38455a' }} />
                        </span>
                    </span>

                    <label htmlFor="" className='flex w-full items-center justify-start text-md mb-1'>Description<i className='text-red-500 text-lg mr-1.5'>*</i></label>
                    <textarea type="text" name='roomDescription' value={luxury.roomDescription} className='w-full rounded-sm px-1.5 py-2 mb-3.5 outline-none border-none' placeholder='Room description' onChange={(ele) => handleChangeRooms(ele, 'Luxury')} style={{ backgroundColor: '#38455a' }} />

                    <label htmlFor="" className='flex w-full items-center justify-start text-md mb-1'>Room service added<i className='text-red-500 text-lg mr-1.5'>*</i></label>

                    <span className='grid grid-cols-1 flex-wrap items-center justify-start w-full gap-x-12 gap-y-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('outside windows', 'Luxury', ele.currentTarget.checked)} defaultValue="" />
                            <label htmlFor="" className='text-start font-thin text-sm'>outside windows</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('TV-cable or satelite', 'Luxury', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>TV-cable or satelite</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('AC rooms', 'Luxury', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>AC rooms</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('Non-AC rooms', 'Luxury', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>Non-AC rooms</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('24X7 reception facility', 'Luxury', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>24X7 reception facility</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('Telephone', 'Luxury', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>Telephone</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('Mini bar fridge', 'Luxury', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>Mini bar fridge</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('Microwave', 'Luxury', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>Microwave</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('Hair dryer on requests', 'Luxury', ele.currentTarget.checked)} />
                            <label htmlFor="" className='font-thin text-sm text-start'>Hair dryer on requests</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('Lounge chairs', 'Luxury', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>Lounge chairs</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('Desks', 'Luxury', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>Desks</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('Iron & Ironing board available on request', 'Luxury', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>Iron & Ironing board available on request</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('DVD Player on request', 'Luxury', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>DVD Player on request</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('Free WIFI in all Rooms', 'Luxury', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>Free WIFI in all Rooms</label>
                        </span>

                        <span className='flex items-center gap-2.5 justify-start'>
                            <input type="checkbox" onClick={(ele) => handleServices('King size beds (Single beds on request)', 'Luxury', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-start font-thin text-sm'>King size beds (Single beds on request)</label>
                        </span>

                    </span>

                </form>

                {/* <span className='w-full flex items-center justify-start px-3 text-cyan-200'><button className='py-1.5 px-3 bg-red-500 ease-linear duration-200 hover:-translate-y-1 sm:col-span-2' onClick={addHotel}>Add Now</button></span> */}
            </div>
        </>
    )
}

export default AddRoom