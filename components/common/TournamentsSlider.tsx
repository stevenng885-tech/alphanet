'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
const tournaments = [
    {
        title: "HiBT- giải đấu Futures cá nhân",
        imgURL: "/assets/tournaments/1.png",
        link: ""
    },
    {
        title: "Giải cá nhân Futures",
        imgURL: "/assets/tournaments/2.png",
        link: ""
    },
    {
        title: "Giải Đấu Futures Đội 2 Người",
        imgURL: "/assets/tournaments/3.png",
        link: ""
    },
    {
        title: "Giải cá nhân từ thiện",
        imgURL: "/assets/tournaments/4.png",
        link: ""
    },
    {
        title: "HiBT Cuộc thi Futures Đội nhóm",
        imgURL: "/assets/tournaments/5.png",
        link: ""
    },
    {
        title: "Giải Đấu Futures Mô Phỏng Theo Đội",
        imgURL: "/assets/tournaments/6.png",
        link: ""
    },
    {
        title: "Đội Thi Giao Dịch Futures Mô Phỏng",
        imgURL: "/assets/tournaments/7.png",
        link: ""
    },
    {
        title: "Giải Đấu Futures",
        imgURL: "/assets/tournaments/8.png",
        link: ""
    },
    {
        title: "GIẢI ĐẤU FUTURES FOR MOM",
        imgURL: "/assets/tournaments/9.png",
        link: ""
    },
]

const TournamentsSlider = () => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
                delay: 2500,
            }}
            modules={[Autoplay]}
            className="mySwiper flex gap-10 fade-mask"
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                820: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1248: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
            }}
        >
            {
                tournaments.map((tournament, index) => {
                    return <SwiperSlide key={tournament.title + index} >
                        <div className="flex flex-col gap-5 justify-between items-center shadow-xl p-5 rounded-2xl ">
                            <div>
                                <Image src={tournament.imgURL} width={400} height={400} className="w-fit h-fit bg-cover rounded-2xl" alt="img" />
                            </div>
                            <div className="flex flex-col gap-5">
                                <span className="uppercase text-xl">{tournament.title}</span>
                                <button className=" p-1 rounded bg-[var(--tenth)] expand">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                })
            }
        </Swiper>
    )
}

export default TournamentsSlider