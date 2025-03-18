import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Explore from './components/Explore'
import Space from './components/Space'
import Attractions from './components/Attractions'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Space />
      <Explore />
      <Space />
      <Attractions />
      <Space />
    </>
  )
}

export default App