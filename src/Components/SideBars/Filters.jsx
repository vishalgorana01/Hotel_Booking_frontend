import React, { useRef } from 'react'

function Filters(props) {
    const {filters} = props;
    return (
        <>
            <div className='flex flex-col items-center justify-center w-full my-6 rounded-sm bg-white' style={{ border: '1px solid #0000004a' }}>
                <div className='flex flex-col w-full items-center justify-center'>
                    <span className='w-full py-2.5 font-semibold text-lg text-left px-4 text-black'>Popular filters</span>

                    <span className='flex flex-col items-start justify-center w-full rounded-sm font-semibold text-lg text-left' style={{ borderBottom: '1px solid #0000004a' }}>
                        <span className='w-full py-2 px-4'>
                            <input type="checkbox" name="" id="" onClick={(ele) => filters('4 star', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-md font-medium ml-3'>4 stars</label>
                        </span>
                        <span className='w-full py-2 px-4'>
                            <input type="checkbox" name="" id="" onClick={(ele) => filters('5 star', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-md font-medium ml-3'>5 stars</label>
                        </span>
                        <span className='w-full py-2 px-4'>
                            <input type="checkbox" name="" id="" onClick={(ele) => filters('6 star', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-md font-medium ml-3'>6 stars</label>
                        </span>
                        <span className='w-full py-2 px-4'>
                            <input type="checkbox" name="" id="" onClick={(ele) => filters('7 star', ele.currentTarget.checked)} />
                            <label htmlFor="" className='text-md font-medium ml-3'>7 stars</label>
                        </span>
                        <span className='w-full py-2 px-4'>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="" className='text-md font-medium ml-3'>facility 1</label>
                        </span>
                        <span className='w-full py-2 px-4'>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="" className='text-md font-medium ml-3'>facility 2</label>
                        </span>
                        <span className='w-full py-2 px-4'>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="" className='text-md font-medium ml-3'>facility 3</label>
                        </span>
                        <span className='w-full py-2 px-4'>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="" className='text-md font-medium ml-3'>facility 4</label>
                        </span>
                    </span>
                </div>

                <div className='flex flex-col w-full items-center justify-center'>
                    <span className='w-full py-2.5 font-semibold text-lg text-left text-black px-4'>City</span>

                    <span className='flex flex-col items-start justify-center w-full font-semibold rounded-sm text-lg text-left' style={{ borderBottom: '1px solid #0000004a' }}>
                        <span className='w-full py-2 px-4'>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="" className='text-md font-medium ml-3'>varanasi</label>
                        </span>
                        <span className='w-full py-2 px-4'>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="" className='text-md font-medium ml-3'>Delhi</label>
                        </span>
                        <span className='w-full py-2 px-4'>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="" className='text-md font-medium ml-3'>Bhopal</label>
                        </span>
                        <span className='w-full py-2 px-4'>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="" className='text-md font-medium ml-3'>Indore</label>
                        </span>
                        <span className='w-full py-2 px-4'>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="" className='text-md font-medium ml-3'>Jaipur</label>

                        </span>
                        <span className='w-full py-2 px-4'>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="" className='text-md font-medium ml-3'>Jodhpur</label>
                        </span>
                        <span className='w-full py-2 px-4'>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="" className='text-md font-medium ml-3'>Ratlam</label>
                        </span>
                        <span className='w-full py-2 px-4'>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="" className='text-md font-medium ml-3'>Nagpur</label>
                        </span>
                    </span>
                </div>


            </div>
        </>
    )
}

export default Filters