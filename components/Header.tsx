'use client'
import Image from 'next/image'
import React from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const navigation = [
    {
        title: "Trang chủ",
        href: "#"
    },
    {
        title: "Giới thiệu",
        href: "#"
    },
    {
        title: "Tin tức",
        href: "#"
    },
]

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <header className='w-full py-2.5'>

            <div className='container m-auto flex justify-between items-center p-2'>
                <div className='flex items-center gap-2'>
                    <Image alt='logo' width={50} height={50} src="/assets/logo.png" />
                    <div className='text-xl font-bold'>ALPHA NET</div>
                </div>
                <ul className='h-full justify-around gap-10 items-center uppercase hidden md:flex'>
                    {
                        navigation.map((items) => {
                            return <li key={items.title}>
                                <a href={items.href}>{items.title}</a>
                            </li>
                        })
                    }
                    <li>
                        <button className='uppercase shadow rounded-sm py-1 px-3 bg-white text-[var(--first)]'>Liên hệ</button>
                    </li>
                </ul>
                <div className='md:hidden'>
                    <MdOutlineMenu onClick={() => setIsOpen(!isOpen)} size={40} />
                </div>
                <div className={`text-white p-2 mobileMenu fixed ${isOpen ? "flex" : "hidden"} flex-col top-0 left-0 h-screen w-screen bg-[var(--first)] text-black `}>
                    <div className='flex justify-end'>
                        <button>
                            <IoMdClose onClick={() => setIsOpen(!isOpen)} size={40} />
                        </button>
                    </div>
                    Hello world
                </div>
            </div>

        </header>
    )
}

export default Header