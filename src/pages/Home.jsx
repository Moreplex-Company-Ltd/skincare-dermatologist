import React from 'react'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import SectionThree from '../components/SectionThree'
import SectionTwo from '../components/SectionTwo'

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <AboutSection />
      <SectionThree />
      <SectionTwo />
      <Footer />
    </React.Fragment>
  )
}

export default Home