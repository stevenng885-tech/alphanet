'use client'
import Image from 'next/image'
import React from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import Link from 'next/link';
import ContactForm from './common/ContactForm';
import PrimaryDivider from './divider/PrimaryDivider';

const navigation = [
    {
        title: "Trang chủ",
        href: "/"
    },
    {
        title: "Giới thiệu",
        href: "/about-us"
    },
    {
        title: "Kiến Thức",
        href: "/courses"
    },
    // {
    //     title: "Giải đấu",
    //     href: "/tournaments"
    // },
    // {
    //     title: "feedback",
    //     href: "/feedback"
    // },
]

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [isContactOpen, setIsContactOpen] = React.useState(false)
    return (
        <React.Fragment>
            <header className='fixed w-full py-2.5 text-white z-10 top-0 left-0 right-0 shadow-xl bg-[var(--nineth)]'>
                <div className='container m-auto flex justify-between items-center p-2'>
                    <Link href='/' className='flex items-center gap-2'>
                        <Image alt='logo' width={50} height={50} src="/assets/logo.png" />
                        <div className='text-xl font-bold'>ALPHA NET</div>
                    </Link>
                    <ul className='h-full justify-around gap-10 items-center uppercase hidden xl:flex'>
                        {
                            navigation.map((items) => {
                                return <li className='cursor-pointer' key={items.title}>
                                    <Link href={items.href}>{items.title}</Link>
                                </li>
                            })
                        }
                        <li>
                            <a href='/about-us#contact' className='uppercase shadow rounded-sm py-1 px-3 bg-white text-[var(--first)]'>Liên hệ</a>
                        </li>
                    </ul>
                    <div className='xl:hidden'>
                        <MdOutlineMenu onClick={() => setIsOpen(!isOpen)} size={40} />
                    </div>
                    <div className={`py-5 px-2 mobileMenu fixed ${isOpen ? "flex" : "hidden"} flex-col top-0 left-0 h-screen w-screen bg-[var(--nineth)] text-black `}>
                        <div className='flex justify-end text-white container mx-auto p-2'>
                            <button>
                                <IoMdClose onClick={() => setIsOpen(!isOpen)} size={40} />
                            </button>
                        </div>
                        <div className='flex flex-col gap-5 text-white justify-center text-center text-xl pt-10'>
                            {
                                navigation.map((items) => {
                                    return <button onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex-col flex' key={items.title}>
                                        <Link href={items.href}>{items.title}</Link>
                                        <PrimaryDivider />
                                    </button>
                                })
                            }
                            <a href='/about-us#contact'>
                                <button onClick={() => setIsOpen(!isOpen)} className='uppercase shadow rounded-sm px-10 py-2 bg-white text-[var(--first)]'>Liên hệ</button>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header