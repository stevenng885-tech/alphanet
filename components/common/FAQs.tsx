'use client'
import React from 'react'
import { FaPlus } from "react-icons/fa";

const fqas = [
    {
        question: "Alphanet là gì ?",
        anwser: 'AlphaNet – Cộng đồng chia sẻ tri thức về thị trường số & công nghệ Blockchain \n\n AlphaNet là nơi kết nối những người yêu thích công nghệ, đam mê tìm hiểu về xu hướng chuyển đổi số và hệ sinh thái Blockchain.\nTại đây, các thành viên cùng nhau trao đổi kiến thức, cập nhật góc nhìn mới, và rèn luyện tư duy phân tích – kỷ luật – logic để hiểu sâu hơn về cách thị trường vận hành trong kỷ nguyên số.\n\n🎯 Sứ mệnh của AlphaNet là xây dựng một không gian học hỏi và phát triển lâu dài, nơi mỗi thành viên đều có thể:\n\nCập nhật thông tin và xu hướng công nghệ mới.\n\nMở rộng tư duy chiến lược, nâng cao kỹ năng phân tích dữ liệu và hành vi thị trường.\n\nTạo dựng tư duy chủ động, tự tin thích ứng với sự thay đổi của thời đại số.\n\n🚀 AlphaNet – Nơi tri thức và công nghệ hội tụ, cùng nhau phát triển trong thế giới số!'
    },
    {
        question: "Tham gia Alphanet có mất phí không ?",
        anwser: "Cộng đồng miễn phí cho người mới, bạn chỉ cần đăng ký và tham gia nhóm chính thức. Ngoài ra, Alphanet có các chương trình học nâng cao và mentoring riêng, dành cho những ai muốn phát triển chuyên sâu hơn."
    },
    {
        question: "Tôi cần kiến thức trước khi tham gia không?",
        anwser: "Không cần. Cộng đồng có lộ trình học cơ bản, video hướng dẫn chỉ báo, và hỗ trợ từ mentor để người mới dễ tiếp cận. Mọi người đều có thể bắt đầu từ con số 0."
    },
    {
        question: "Làm sao để tham gia Alphanet?",
        anwser: "Rất đơn giản, Truy cập kênh Telegram / Facebook Alphanet. Điền form đăng ký → Nhận hướng dẫn tham gia nhóm"
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
        <div className='flex flex-col gap-5 px-2'>
            <h1 className='text-3xl text-center'>Câu hỏi thường gặp</h1>
            <div>
                <ul className='flex flex-col gap-5'>
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
                                {isExpand === index && <span className='text-xl text-[var(--fourth)]' >
                                    {item.anwser}
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