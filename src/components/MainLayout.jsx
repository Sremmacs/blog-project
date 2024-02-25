import React from 'react'
import Footer from './Footer'
import Header from './Header'

const MainLayout = ({ Children }) => {
  return (
    <div>
      <Header />
      {Children}
      <Footer />
  </div>
  )
}

export default MainLayout