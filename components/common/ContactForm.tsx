'use client'
import React from 'react'
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import { IoIosWarning } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";
import { firebaseFireStore } from '@/shared/utils/firebaseClient';
import { useForm, SubmitHandler } from "react-hook-form"
import PrimaryButton from '../button/PrimaryButton';
import { toast } from 'react-toastify';
type Inputs = {
    name: string
    email: string
    phone: string
    message: string
}
const rules = {
    name: {
        required: "Vui lòng Nhập Tên !!",
        minLength: { value: 2, message: "Tên Ít nhất phải có 2 ký tự" },
        validate: (v: string) =>
            !/^\d+$/.test(v.trim()) || "Tên không thể chỉ là số",
    },
    phone: {
        required: "Vui lòng nhập số điện thoại !!",
        // VN numbers: 0xxxxxxxxx or +84xxxxxxxxx, prefixes 3/5/7/8/9
        pattern: {
            value: /^(?:\+?84|0)(?:3|5|7|8|9)\d{8}$/,
            message: "Vui lòng nhập đúng Số điện thoại !!",
        },
    },
    email: {
        pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
            message: "email Không đúng định dạng !!",
        },
    },
} as const;

const ContactForm = () => {
    const [isLoading, setIsLoading] = React.useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
        try {
            setIsLoading(true)
            await addDoc(collection(firebaseFireStore, "contacts"), {
                ...data,
                createdDate: serverTimestamp(),
                message: "user data"
            })
            toast.success("Thành Công, Chúng Tôi Sẽ Sớm Liên Hệ Với Bạn!!")
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            toast.info("Hãy Thử Liên Hệ Với Chúng Tôi Bằng Phương Thức Khác!!")
            console.log(error)
        }
    }
    return (
        <div className='p-5 rounded-xl flex flex-col gap-5 w-full'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 '>
                <div className='flex flex-col gap-1'>
                    <div className='border flex items-center rounded-xl p-3' >
                        <div className='border-r pr-5'>
                            <FaUser size={24} className='text-[var(--second)]' />
                        </div>
                        <input {...register("name", rules.name)} type="text" className='outline-0 px-5 w-full' placeholder='Tên Của Bạn' />
                    </div>
                    {
                        errors.name && <div className='flex justify-start items-center gap-1 text-sm text-red-500 mx-1 capitalize'>
                            <IoIosWarning /> {errors.name.message}
                        </div>
                    }
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='border flex items-center rounded-xl p-3'>
                        <div className='border-r pr-5'>
                            <IoIosMail size={24} className='text-[var(--second)]' />
                        </div>
                        <input {...register("email", rules.email)} type="text" className='outline-0 px-5 w-full' placeholder='Email (Có Thể Bỏ Trống)' />
                    </div>
                    {
                        errors.email && <div className='flex justify-start items-center gap-1 text-sm text-red-500 mx-1 capitalize'>
                            <IoIosWarning /> {errors.email.message}
                        </div>
                    }

                </div>
                <div className='flex flex-col gap-1'>
                    <div className='border flex items-center rounded-xl p-3'>
                        <div className='border-r pr-5'>
                            <FaPhoneAlt size={24} className='text-[var(--second)]' />
                        </div>
                        <input {...register("phone", rules.phone)} type="text" className='outline-0 px-5 w-full' placeholder='Số Điện Thoại' />
                    </div>
                    {
                        errors.phone && <div className='flex justify-start items-center gap-1 text-sm text-red-500 mx-1 capitalize'>
                            <IoIosWarning /> {errors.phone.message}
                        </div>
                    }
                </div>
                <PrimaryButton isLoading={isLoading} type='submit' >
                    Liên Hệ Ngay <IoIosSend />
                </PrimaryButton>
            </form>
            <div className='flex gap-2 items-center flex-col'>
                <div className='font-bold'>Hoặc Bạn có thể liên hệ chúng tôi qua:</div>
                <div className="flex gap-5 text-xl text-[var(--second)]">
                    <a href='https://t.me/Crypt0vn' target='_blank' className='cursor-pointer border border-[var(--second)] rounded p-2 flex justify-center items-center'>
                        <FaTelegramPlane />
                    </a>
                    <a href='https://www.facebook.com/profile.php?id=100079515246834' target='_blank' className='cursor-pointer border border-[var(--second)] rounded p-2 flex justify-center items-center'>
                        <FaFacebookF />
                    </a>
                    <a href='https://zalo.me/g/yryszv608' target='_blank' className='cursor-pointer border border-[var(--second)] rounded p-2 flex justify-center items-center'>
                        <SiZalo />
                    </a>
                    <a href='https://www.tiktok.com/search?q=ALPHANET&t=1760590899718' target='_blank' className='cursor-pointer border border-[var(--second)] rounded p-2 flex justify-center items-center'>
                        <FaTiktok />
                    </a>
                    <a href='tel:0586636343' target='_blank' className='cursor-pointer border border-[var(--second)] rounded p-2 flex justify-center items-center'>
                        <FaPhoneAlt />
                    </a>
                </div>
            </div>
        </div>

    )
}

export default ContactForm