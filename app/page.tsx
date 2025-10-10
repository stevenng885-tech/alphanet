import Image from "next/image";
import Swiper from 'swiper';
import 'swiper/css';

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
    <main className="">
      <div className="bg-[var(--first)] py-14">
        <div className="container m-auto flex justify-around gap-10">
          <div className="text-white flex flex-col items gap-10 justify-center">
            <p className="text-6xl">
              CỘNG ĐỒNG ALPHA NET
            </p>
            <p className="text-4xl">
              KIẾN THỨC THỰC CHIẾN, CẬP NHẬT TỨC THỜI
            </p>
            <p className="text-xl">
              Cộng Đồng Crypto & tài chính hàng đầu tại Việt Nam, nơi chia sẻ kiến thức và tin tức thị trường mỗi ngày
            </p>
            <button className="bg-[var(--second)] w-fit rounded p-2 px-5 text-xl uppercase">
              Tìm hiểu thêm
            </button>
          </div>
          <div>
            <Image width={600} height={600} alt="img" src="/assets/tradingTeam.png" />
          </div>
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
    </main>
  );
}
