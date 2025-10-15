import React from 'react'
type Props = {
    children?: React.ReactNode,
    isLoading?: Boolean
    type: "submit" | "reset" | "button" | undefined;
    className?: string
}
const PrimaryButton = ({ children, isLoading = false, type, className = "" }: Props) => {
    return isLoading ?
        <button type={type} className={`bg-[var(--second)] rounded-xl text-white uppercase py-2 flex gap-2 justify-center items-center ${className}`}>
            <div className='loader'></div>
        </button>
        :
        <button type={type} className='bg-[var(--second)] rounded-xl text-white uppercase py-2 flex gap-2 justify-center items-center'>{children}</button>
}

export default PrimaryButton