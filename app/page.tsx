import Contact from "@/components/common/Contact";
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
            <div className="w-full h-screen flex items-center relative overflow-hidden">
                <div className="container m-auto flex  gap-10 ">
                    <div className="text-white flex flex-col items gap-10 justify-center ">
                        <p className="text-2xl xl:text-8xl BBHSansBogle font-bold tracking-wider">
                            <span className="text-[var(--seventh)] text-troke2">ALPHA NET</span>
                        </p>
                        <p className="text-xl xl:text-5xl text-[var(--seventh)] BBHSansBogle font-bold tracking-wider">
                            KIẾN THỨC THỰC CHIẾN, CẬP NHẬT TỨC THỜI
                        </p>
                        <p className="text-sm xl:text-2xl" dangerouslySetInnerHTML={{
                            __html: `AlphaNet – Cộng đồng chia sẻ tri thức về thị trường số & công nghệ Blockchain <br/> <br/>
                                    AlphaNet là nơi kết nối những người yêu thích công nghệ, đam mê tìm hiểu về xu hướng chuyển đổi số và hệ sinh thái Blockchain. <br/>
                                    Tại đây, các thành viên cùng nhau trao đổi kiến thức, cập nhật góc nhìn mới, và rèn luyện tư duy phân tích – kỷ luật – logic để hiểu sâu hơn về cách thị trường vận hành trong kỷ nguyên số. <br/> <br/>
                                    🎯 Sứ mệnh của AlphaNet là xây dựng một không gian học hỏi và phát triển lâu dài, nơi mỗi thành viên đều có thể: <br/> 
                                    Cập nhật thông tin và xu hướng công nghệ mới. <br/> 
                                    Mở rộng tư duy chiến lược, nâng cao kỹ năng phân tích dữ liệu và hành vi thị trường. <br/> 
                                    Tạo dựng tư duy chủ động, tự tin thích ứng với sự thay đổi của thời đại số. <br/> 
                                    🚀 AlphaNet – Nơi tri thức và công nghệ hội tụ, cùng nhau phát triển trong thế giới số!`}}>

                        </p>
                        <a target="_blank" href="https://www.facebook.com/profile.php?id=100079515246834" className="bg-[var(--second)] w-fit rounded p-2 px-5 xl:text-3xl uppercase">
                            Tìm hiểu thêm
                        </a>
                    </div>

                </div>
                <div className='absolute top-0 bottom-0 min-w-screen z-[-10] ' >
                    <Image className="h-full" src="/assets/home-bg.png" alt="bg-img" width={2000} height={2000} />
                </div>
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
            <div className='bg-[var(--nineth)] text-white'>
                <div className='container mx-auto'>
                    <Contact />
                </div>
            </div>
        </main>
    );
}
