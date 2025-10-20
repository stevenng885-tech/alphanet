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