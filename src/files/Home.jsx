
import React from 'react'
import Hero from './Hero'
import NavBar from '../component/NavBar'
import GridCon from './GridCon'
import About from './About'
import Members from './Members'
import Finances from './Finances'
import Happen from './Happen'
import Footer from './Footer'

const Home = () => {
  return (
    <main className='bg-[#ffe369] font-DM-San md:text-[0.875rem]'>
        <NavBar />
        <Hero />
        <GridCon />
        <About />
        <Members />
        <Finances />
        <Happen />
        <Footer />
    </main>
  )
}

export default Home