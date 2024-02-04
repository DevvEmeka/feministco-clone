import React from 'react'
import Hero from './Hero'
import NavBar from '../component/NavBar'
import GridCon from './GridCon'
import About from './About'

const Home = () => {
  return (
    <main className='bg-[#ffe369] font-DM-San md:text-[0.875rem] w-full'>
        <NavBar />
        <Hero />
        <GridCon />
    </main>
  )
}

export default Home