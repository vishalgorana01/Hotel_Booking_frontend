import React, { useState, useRef, useEffect } from 'react'
// import * as dotenv from 'dotenv'
import axios from 'axios'
import AdminNavbar from '../Components/NavBars/AdminNavbar'
import AdminDashboardSidebar from '../Components/SideBars/AdminDashboardSidebar'
import Dashboard from '../Components/Admin Components/Dashboard'
import Customers from '../Components/Admin Components/Customers'
import Support from '../Components/Admin Components/Support'
import Settings from '../Components/Admin Components/Settings'
import Bookings from '../Components/Admin Components/Bookings/Bookings'
import Rooms from '../Components/Admin Components/Rooms/Rooms'
import Hotels from '../Components/Admin Components/Hotels/Hotels'
import Payments from '../Components/Admin Components/Payments/Payments'
import AddHotel from '../Components/Admin Components/Hotels/AddHotel'


function Admin() {
    // dotenv.config()

    const [AdminComponent, setAdminComponent] = useState(<Dashboard/>)

    // const AdminComponent = () => {
    //     // document.body.onload = null
    //     
    // }

    return (
        <>
            <section className='flex items-center justify-center '>
                <div className='flex h-screen relative w-full items-center justify-between'>
                    <AdminDashboardSidebar setAdminComponent = {setAdminComponent} />

                    <div className='flex flex-col items-center justify-start overflow-y-scroll h-full w-full' style={{ backgroundColor: '#021025fc' }}>
                        {/* <div className='w-6/12 bg-red-600' style={{height: '2000px'}}></div> */}
                        <AdminNavbar />

                        {AdminComponent}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Admin