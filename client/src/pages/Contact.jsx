import React from 'react'
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
    return (
        <>
            <div className='my-12'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198197.6084977948!2d77.95111330262066!3d29.952547305363314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909470eb8ee57c9%3A0x4e449176a640f5f3!2sHaridwar%2C%20Uttarakhand!5e1!3m2!1sen!2sin!4v1738867334871!5m2!1sen!2sin" className='w-full h-[400px]'  loading="lazy" ></iframe>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center gap-12 md:gap-8 my-12 md:my-24'>
                <div>
                    <div>
                        <h2 className='text-3xl font-semibold'>Feel Free to Contact Us</h2>
                        <p className='text-xs leading-snug my-8'>
                            Our dedicated support team is available to assist you with any inquiries or concerns you may have. We strive to provide prompt and helpful assistance to ensure your learning experience with us is seamless and enjoyable.
                        </p>
                    </div>
                    <div className='flex gap-4 items-center my-6'>
                        <span className='inline-block bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-gray-300 p-3 rounded-full '><IoMdCall className='' /></span>
                        <div className='flex flex-col gap-[2px]'>
                            <span className='text-xs'>Call us directly?</span>
                            <span className='text-xs font-semibold'>+1 234 567 890</span>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center my-6'>
                        <span className='inline-block bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-gray-300 p-3 rounded-full '><FaLocationDot className='' /></span>
                        <div className='flex flex-col gap-[2px]'>
                            <span className='text-xs'>Address</span>
                            <span className='text-xs font-semibold'>Haridwar, Uttarakhand, 240242</span>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center my-6'>
                        <span className='inline-block bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-gray-300 p-3 rounded-full '><MdEmail className='' /></span>
                        <div className='flex flex-col gap-[2px]'>
                            <span className='text-xs'>Email</span>
                            <span className='text-xs font-semibold'>contact@blog.com</span>
                        </div>
                    </div>
                </div>

                <form className='border border-gray-200 dark:border-gray-800 flex flex-col p-6 rounded-lg gap-6 w-full'>
                    <h2 className='font-semibold text-2xl '>Get In Touch</h2>
                    <input type="email" name="" id="" className='border border-gray-200 dark:border-gray-800 rounded-md p-2 focus:outline-gray-500 dark:text-gray-100 text-gray-800' placeholder='Enter email' />
                    <input type="text" name="" id="" className='border border-gray-200 dark:border-gray-800 rounded-md p-2 focus:outline-gray-500 dark:text-gray-100 text-gray-800' placeholder='subject' />
                    <textarea className='border border-gray-200 dark:border-gray-800 rounded-md p-2 focus:outline-gray-500 resize-none dark:text-gray-100 text-gray-800' rows={2} placeholder='Message'></textarea>
                    <input type="submit" value="Submit" className='border border-gray-200 dark:border-gray-800 p-2 bg-blue-500 text-white rounded-lg' />
                </form>
            </div>
        </>
    )
}

export default Contact