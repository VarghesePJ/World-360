import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Explore from './components/Explore'
import Space from './components/Space'



const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Space />
      <Explore />
      <Space />
    </>
  )
}

export default App