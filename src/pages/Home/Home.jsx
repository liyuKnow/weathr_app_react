import React from 'react'
import Info from './Info'
import Main from './Main'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className="max-w-[1020px] mx-auto bg-gray-900 p-4">
      {/* overlay div */}
      <Navbar />
      <Main />
      <Info />
      <div />
    </div>
  )
}

export default Home