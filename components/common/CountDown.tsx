'use client'
import React from 'react'
type Props = {
    date: string
}
const CountDown = (props: Props) => {
    const [time, setTime] = React.useState({ d: 0, h: 0, m: 0, s: 0 })
    React.useEffect(() => {
        let myInterval = setInterval(() => {
            const countDownDate = new Date(props.date).getTime();
            const now = new Date().getTime();
            const distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTime({
                d: days, h: hours, m: minutes, s: seconds
            })
        }, 1000)
        return () => {
            clearInterval(myInterval)
        }
    }, [])
    return (
        <span className='flex gap-2 mx-2 items-center'>
            <span className='border-[var(--fiveth)] border px-3 py-1 font-bold  rounded bg-[var(--sixth)]'>{time.d}</span>
            <span>D</span>
            <span className='border-[var(--fiveth)] border px-3 py-1 font-bold  rounded bg-[var(--sixth)]'>{time.h}</span>
            <span>H</span>
            <span className='border-[var(--fiveth)] border px-3 py-1 font-bold  rounded bg-[var(--sixth)]'>{time.m}</span>
            <span>M</span>
            <span className='border-[var(--fiveth)] border px-3 py-1 font-bold  rounded bg-[var(--sixth)]'>{time.s}</span>
            <span>S</span>
        </span>
    )
}

export default CountDown