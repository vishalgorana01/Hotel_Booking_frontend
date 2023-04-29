import React from 'react'
import GuestFooter from '../Components/Footers/GuestFooter'
import UserNavbar from '../Components/NavBars/UserNavbar'
import GuestNavbar from '../Components/NavBars/GuestNavbar'
import BookingSatus from '../Components/Your Bookings/BookingSatus'

function YourBookings() {
  const NavBar = () => {
    if (sessionStorage.getItem('userId')) {
      return (<UserNavbar bgColor='rgb(11 36 75)' />)
    }
    else {
      return (<GuestNavbar bgColor='rgb(11 36 75)' />)
    }
  }



  return (
    <>
      <NavBar />
      <BookingSatus />
      <GuestFooter />
    </>
  )
}

export default YourBookings