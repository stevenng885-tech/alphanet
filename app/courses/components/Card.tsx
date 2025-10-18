import React from 'react'

const Card = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className='rounded-xl flex flex-col p-5 gap-3 divider-right text-white bg-[#ffffff3b] backdrop-blur-sm]'>
            {children}
        </div>
    )
}

export default Card