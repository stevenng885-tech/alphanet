import PrimaryDivider from '@/components/divider/PrimaryDivider'
import Image from 'next/image'
import React from 'react'

const Home = () => {
    return (
        <div className='flex flex-col container m-auto py-10'>
            <div className='flex justify-between w-full'>
                <div className='flex flex-col gap-5'>
                    <div className='text-2xl font-bold'>
                        HiBT- giải đấu Futures cá nhân
                    </div>
                    <div>
                        <span className='bg-[var(--third)] p-2 rounded'>Thi Đấu cá nhân</span>
                    </div>
                    <div>
                        <span className='text-[var(--fourth)]'>Thời gian sự kiện:</span> 2025/10/15 00:00:00—2025/10/22 23:59:59
                    </div>
                    <div>
                        <span className='text-[var(--fourth)]'>Số người tham gia:</span>  0 người
                    </div>
                    <div>
                        <span className='text-[var(--fourth)]'>Thời gian bắt đầu hoạt động:</span>

                    </div>
                    <div>
                        <button className='bg-[var(--fiveth)] py-2 px-5 rounded'>
                            Chi tiết
                        </button>
                    </div>
                </div>
                <div className='rounded-xl overflow-hidden'>
                    <Image src="/assets/tournaments/1.png" className='w-fit h-fit' alt='img' width={400} height={400} />
                </div>
            </div>
            <PrimaryDivider />
        </div>
    )
}

export default Home