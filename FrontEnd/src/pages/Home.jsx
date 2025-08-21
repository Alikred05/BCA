import React from 'react'
import Header from '../components/Header'
import PositionMenu from '../components/PositionMenu'
import CoreMember from '../components/CoreMember'
import Banner from '../components/Banner'
import About from '../components/About'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
      <Header />
      <CoreMember/>
      <Banner/>
      <About/>
      <Contact/>
    </div>
  )
}

export default Home
