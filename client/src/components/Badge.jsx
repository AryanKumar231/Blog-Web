import React from 'react'

const Badge = ({ value, background, color }) => {
    return (
        <>
            <span className={`text-xs py-1 px-2 ${background} ${color} rounded-lg capitalize`}>{value}</span>
        </>
    )
}

export default Badge