import React from 'react'
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";
import Image from 'next/image';
import { IoIosSend } from "react-icons/io";
const Contact = () => {
    return (
        <div className='container mx-auto'>
            <div className='text-5xl flex justify-center py-10'>
                Liên Hệ Với Chúng Tôi
            </div>
            <div className='flex gap-10 justify-around'>
                <div className='flex flex-col gap-5 items-center'>
                    <Image src="/assets/logo/alpha.png" alt='logo' width={200} height={200} />
                    <div className='text-[var(--fourth)]'>
                        Hãy để lại thông tin để chúng tôi có thể liên hệ với bạn nhanh nhất
                    </div>
                </div>
                <div className='gap-5 flex flex-col'>
                    <div className='p-5 rounded-xl flex flex-col gap-5'>
                        <form action="" className='flex flex-col gap-5 '>
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
                            <button className='bg-[var(--second)] rounded-xl text-white uppercase py-2 flex gap-2 justify-center items-center'>
                                Liên Hệ Ngay <IoIosSend />
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
    )
}

export default Contact