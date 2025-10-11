import CountDown from '@/components/common/CountDown'
import PrimaryDivider from '@/components/divider/PrimaryDivider'
import Image from 'next/image'
import React from 'react'

const tournaments = [
    {
        title: "HiBT- giải đấu Futures cá nhân",
        types: ["Thi Đấu cá nhân"],
        duration: {
            from: "2025/10/15 00:00:00",
            to: "2025/10/22 23:59:59"
        },
        players: 0,
        startDate: "2025/10/20 00:00:00",
        imgURL: "/assets/tournaments/1.png"
    },
    {
        title: "Giải cá nhân Futures",
        types: ["Thi đấu cá nhân"],
        duration: {
            from: "2025/09/19 00:01:00",
            to: "2025/09/26 23:59:59"
        },
        players: 1558,
        startDate: "2025/09/24 23:59:59",
        imgURL: "/assets/tournaments/2.png"
    },
    {
        title: "Giải Đấu Futures Đội 2 Người",
        types: ["Thi đấu cá nhân"],
        duration: {
            from: "2025/08/30 00:00:01",
            to: "2025/09/08 23:59:59"
        },
        players: 1655,
        startDate: "2025/09/2 23:59:59",
        imgURL: "/assets/tournaments/3.png"
    },

]

const Home = () => {
    return (
        <div className='relative w-full'>
            <video className='fixed top-0 left-0 right-0 bottom-0 min-w-full min-h-screen z-[-10]' autoPlay={true} muted loop id="myVideo">
                <source src="/assets/videos/flame.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
            <div className='flex flex-col container m-auto py-15 text-white mt-10'>
                {
                    tournaments.map((item) => {
                        return <React.Fragment key={item.title}>
                            <div className='flex justify-between w-full'>
                                <div className='flex flex-col gap-5'>
                                    <div className='text-2xl font-bold'>
                                        {item.title}
                                    </div>
                                    <div className='flex gap-2'>
                                        {
                                            item.types.map((type) => {
                                                return <span key={type} className='bg-[var(--third)] p-2 rounded text-black'>{type}</span>
                                            })
                                        }
                                    </div>
                                    <div>
                                        <span className='text-[var(--fourth)]'>Thời gian sự kiện:</span> {item.duration.from}-{item.duration.to}
                                    </div>
                                    <div>
                                        <span className='text-[var(--fourth)]'>Số người tham gia:</span> {item.players} người
                                    </div>
                                    {
                                        new Date().getTime() < new Date(item.duration.to).getTime() && new Date().getTime() > new Date(item.startDate).getTime() ?
                                            <div className='flex items-center gap-2'>
                                                <span className='text-[var(--fourth)]'>Thời gian bắt đầu hoạt động: </span>
                                                <span>Đóng Đăng Ký</span>
                                            </div>
                                            :
                                            new Date().getTime() < new Date(item.startDate).getTime() ?
                                                <div className='flex items-center gap-2'>
                                                    <span className='text-[var(--fourth)]'>Thời gian bắt đầu hoạt động: </span>
                                                    <CountDown date={item.startDate} />
                                                </div>
                                                :
                                                <div className='flex items-center gap-2'>
                                                    <span className='text-[var(--fourth)]'>Thời gian bắt đầu hoạt động: </span>
                                                    <span>Đã kết Thúc</span>
                                                </div>
                                    }
                                    <div>
                                        <button className='bg-[var(--fiveth)] py-2 px-5 rounded'>
                                            Chi tiết
                                        </button>
                                    </div>


                                </div>
                                <div className='rounded-xl overflow-hidden'>
                                    <Image src={item.imgURL} className='w-fit h-fit' alt='img' width={400} height={400} />
                                </div>
                            </div>
                            <PrimaryDivider />
                        </React.Fragment>

                    })
                }
            </div>
        </div>
    )
}

export default Home