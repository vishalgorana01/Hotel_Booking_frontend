import React, {useRef} from 'react'

function Bookings() {
  const plusRef = useRef()

  let check = true
  const hideShow = ()=>{
    if(check){
      plusRef.current.classList.remove('hidden')
      plusRef.current.classList.add('flex')
      check = false
    }
    else{
      plusRef.current.classList.remove('flex')
      plusRef.current.classList.add('hidden')
      check = true
    }
  }
  return (
    <>
      <section className='flex items-center justify-center w-full'>
        <div className="flex items-center justify-center flex-col py-4 px-2 w-full max-w-7xl">

          <span className='flex items-center justify-between text-cyan-100 w-full px-1'>
            <span className='flex items-start flex-col justify-center gap-1'>
              <h2 className='text-cyan-100 text-xl sm:text-3xl'>Bookings</h2>
              <p className='text-xs font-normal italic sm:text-sm'>you have total 3908 bookings</p>
            </span>
            <span className='flex relative items-center justify-center cursor-pointer p-2' style={{backgroundColor : '#8044c4'}}>
              <i className="fa-sharp text-md fa-solid fa-plus" onClick={()=> hideShow()}></i>

              <span className='hidden absolute top-8 right-10 w-32 items-center justify-center flex-col' style={{ border: '2px solid #020d1e', backgroundColor: 'rgb(4 17 37)' }} ref={plusRef}>
                <span className='flex items-center text-sm w-full justify-center py-1.5' style={{ borderBottom: '2px solid #020d1e'}}>Add Booking</span>
              </span>
            </span>
          </span>

          <span className='flex items-center justify-center w-full px-2'>

          </span>

        </div>
      </section>
    </>
  )
}

export default Bookings