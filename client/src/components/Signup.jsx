import React, { useState } from 'react'
import { useSignupMutation } from '../services/authentication'
import { toast } from "react-toastify";
const Signup = ({ close, handler }) => {
    const [signup, { isLoading, isError }] = useSignupMutation();
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    })


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await signup(form).unwrap(); // API call
            handler(false)
            toast.success(res.message + "Now Login if success!! ")
        } catch (err) {
            toast.error("Something went wrong!!")
        }
    }


    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prev) => ({
            ...prev, [name]: value
        }))
    }


    const handleClick = (e) => {
        if (e.target.className.includes("parent")) {
            handler(false)
        }
    }
    return (
        <>
            <div onClick={(e) => handleClick(e)} className={`parent w-full h-screen isolate bg-gray-900/95 fixed  top-0 left-0 z-50 grid place-items-center ${close ? '' : 'hidden'}`}>

                <div className='bg-white rounded-lg p-4 text-black max-w-[350px] w-full' >
                    <form className='flex flex-col gap-4 ' onSubmit={(e) => handleSubmit(e)}>
                        <h2 className='text-2xl font-semibold mb-4'>Signup Form</h2>
                        <input type="text" placeholder='Enter Username' className='p-2 rounded border border-gray-200' name='username' value={form.username} onChange={(e) => handleChange(e)} />
                        <input type="email" placeholder='Enter email' className='p-2 rounded border border-gray-200' name='email' value={form.email} onChange={(e) => handleChange(e)} />
                        <input type="password" placeholder='Enter password' className='p-2 rounded border border-gray-200' name='password' value={form.password} onChange={(e) => handleChange(e)} />
                        <input type='submit' className='bg-blue-500 text-white p-2 rounded' value={isLoading ? "Loading..." : "Submit"} />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup