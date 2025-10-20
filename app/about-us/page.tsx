import React from 'react'
import TournamentsSlider from "@/components/common/TournamentsSlider";
import FAQs from '@/components/common/FAQs';
import Contact from '@/components/common/Contact';
import PrimaryLazyLoading from '@/components/lazy/PrimaryLazyLoading';

export default function Home() {
    return (
        <main className=" min-w-full min-h-screen">
            <div className="text-white flex flex-col gap-20 ">
                <div className='bg-[var(--nineth)]'>
                    <div className='py-30 container mx-auto flex flex-col gap-20 '>
                        <div className="flex flex-col xl:max-w-[70vw] gap-10 smoothBottom text-center xl:text-left">
                            <span className="text-3xl xl:text-8xl capitalize">
                                Các Giải Đấu Mà Alpha Net Đã tham gia
                            </span>
                            <span className="text-xl` xl:text-2xl text-[var(--fourth)] capitalize  !duration-[2s]">
                                Xem qua các giải đấu mà alpha net đã tham gia
                            </span>
                        </div>
                        <div>
                            <PrimaryLazyLoading time={500}>
                                <TournamentsSlider />
                            </PrimaryLazyLoading>
                        </div>
                        <div>
                            <div className="flex justify-between flex-col xl:flex-row text-center xl:text-left gap-5">
                                <div className="flex flex-col gap-2 smoothRight">
                                    <span className="text-4xl capitalize">
                                        Bạn muốn đăng ký tham gia giải đấu ?
                                    </span>
                                    <span className="text-[var(--fourth)] text-xl">
                                        Gia nhập ngay Alpha Net để được hỗ trợ
                                    </span>
                                </div>
                                <div className='mx-10 smoothLeft'>
                                    <a href="/about-us/#contact">
                                        <button className="uppercase bg-[var(--second)] p-5 text-xl rounded-xl">
                                            Đăng ký ngay +
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container mx-auto '>
                    <FAQs />
                </div>
                <div className='bg-[var(--nineth)]'>
                    <div className='container mx-auto'>
                        <Contact />
                    </div>
                </div>
            </div>
        </main>
    );
}
