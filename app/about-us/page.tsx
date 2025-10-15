import Image from "next/image";
const list = [
    {
        title: "Hệ thống khóa học chỉ báo",
        description: "Cộng đồng Crypto & tài chính",
        iconSrc: "/assets/icons/desktop-computer.png"
    },
    {
        title: "Cộng Đồng Mạnh Mẽ",
        description: "",
        iconSrc: "/assets/icons/people.png"
    },
    {
        title: "Tin Tức TứcThời",
        description: "Tạo Lịch, Kết Nối",
        iconSrc: "/assets/icons/document.png"
    },
]

export default function Home() {
    return (
        <main className="flex flex-col">
            <div className="w-full h-screen flex items-center relative">
                <div className="container m-auto flex  gap-10 ">
                    <div className="text-white flex flex-col items gap-10 justify-center ">
                        <p className="text-8xl BBHSansBogle font-bold tracking-wider">
                            <span className="text-[var(--seventh)] text-troke2">ALPHA NET</span>
                        </p>
                        <p className="text-5xl text-[var(--seventh)] BBHSansBogle font-bold tracking-wider">
                            KIẾN THỨC THỰC CHIẾN, CẬP NHẬT TỨC THỜI
                        </p>
                        <p className="text-2xl">
                            Cộng Đồng Crypto & tài chính hàng đầu tại Việt Nam, nơi chia sẻ kiến thức và tin tức thị trường mỗi ngày
                        </p>
                        <a target="_blank" href="https://www.facebook.com/profile.php?id=100094833382394" className="bg-[var(--second)] w-fit rounded p-2 px-5 text-2xl uppercase">
                            Tìm hiểu thêm
                        </a>
                    </div>

                </div>
                <Image src="/assets/home-bg.png" alt="baner" width={2000} height={2000} className="w-screen h-screen absolute top-0 left-0 z-[-1]" />
            </div>
            <div>
                <div className="container m-auto py-14">
                    <div className="flex justify-between">
                        {
                            list.map((item, index) => {
                                return <div key={index} className="flex flex-col gap-5 items-center">
                                    <div className="flex justify-center">
                                        <Image src={item.iconSrc} width={120} height={120} alt="icon" />
                                    </div>
                                    <p className="font-bold uppercase text-2xl"> {item.title}</p>
                                    <p className="text-xl"> {item.description}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </main>
    );
}
