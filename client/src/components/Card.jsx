import React from 'react'
import { heroImg } from '../../public/assets/assets'
import CardBottom from './CardBottom'
import { Link } from 'react-router-dom'

const Card = ({ item }) => {
    return (
        <>
            <Link to={`detail/${item._id}`}>
                <div className='border border-gray-200 dark:border-gray-800 p-2 sm:p-4 rounded-xl'>
                    <img src={`https://blog-web-4ryv.onrender.com/uploads/${item?.heroImg}`} alt="hero image" className="h-[200px] w-full object-cover rounded-xl" />
                    <div className='mt-6 p-2'>
                        <CardBottom item={item} />
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Card