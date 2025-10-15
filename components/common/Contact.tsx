import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";
import Image from 'next/image';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div className='container mx-auto' id="contact">
            <div className='text-4xl flex justify-center py-10 text text-center'>
                Liên Hệ Với Chúng Tôi
            </div>
            <div className='flex gap-10 justify-around flex-col text-center xl:flex-row px-2'>
                <div className='flex flex-col gap-5 items-center flex-1'>
                    <Image src="/assets/logo/alpha.png" alt='logo' width={200} height={200} />
                    <div className='text-[var(--fourth)]'>
                        Hãy để lại thông tin để chúng tôi có thể liên hệ với bạn nhanh nhất
                    </div>
                </div>
                <div className='gap-5 flex flex-co flex-1'>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Contact