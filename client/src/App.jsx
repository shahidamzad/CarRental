import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CarDetails from './pages/CarDetails.jsx'
import Cars from './pages/Cars.jsx'
import MyBookings from './pages/MyBookings.jsx'
import Footer from './components/Footer.jsx'
import Layout from './pages/Owner/Layout.jsx'
import Dashboard from './pages/owner/Dashboard.jsx'
import AddCar from './pages/owner/AddCar.jsx'
import ManageCars from './pages/owner/ManageCars.jsx'
import ManageBookings from './pages/owner/ManageBookings.jsx'
import Login from './components/Login.jsx'
import { Toaster } from 'react-hot-toast'
import { useAppContext } from './context/AppContext.jsx'

const App = () => {

  const {showLogin} = useAppContext()
  const isOwnerPath = useLocation().pathname.startsWith('/owner')

  return (
    <>
     <Toaster />
      {showLogin && <Login/>}

      {!isOwnerPath && <Navbar/>}

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/car-details/:id' element={<CarDetails/>}/>
      <Route path='/cars' element={<Cars/>}/>
      <Route path='/my-bookings' element={<MyBookings/>}/>
      <Route path='/owner' element={<Layout />}>
        <Route index element={<Dashboard />}/>
        <Route path="add-car" element={<AddCar />}/>
        <Route path="manage-cars" element={<ManageCars />}/>
        <Route path="manage-bookings" element={<ManageBookings />}/>
      </Route>
    </Routes>

    {!isOwnerPath && <Footer />}
    
    </>
  )
}

export default App
