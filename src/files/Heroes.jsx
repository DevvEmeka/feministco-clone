import React from 'react'
import heroes from '../assets/heroes.png'

const Heroes = () => {
  return (
    <section className='bg-[#f9dd58] flex justify-center items-center flex-col py-[80px] px-[30px] laptop:px-[120px] w-full'>
        <h2 className='text-[#000] font-bold mb-[20px] font-sangbleu text-[1.9em] laptop:text-[2.2em] text-center uppercase'>we are doing this for our heroes</h2>
        <div>
            <img className='w-full' src={heroes} alt="heroes" />
        </div>
    </section>
  )
}

export default Heroes