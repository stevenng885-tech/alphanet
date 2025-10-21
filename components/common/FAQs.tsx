'use client'
import React from 'react'
import { FaPlus } from "react-icons/fa";

const fqas = [
    {
        question: "Alphanet là gì ?",
        anwser: `AlphaNet – Cộng đồng chia sẻ tri thức về thị trường số & công nghệ Blockchain <br/> <br/>
                AlphaNet là nơi kết nối những người yêu thích công nghệ, đam mê tìm hiểu về xu hướng chuyển đổi số và hệ sinh thái Blockchain. <br/>
                Tại đây, các thành viên cùng nhau trao đổi kiến thức, cập nhật góc nhìn mới, và rèn luyện tư duy phân tích – kỷ luật – logic để hiểu sâu hơn về cách thị trường vận hành trong kỷ nguyên số. <br/> <br/>
                🎯 Sứ mệnh của AlphaNet là xây dựng một không gian học hỏi và phát triển lâu dài, nơi mỗi thành viên đều có thể: <br/> <br/>
                Cập nhật thông tin và xu hướng công nghệ mới. <br/> <br/>
                Mở rộng tư duy chiến lược, nâng cao kỹ năng phân tích dữ liệu và hành vi thị trường. <br/> <br/>
                Tạo dựng tư duy chủ động, tự tin thích ứng với sự thay đổi của thời đại số. <br/> <br/>
                🚀 AlphaNet – Nơi tri thức và công nghệ hội tụ, cùng nhau phát triển trong thế giới số!`
    },
    {
        question: "Tham gia Alphanet có mất phí không ?",
        anwser: "THAM GIA ALPHANET – HOÀN TOÀN KHÔNG MẤT PHÍ!"
    },
    {
        question: "Tôi cần kiến thức trước khi tham gia không?",
        anwser: `Câu trả lời là: Không cần! 🙌<br>
AlphaNet được tạo ra dành cho tất cả mọi người, dù bạn là người mới hay đã có kinh nghiệm trong thị trường.<br><br>

📘 Nếu bạn mới bắt đầu — đội ngũ hướng dẫn sẽ giúp bạn nắm những kiến thức cơ bản nhất:<br>
• Hiểu cách thị trường vận hành<br>
• Cách quản lý vốn & rủi ro<br>
• Cách đọc biểu đồ & nhận biết xu hướng<br><br>

📊 Nếu bạn đã có kinh nghiệm — bạn sẽ được cập nhật tin tức, góc nhìn chuyên sâu và cùng thảo luận với các trader chuyên nghiệp trong cộng đồng.<br><br>

🚀 AlphaNet không yêu cầu kiến thức trước – chỉ cần bạn có tinh thần học hỏi và mong muốn phát triển.<br>
Còn lại, chúng tôi sẽ đồng hành cùng bạn! 💪
`
    },
    {
        question: "Làm sao để tham gia Alphanet?",
        anwser: `Rất đơn giản! 💡<br>
AlphaNet là cộng đồng chia sẻ kiến thức & cập nhật thị trường số hoàn toàn miễn phí, nơi bạn có thể học hỏi, thảo luận và phát triển cùng các thành viên có cùng đam mê.<br><br>

📋 Cách tham gia:<br>
1️⃣ Nhấn vào đường link nhóm chính thức của AlphaNet (Telegram/Zalo/Facebook).<br>
2️⃣ Hoàn tất bước xác nhận để được admin duyệt vào nhóm.<br>
3️⃣ Theo dõi lịch chia sẻ hàng ngày, nhận tin tức, tín hiệu & kiến thức thực chiến từ đội ngũ chuyên gia.<br><br>

💬 Tất cả hoàn toàn không mất phí, bạn chỉ cần mang theo tinh thần học hỏi & kỷ luật — AlphaNet sẽ lo phần còn lại!<br><br>

✨ Cùng tham gia để:<br>
📈 Nắm bắt xu hướng thị trường nhanh nhất.<br>
🤝 Giao lưu, học hỏi cùng cộng đồng trader năng động.<br>
💡 Cập nhật góc nhìn & chiến lược mới mỗi ngày.
`
    },
]
const FAQs = () => {
    const [isExpand, setIsExpand] = React.useState(-1)
    const hanldeExpand = (index: number) => {
        if (isExpand === index) {
            setIsExpand(-1)
        } else {
            setIsExpand(index)
        }
    }
    return (
        <div className='flex flex-col gap-5 px-2 text-black'>
            <h1 className='text-3xl text-center'>Câu hỏi thường gặp</h1>
            <div>
                <ul className='flex flex-col gap-5 text-white'>
                    {
                        fqas.map((item, index) => {
                            return <li onClick={() => hanldeExpand(index)} key={item.question + index} className='cursor-pointer py-5 px-10 w-full bg-[var(--eleventh)] rounded-xl flex flex-col gap-5'>
                                <div className='flex justify-between text-2xl'>
                                    <span >
                                        {item.question}
                                    </span>
                                    <button className={isExpand === index ? "closeIcon" : "plusIcon"} >
                                        <FaPlus />
                                    </button>
                                </div>
                                {isExpand === index && <span dangerouslySetInnerHTML={{ __html: item.anwser }} className='text-xl text-[var(--fourth)]' >
                                </span>}
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default FAQs