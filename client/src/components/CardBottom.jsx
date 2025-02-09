import React from 'react'
import Badge from './Badge'
import { user1 } from '../../public/assets/assets'

const CardBottom = ({ item }) => {
    if (!item) {
        return null;
    }

    return (
        <>
            <Badge value={item?.category[0]} background={'bg-blue-500'} color={'text-white'} />
            <h1 className="capitalize font-semibold text-base sm:text-xl my-3 line-clamp-3">{item?.title}</h1>
            <div className="flex items-center justify-between text-[10px] sm:text-xs custom">
                <div className='flex items-center gap-2'>
                    <img src={user1} alt="profile photo" className="w-8 h-8 rounded-full" />
                    <span className=''>{item.user.username}</span>
                </div>
                <span>{new Date(item.user.updatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
            </div>
        </>
    )
}

export default CardBottom