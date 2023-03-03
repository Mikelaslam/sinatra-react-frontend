import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar.js'

function Layout() {
  return (
    <div>
        <Navbar />
        <div className='container min-vh-100 p-4 '>
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default Layout