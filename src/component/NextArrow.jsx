import React from 'react'
import {BsChevronRight} from "react-icons/bs"

const NextArrow = ({ onClick }) => {
  return (
    <div className='absolute laptop:left-[-283px] laptop:-top-[-355px] left-[280px] -top-[-500px]' onClick={onClick}>
        <div className='bg-[#000] border-white border-[1.5px] h-[34px] w-[34px] rounded-full grid place-items-center cursor-pointer'>
            <BsChevronRight className='fill-[#ffe369]' />
        </div>
    </div>
  )
}

export default NextArrow