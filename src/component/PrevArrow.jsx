import React from 'react'
import {BsChevronLeft} from "react-icons/bs"

const PrevArrow = ({ onClick }) => {
  return (
    <div className='absolute laptop:left-[-357px] laptop:-top-[-355px] left-[210px] -top-[-500px] mobile:-top-[-500px]' onClick={onClick}>
        <div className='bg-[#000] border-white border-[1.5px] h-[34px] w-[34px] rounded-full grid place-items-center cursor-pointer'>
            <BsChevronLeft className='fill-[#ffe369]' />
        </div>
    </div>
  )
}

export default PrevArrow