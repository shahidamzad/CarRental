import React, { useEffect } from 'react'
import NavbarOwner from '../../components/Owner/NavbarOwner.jsx'
import Sidebar from '../../components/Owner/Sidebar.jsx'
import { Outlet } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext.jsx'

const Layout = () => {
  const {isOwner, navigate} = useAppContext()

  useEffect(()=>{
    if(!isOwner){
      navigate('/')
    }
  },[isOwner])
  return (
    <div className='flex flex-col'>
      <NavbarOwner />
      <div className='flex'>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
