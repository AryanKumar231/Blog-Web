import React, { useEffect, useState } from 'react'
import { MdDelete, MdEdit } from "react-icons/md";
import { useDeleteBlogMutation, useGetUserBlogQuery } from '../services/blog';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../features/authSlice';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';

const Profile = () => {

    const [post, setPost] = useState([]);
    const [open, setOpen] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { data, isLoading } = useGetUserBlogQuery();
    const [deleteBlog] = useDeleteBlogMutation();

    useEffect(() => {
        if (data?.blog) {
            setPost(data.blog);
        }
    }, [data])

    const handleLogout = () => {
        dispatch(logout())
        navigate("/")
    }

    const handleDelete = async (id) => {
        const res = await deleteBlog(id).unwrap();
        toast.success(res.message)
        setPost((prevPosts) => prevPosts.filter((item) => item._id !== id));
    }


    const handleClick = () => {
        setOpen(true);
    }
    const handleEdit = (id) => {
        navigate("/write", {
            state: {
                id
            }
        })
    }

    return (
        <>
            <Loader isLoading={isLoading} />
            {!isLoading && post && <main className='lg:flex mt-12 gap-12 relative'>
                <aside>
                    <ul className='border border-gray-800 dark:border-gray-700 p-8 w-full lg:w-[250px] rounded flex lg:flex-col gap-8 sticky top-10'>
                        <li className='cursor-pointer' onClick={handleClick}>My blogs</li>
                        <li className='cursor-pointer'>Settings</li>
                        <li className='cursor-pointer' onClick={handleLogout}>Logout</li>
                    </ul>
                </aside>
                <section className='flex-1'>
                    <div className={`${open ? '' : 'hidden'}`}>

                        <h1 className='text-xl font-semibold mt-12 lg:mt-0'>My Blogs</h1>
                        {
                            post.map((item) => (
                                <div key={item._id} className='my-6 flex justify-between items-center gap-6 border-b border-gray-800 dark:border-gray-700 pb-2'>
                                    <img src={`http://127.0.0.1:4000/uploads/${item?.heroImg}`} alt="" className='w-12 h-12 rounded' />

                                    <h2 className='text-2xl flex-1 overflow-ellipsis line-clamp-1'>
                                        <Link to={`/detail/${item._id}`}>{item.title}</Link>
                                    </h2>

                                    <div className='flex items-center gap-3'>
                                        <button className='flex items-center cursor-pointer hover:text-blue-500 transition ease-in-out' onClick={() => handleEdit(item._id)}><MdEdit /> Edit</button>
                                        <button className='flex items-center cursor-pointer hover:text-blue-500 transition ease-in-out' onClick={() => handleDelete(item._id)}><MdDelete /> Delete</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </main>}
        </>
    )
}

export default Profile