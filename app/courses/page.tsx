import Image from 'next/image'
import React from 'react'

const cousers = [
    {
        name: "Khóa Học Price Action Nâng Cao",
        description: "Phân tích biến động giá, xác định vùng hấp dẫn",
        imgSrc: "/assets/courses/course_1.png",
    },
    {
        name: "Khóa Học Price Action Nâng Cao",
        description: "Phân tích biến động giá, xác định vùng hấp dẫn",
        imgSrc: "/assets/courses/course_1.png",
    },
    {
        name: "Khóa Học Price Action Nâng Cao",
        description: "Phân tích biến động giá, xác định vùng hấp dẫn",
        imgSrc: "/assets/courses/course_1.png",
    },
    {
        name: "Khóa Học Price Action Nâng Cao",
        description: "Phân tích biến động giá, xác định vùng hấp dẫn",
        imgSrc: "/assets/courses/course_1.png",
    },
    {
        name: "Khóa Học Price Action Nâng Cao",
        description: "Phân tích biến động giá, xác định vùng hấp dẫn",
        imgSrc: "/assets/courses/course_1.png",
    },
    {
        name: "Khóa Học Price Action Nâng Cao",
        description: "Phân tích biến động giá, xác định vùng hấp dẫn",
        imgSrc: "/assets/courses/course_1.png",
    },
    {
        name: "Khóa Học Price Action Nâng Cao",
        description: "Phân tích biến động giá, xác định vùng hấp dẫn",
        imgSrc: "/assets/courses/course_1.png",
    },
    {
        name: "Khóa Học Price Action Nâng Cao",
        description: "Phân tích biến động giá, xác định vùng hấp dẫn",
        imgSrc: "/assets/courses/course_1.png",
    },
]

const Home = () => {
    return (
        <div className='w-full min-h-screen'>
            <div className='pt-30 container mx-auto flex flex-col'>
                <div className='text-black text-4xl font-bold mb-10'>
                    Các khóa học tại Alpha Net:
                </div>
                <div className='flex gap-10 justify-between flex-wrap'>
                    {
                        cousers.map((item, index) => {
                            return <div key={item.name + index} className='rounded-xl flex flex-col p-5 gap-3 border divider-right min-w-[20%]'>
                                <Image className='rounded-xl w-full h-full' alt='course' width={200} height={200} src={item.imgSrc} />
                                <div className='font-bold text-xl'>{item.name}</div>
                                <div className='text-[var(--fourth)] text-sm'>{item.description}</div>
                                <button className='rounded border bg-[var(--second)] text-white py-2 px-4'>
                                    Đăng ký ngay
                                </button>
                            </div>
                        })
                    }

                </div>
            </div>

        </div>
    )
}

export default Home