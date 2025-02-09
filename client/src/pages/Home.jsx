import React, { useEffect, useState } from 'react'
import { heroImg, user1 } from '../assets/assets'
import CardBottom from '../components/CardBottom'
import Card from '../components/Card'
import { useGetAllBlogQuery } from '../services/blog'
import Badge from '../components/Badge'
import Loader from '../components/Loader'

const Home = () => {
    const [post, setPost] = useState([]);
    const { data, isLoading } = useGetAllBlogQuery();

    useEffect(() => {
        if (data?.blog) {
            setPost(data.blog)
        }
    }, [post, data]);

    return (
        <main>
            <Loader isLoading={isLoading} />
            {/* hero section */}
            {!isLoading && <><section className="my-8 relative overflow-hidden">
                <img src={heroImg} alt="hero image" className="max-h-[500px] w-full object-cover rounded-xl" />
                <div className="bg-gray-200 p-4 rounded-lg max-w-[400px] w-full relative bottom-8 left-4 md:left-20 md:bottom-16 xl:bottom-36 xl:left-28 dark:bg-gray-900 shadow shadow-gray-300 dark:shadow-gray-800 border dark:border-gray-700 border-gray-200">
                    <Badge value={'Technology'} background={'bg-blue-500'} color={'text-white'} />
                    <h1 className="capitalize font-semibold text-base sm:text-xl my-3 line-clamp-3">The impact of Technology on the workplace: How Technology is Changing</h1>
                    <div className="flex items-center justify-between text-[10px] sm:text-xs custom">
                        <div className='flex items-center gap-2'>
                            <img src={user1} alt="profile photo" className="w-8 h-8 rounded-full" />
                            <span className=''>Jason Francisco</span>
                        </div>
                        <span>August 20, 2022</span>
                    </div>
                </div>
            </section>

                <section className='flex items-center justify-center flex-col'>
                    <h2 className="mt-4 mb-12 text-2xl font-semibold">Latest Post</h2>
                    <div className="grid grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-3 gap-4">
                        {post.map(item => (
                            <div key={item._id}><Card item={item} /></div>
                        ))}

                    </div>
                </section></>}
        </main>
    )
}

export default Home