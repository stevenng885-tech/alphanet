import React from 'react'
import TournamentsSlider from "@/components/common/TournamentsSlider";
import FAQs from '@/components/common/FAQs';
import Contact from '@/components/common/Contact';

export default function Home() {
    return (
        <main className="bg-[var(--nineth)] min-w-full min-h-screen">
            <div className="py-30 container mx-auto text-white flex flex-col gap-20">
                <div className="flex flex-col max-w-[70vw] gap-10">
                    <span className="text-8xl smoothBottom capitalize">
                        Các Giải Đấu Mà Cộng Đồng Alpha Net Đã tham gia
                    </span>
                    <span className="text-2xl text-[var(--fourth)] capitalize smoothBottom !duration-[2s]">
                        Xem qua các giải đấu mà cộng đồng alpha net đã tham gia
                    </span>
                </div>
                <div>
                    <TournamentsSlider />
                </div>
                <div>
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-2">
                            <span className="text-4xl capitalize">
                                Bạn muốn đăng ký tham gia giải đấu ?
                            </span>
                            <span className="text-[var(--fourth)] text-xl">
                                Gia nhập ngay cộng đồng Alpha Net để được hỗ trợ
                            </span>
                        </div>
                        <div className='mx-10'>
                            <button className="uppercase bg-[var(--second)] p-5 text-xl rounded-xl">
                                Đăng ký ngay +
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <FAQs />
                </div>
                <div>
                    <Contact />
                </div>
            </div>
        </main>
    );
}
