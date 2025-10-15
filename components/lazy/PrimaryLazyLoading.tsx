'use client'
import React from 'react'
import Skeleton from 'react-loading-skeleton';

const PrimaryLazyLoading = ({ time = 500, children }: { time: number, children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = React.useState(true)
    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, time)
    }, [])
    return isLoading ? <Skeleton duration={2} /> : children
}

export default PrimaryLazyLoading