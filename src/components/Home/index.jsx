import React from 'react'
import './index.css'
import Navbar from '../Navbar'
import Header from '../Header'

const Home = () => {
  return (
    <div className='home-section-container'>
        <Header />
        <div className='homeSectionNAvbarAndContent'>
            <Navbar />
            <div className='homeSectionContent'>
              Welcome!
            </div>
        </div>
    </div>
  )
}

export default Home