import React from 'react'
import './bootstrap.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import About from './Components/About'
import KeyHighlights from './Components/KeyHighlights'
import './index.css'
import Hotels from './Components/Hotels'
import Schedule from './Components/Schedule'
import Venue from './Components/Venue'
import Gallery from './Components/Gallery'
import Singers from './Components/Singers'
import Contact from './Components/Contact'
import BuyTickets from './Components/BuyTickets'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <KeyHighlights></KeyHighlights>
      <Schedule></Schedule>
      <Venue></Venue>
      <Hotels/>
      <Gallery/>
      <Singers/>
      <Contact/>
      <BuyTickets/>
      <Footer/>
    </div>
  )
}

export default App