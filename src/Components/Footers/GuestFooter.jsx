import React from 'react'

function GuestFooter() {
  return (
    <>
      <section className='flex items-center justify-center py-28 w-screen px-6 overflow-y-clip overflow-x-clip sm:px-8 md:px-10 lg:px-12' style={{ backgroundColor: 'rgb(11 36 75)' }}>
        <div className='flex items-center justify-center w-full max-w-7xl text-cyan-200'>

          <div className='flex relative flex-col gap-y-20 items-center justify-center  w-full'>
            <span className='absolute -top-64 -right-48 h-72 w-72 bg-red-500' style={{borderRadius: '50%'}}>

            </span>
            <span className='flex items-center justify-start w-full'>
              <h1 className='w-full text-3xl max-w-xs text-left z-10'>The values that hold us true and to account</h1>
            </span>

            <span className='grid grid-cols-1 gap-x-20 items-center gap-y-20 justify-between w-full sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-36'>
              <span className='flex flex-col gap-y-4 items-start justify-center'>
                <span className='flex items-center justify-start gap-x-2'>
                  <i className="fa-sharp p-2 fa-solid text-white fa-chart-simple rounded-md fa-bounce" style={{ backgroundColor: '#177883' }}></i>
                  <h2 className='text-xl'>Simplicity</h2>
                </span>
                <span className='text-justify text-sm max-w-xs sm:max-w-none'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad qui nesciunt.
                </span>
              </span>

              <span className='flex flex-col gap-y-4 items-start justify-center'>
                <span className='flex items-center justify-start gap-x-2'>
                  <i className="fa-sharp p-2 fa-solid text-white fa-heart rounded-md fa-beat" style={{ backgroundColor: '#2ba433' }}></i>
                  <h2 className='text-xl'>Social Good</h2>
                </span>
                <span className='text-justify text-sm max-w-xs sm:max-w-none'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad qui nesciunt.
                </span>
              </span>

              <span className='flex flex-col gap-y-4 items-start justify-center'>
                <span className='flex items-center justify-start gap-x-2'>
                  <i className="fa-sharp p-2 fa-solid text-white fa-shield rounded-md fa-flip" style={{ backgroundColor: '#2a40b3' }}></i>
                  <h2 className='text-xl'>Trust</h2>
                </span>
                <span className='text-justify text-sm max-w-xs sm:max-w-none'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad qui nesciunt.
                </span>
              </span>
            </span>

            <span className='flex items-center flex-col justify-between py-16 gap-y-10 px-12 w-full md:flex-row' style={{ backgroundColor: '#ef4444' }}>
              <span className='flex items-center justify-center gap-y-1 flex-col md:items-start'>
                <h2 className='font-normal text-xl'>Ready for a simple future ?</h2>
                <h2 className='font-normal text-black text-xl'>Let's get started</h2>
              </span>

              <span className='flex items-center justify-center px-2 cursor-pointer rounded-sm py-2 text-cyan-200 ease-linear duration-200 m-2 hover:-translate-y-1 sm:col-span-2' style={{ backgroundColor: 'rgb(6 25 55)' }}>
                <button className='py-1 px-3'>Get's started</button>
              </span>
            </span>

            <span className='grid items-start justify-center gap-y-10 w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
              <span className='flex flex-col items-start justify-start'>
                <h1 className='text-xl'>Logo</h1>
                <h2 className='text-xs'>© 2023</h2>
              </span>

              <span className='flex flex-col gap-y-3 items-center justify-center w-full'>
                <h2 className='text-md w-full text-left'>Customers</h2>
                <ul className='flex flex-col text-gray-400 items-start justify-center w-full'>
                  <li><a href="">Buyer</a></li>
                  <li><a href="">Seller</a></li>
                </ul>
              </span>

              <span className='flex flex-col gap-y-3 items-center justify-center w-full'>
                <h2 className='text-md w-full text-left'>Company</h2>
                <ul className='flex flex-col text-gray-400 items-start justify-center w-full'>
                  <li><a href="">About us</a></li>
                  <li><a href="">Our services</a></li>
                  <li><a href="">All Hotels</a></li>
                  <li><a href="">Contact us</a></li>
                </ul>
              </span>

              <span className='flex flex-col gap-y-3 items-center justify-center w-full'>
                <h2 className='text-md w-full text-left'>Further Information</h2>
                <ul className='flex flex-col text-gray-400 items-start justify-center w-full'>
                  <li><a href="">Terms & conditions</a></li>
                  <li><a href="">Privacy policy</a></li>
                </ul>
              </span>

              <span className='flex flex-col gap-y-3 items-center justify-center w-full lg:col-span-3 xl:col-span-1'>
                <h2 className='text-md w-full text-left'>Follow us</h2>
                <span className='flex items-center gap-x-3.5 justify-start w-full'>
                  <i className="p-2 text-md cursor-pointer fa-brands fa-linkedin-in bg-red-500" style={{ borderRadius: '50%', color: 'rgb(6 25 55)' }}></i>
                  <i className="p-2 text-md cursor-pointer fa-brands fa-facebook-f bg-red-500" style={{ borderRadius: '50%', color: 'rgb(6 25 55)' }}></i>
                  <i className="p-2 text-md cursor-pointer fa-brands fa-twitter bg-red-500" style={{ borderRadius: '50%', color: 'rgb(6 25 55)' }}></i>
                  <i className="p-2 text-md cursor-pointer fa-brands fa-pinterest-p bg-red-500" style={{ borderRadius: '50%', color: 'rgb(6 25 55)' }}></i>
                  {/* <i className="p-2 cursor-pointer fa-brands fa-linkedin-in bg-red-500" style={{borderRadius: '50%'}}></i> */}
                </span>
              </span>

              <span className='flex flex-col w-full gap-y-3 items-center justify-center'>
                <h2 className='text-md w-full text-left'>Follow us</h2>
                <span className='flex items-center justify-start w-full'>
                  <input className='py-1.5 px-1.5' type="text" placeholder='email address' style={{background:'transparent', backgroundColor: '#f0f8ff2e', outline: 'none'}} />
                  <i className="fa-sharp cursor-pointer py-2.5 px-3 fa-solid fa-paper-plane bg-red-500"></i>
                </span>
              </span>
            </span>

          </div>

        </div>
      </section>
    </>
  )
}

export default GuestFooter