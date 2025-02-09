import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='dark:bg-gray-900 dark:text-gray-200 transition-all ease-in-out text-gray-900'>
            <div className="max-w-[1180px] px-6 md:mx-12 xl:mx-auto">
                {/* navbar */}
                <Navbar />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout