import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AITools from '../components/AITools'
import Testimonial from '../components/Testimonial'
import Subscription from '../components/Subscription'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AITools />
      <Testimonial />
      <Subscription />
    </>
  )
}

export default Home