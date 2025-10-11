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
import { FaYoutube } from "react-icons/fa";

const navigation = [
    {
        title: "Trang chủ",
        href: "/"
    },
    {
        title: "Giới thiệu",
        href: "#"
    },
    {
        title: "Giải đấu",
        href: "/tournaments"
    },
    {
        title: "Khóa Học",
        href: "/courses"
    },
    // {
    //     title: "Tin tức",
    //     href: "#"
    // },
]

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [isContactOpen, setIsContactOpen] = React.useState(true)
    return (
        <>
            <header className='fixed w-full py-2.5 text-white z-10 top-0 left-0 right-0 bg-[var(--second)]'>
                <div className='container m-auto flex justify-between items-center p-2'>
                    <Link href='/' className='flex items-center gap-2'>
                        <Image alt='logo' width={50} height={50} src="/assets/logo.png" />
                        <div className='text-xl font-bold'>ALPHA NET</div>
                    </Link>
                    <ul className='h-full justify-around gap-10 items-center uppercase hidden md:flex'>
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
                    <div className='md:hidden'>
                        <MdOutlineMenu onClick={() => setIsOpen(!isOpen)} size={40} />
                    </div>
                    <div className={`p-2 mobileMenu fixed ${isOpen ? "flex" : "hidden"} flex-col top-0 left-0 h-screen w-screen bg-[var(--first)] text-black `}>
                        <div className='flex justify-end'>
                            <button>
                                <IoMdClose onClick={() => setIsOpen(!isOpen)} size={40} />
                            </button>
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
                                <div className='p-5 rounded-xl flex flex-col gap-5'>
                                    <form action="" className='flex flex-col gap-3 '>
                                        <div className='border flex items-center rounded-xl p-3' >
                                            <div className='border-r pr-5'>
                                                <FaUser size={24} className='text-[var(--second)]' />
                                            </div>
                                            <input type="text" className='outline-0 px-5 w-full' placeholder='Tên Của Bạn' />
                                        </div>
                                        <div className='border flex items-center rounded-xl p-3'>
                                            <div className='border-r pr-5'>
                                                <IoIosMail size={24} className='text-[var(--second)]' />
                                            </div>
                                            <input type="text" className='outline-0 px-5 w-full' placeholder='Email' />
                                        </div>
                                        <div className='border flex items-center rounded-xl p-3'>
                                            <div className='border-r pr-5'>
                                                <FaPhoneAlt size={24} className='text-[var(--second)]' />
                                            </div>
                                            <input type="text" className='outline-0 px-5 w-full' placeholder='Số Điện Thoại' />
                                        </div>
                                        <button className='bg-[var(--second)] rounded-xl text-white uppercase py-2'>
                                            Liên Hệ Ngay
                                        </button>
                                    </form>
                                    <div className='flex gap-2 items-center'>
                                        <div className='font-bold'>Hoặc Bạn có thể liên hệ chúng tôi qua:</div>
                                        <div className="flex gap-5 text-xl text-[var(--second)]">
                                            <a href='https://t.me/Crypt0vn' target='_blank' className='cursor-pointer border border-[var(--second)] rounded p-2 flex justify-center items-center'>
                                                <FaTelegramPlane />
                                            </a>
                                            <a href='https://www.facebook.com/profile.php?id=100094833382394' target='_blank' className='cursor-pointer border border-[var(--second)] rounded p-2 flex justify-center items-center'>
                                                <FaFacebookF />
                                            </a>
                                            <a href='https://zalo.me/g/yowula280' target='_blank' className='cursor-pointer border border-[var(--second)] rounded p-2 flex justify-center items-center'>
                                                <SiZalo />
                                            </a>
                                            <a href='#' target='_blank' className='cursor-pointer border border-[var(--second)] rounded p-2 flex justify-center items-center'>
                                                <FaTiktok />
                                            </a>
                                            <a href='tel:0586636343' target='_blank' className='cursor-pointer border border-[var(--second)] rounded p-2 flex justify-center items-center'>
                                                <FaPhoneAlt />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : <></>
            }
        </>
    )
}

export default Header