import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useLoginMutation } from '../services/authentication'
import { useDispatch } from 'react-redux'
import { setCredenticals } from '../features/authSlice'
const Login = ({ close, handler }) => {

    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const [login, { isLoading, isError }] = useLoginMutation();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({
            ...prev, [name]: value
        }))
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await login(form).unwrap();
            console.log(res);
            dispatch(setCredenticals({ token: res.token, user: res.user }));
            handler(false);
            toast.success(res.message)
        } catch (err) {
            toast.error("Error Occured!!")
        }
    }

    const handleClick = (e) => {
        if (e.target.className.includes("parent")) {
            handler(false)
        }
    }
    return (
        <>
            <div onClick={(e) => handleClick(e)} className={`parent w-full h-screen isolate bg-gray-900/95 fixed  top-0 left-0 z-50 grid place-items-center ${close ? '' : 'hidden'}`}>

                <div className='bg-white rounded-lg p-4 text-black max-w-[350px] w-full' onSubmit={(e) => handleSubmit(e)}>
                    <form className='flex flex-col gap-4 '>
                        <h2 className='text-2xl font-semibold mb-4'>Login Form</h2>
                        <input type="email" placeholder='Enter email' className='p-2 rounded border border-gray-200' name='email' value={form.email} onChange={(e) => handleChange(e)} />
                        <input type="password" placeholder='Enter password' className='p-2 rounded border border-gray-200' name='password' value={form.password} onChange={(e) => handleChange(e)} />
                        <input type="submit" className='bg-blue-500 text-white p-2 rounded' value={isLoading ? "Loading..." : "Submit"} />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login