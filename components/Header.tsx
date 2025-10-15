'use client'
import Image from 'next/image'
import React from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import Link from 'next/link';
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";
import ContactForm from './common/ContactForm';
import PrimaryDivider from './divider/PrimaryDivider';

const navigation = [
    {
        title: "Trang chủ",
        href: "/"
    },
    // {
    //     title: "Giải đấu",
    //     href: "/tournaments"
    // },
    {
        title: "Kiến Thức",
        href: "/courses"
    },
    {
        title: "Giới thiệu",
        href: "/about-us"
    },
    // {
    //     title: "Tin tức",
    //     href: "#"
    // },
]

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [isContactOpen, setIsContactOpen] = React.useState(false)
    return (
        <React.Fragment>
            <header className='fixed w-full py-2.5 text-white z-10 top-0 left-0 right-0 shadow-xl '>
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
                            <button onClick={() => setIsContactOpen(!isContactOpen)} className='uppercase shadow rounded-sm py-1 px-3 bg-white text-[var(--first)]'>Liên hệ</button>
                        </li>
                    </ul>
                    <div className='xl:hidden'>
                        <MdOutlineMenu onClick={() => setIsOpen(!isOpen)} size={40} />
                    </div>
                    <div className={`py-5 px-2 mobileMenu fixed ${isOpen ? "flex" : "hidden"} flex-col top-0 left-0 h-screen w-screen bg-[var(--nineth)] text-black `}>
                        <div className='flex justify-end text-white'>
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
                            <a href='/#contact'>
                                <button onClick={() => setIsOpen(!isOpen)} className='uppercase shadow rounded-sm py-1 px-10 py-2 bg-white text-[var(--first)]'>Liên hệ</button>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            {
                isContactOpen ?
                    <div className='fixed w-screen h-screen bg-[var(--eighth)] z-10 flex justify-center items-center'>
                        <div className='min-w-[40vw] bg-[#F5F6F8] rounded-2xl p-5 shadow-2xs relative'>
                            <button onClick={() => setIsContactOpen(!isContactOpen)} className='absolute right-[20px] top-[20px] rounded-full hover:shadow-2xl hover:bg-[#ccc]'>
                                <IoMdClose size={32} />
                            </button>
                            <div className='gap-5 flex flex-col'>
                                <div className='flex justify-center'>
                                    <Image src="/assets/logo/alpha.png" alt='logo' width={200} height={200} />
                                </div>
                                <div className='text-[var(--fourth)] text-center'>
                                    Hãy để lại thông tin để chúng tôi có thể liên hệ với bạn nhanh nhất
                                </div>
                                <div className='p-5 rounded-xl flex flex-col gap-5'>
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                    : <></>
            }
        </React.Fragment>
    )
}

export default Header