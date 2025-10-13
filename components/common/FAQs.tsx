'use client'
import React from 'react'
import { FaPlus } from "react-icons/fa";

const fqas = [
    {
        question: "Alphanet là cộng đồng gì ?",
        anwser: "Alphanet là cộng đồng crypto & tài chính số hàng đầu Việt Nam, nơi quy tụ những người học và giao dịch nghiêm túc. Mục tiêu của chúng tôi là giúp thành viên hiểu rõ bản chất thị trường, phát triển kỹ năng và tư duy kỷ luật khi đầu tư."
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
        question: "Làm sao để tham gia cộng đồng Alphanet?",
        anwser: "Rất đơn giản, Truy cập kênh Telegram / Facebook “Cộng Đồng Alphanet. Điền form đăng ký → Nhận hướng dẫn tham gia nhóm"
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
        <div className='flex flex-col gap-5'>
            <h1 className='text-3xl'>Câu hỏi thường gặp</h1>
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
                                {isExpand === index ? <span className='text-xl text-[var(--fourth)]'>
                                    {item.anwser}
                                </span> : <></>}
                                {/* <div className={`text-xl text-[var(--fourth)] overflow-hidden  ${isExpand === index ? "block expanded" : "hidden h-[0px]"}`}>
                                    {item.anwser}
                                </div> */}

                            </li>
                        })
                    }

                </ul>
            </div>
        </div>
    )
}

export default FAQs