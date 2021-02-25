import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AppNavbar from '../components/AppNavbar'

const MyRouter = () => {
  return (
    <div>
      <AppNavbar />
      <Header />
      <h1> Hello Body </h1>
      <Footer />
    </div>
  )
}

export default MyRouter;
