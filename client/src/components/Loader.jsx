import React from 'react'
import { loader } from '../../public/assets/assets'

const Loader = ({ isLoading }) => {
    return (
        <>
            {isLoading && <div className=''>
                <img src={loader} alt="" className='mx-auto bg-transparent w-12 h-12' />
            </div>}
        </>
    )
}

export default Loader