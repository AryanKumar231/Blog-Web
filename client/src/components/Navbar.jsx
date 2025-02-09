import React, { useEffect, useState } from 'react'
import { darkLogo, lightLogo } from "../assets/assets";
import { IoSunny, IoMoon, IoClose, IoSearchSharp } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "../features/themeSlice"
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import { logout } from '../features/authSlice';

const Navbar = () => {
    const { isAuthenticated } = useSelector(state => state.auth);
    const [navbarOpen, setNavbarOpen] = useState(false);
    const theme = useSelector((state) => state.theme.theme);
    const dispatch = useDispatch();
    const navigate=useNavigate();

    useEffect(() => {

        if (theme === 'dark') {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme])

    const [loginClose, setLoginClose] = useState(false);
    const [signupClose, setSignupClose] = useState(false);
    const handleClick = (e) => {
        if (e.target.innerText.toLowerCase() === "login") {
            setLoginClose(true);
        } else if (e.target.innerText.toLowerCase() === "signup") {
            setSignupClose(true);
        }
    }


    const handleLogout=()=>{
        dispatch(logout());
        navigate("/");
    }

    return (
        <>

            <nav className="flex justify-between items-center py-4 relative ">
                <div className="flex items-center">
                    <img src={theme == "dark" ? darkLogo : lightLogo} />
                    <span className='ml-1 text-xl'>Meta</span>
                    <span className='text-xl ml-[1px] font-semibold'>Blog</span>
                </div>
                <div className='hidden md:block'>
                    <ul className='flex gap-8 items-center'>
                        <Link to='/'><li className='hover:text-gray-300 cursor-pointer text-sm'>Home</li></Link>
                        {
                            isAuthenticated ? <>
                                <Link to='/profile'><li className='hover:text-gray-300 cursor-pointer text-sm'>Profile</li></Link>
                                <Link to='/write'><li className='hover:text-gray-300 cursor-pointer text-sm'>Write</li></Link>
                                <li className='hover:text-gray-300 cursor-pointer text-sm' onClick={handleLogout}>Logout</li>
                            </> : <>
                                <li className='hover:text-gray-300 cursor-pointer text-sm' onClick={(e) => handleClick(e)}>Login</li>
                                <li className='hover:text-gray-300 cursor-pointer text-sm' onClick={(e) => handleClick(e)}>Signup</li>
                                {loginClose && <Login close={loginClose} handler={setLoginClose} />}
                                {signupClose && <Signup close={signupClose} handler={setSignupClose} />}
                            </>
                        }
                        <Link to='/contact'><li className='hover:text-gray-300 cursor-pointer text-sm'>Contact</li></Link>
                    </ul>
                </div>
                <div className="flex gap-4 text-xl items-center ">
                    <div className='hidden lg:flex items-center border border-gray-200 bg-gray-200 px-3 py-1 rounded '>
                        <input type="text" className=' max-w-[200px] focus:border-none focus:outline-none dark:text-gray-900 text-xs' />
                        <IoSearchSharp className='dark:text-gray-900' />
                    </div>
                    {theme === "dark" ?
                        <IoMoon className='cursor-pointer' onClick={() => dispatch(toggleTheme())} /> :
                        <IoSunny className='cursor-pointer' onClick={() => dispatch(toggleTheme())} />
                    }
                    {<FaBarsStaggered className='cursor-pointer md:hidden' onClick={() => setNavbarOpen(!navbarOpen)} />}
                </div>
            </nav>
            <div className={`${navbarOpen ? '' : 'hidden'} z-50 fixed top-0 dark:bg-gray-900 left-0 px-12 bg-white  w-full py-12 border-b border-gray-200 dark:border-gray-800`}>
                <div className="absolute top-4 right-4 text-2xl"><IoClose className='cursor-pointer' onClick={() => setNavbarOpen(!navbarOpen)} /></div>
                <ul className='flex-col gap-4'>
                    <Link to='/'><li className='border-b dark:border-gray-800 border-gray-200 pb-2 pt-4'>Home</li></Link>
                    {
                        isAuthenticated ?
                            <>
                                <Link to='/profile'><li className='border-b dark:border-gray-800 border-gray-200 pb-2 pt-4 cursor-pointer'>Profile</li></Link>
                                <Link to='/write'><li className='border-b dark:border-gray-800 border-gray-200 pb-2 pt-4 cursor-pointer'>Write</li></Link>
                                <Link to='/'><li className='border-b dark:border-gray-800 border-gray-200 pb-2 pt-4 cursor-pointer' onClick={handleLogout}>Logout</li></Link>
                            </> : <>
                                <li className='border-b dark:border-gray-800 border-gray-200 pb-2 pt-4 cursor-pointer' onClick={(e) => handleClick(e)}>Login</li>
                                <li className='border-b dark:border-gray-800 border-gray-200 pb-2 pt-4 cursor-pointer' onClick={(e) => handleClick(e)}>Signup</li>
                                {loginClose && <Login close={loginClose} handler={setLoginClose} />}
                                {signupClose && <Signup close={signupClose} handler={setSignupClose} />}
                            </>
                    }
                    <Link to='/contact'><li className='border-b dark:border-gray-800 border-gray-200 pb-2 pt-4'>Contact</li></Link>

                </ul>
                <div className='flex items-center border border-gray-200 bg-gray-200 px-3 py-1 rounded mt-6'>
                    <input type="text" className='w-full focus:border-none focus:outline-none dark:text-gray-900 text-xs py-2' />
                    <IoSearchSharp className='dark:text-gray-900' />
                </div>
            </div>
            <Login />
        </>
    )
}

export default Navbar