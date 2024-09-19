import React from 'react'
import './App.css'
import './index.css'
import './Responsive.css'
import Navbar from './componen/navbar.jsx'
import Hero from './componen/hero.jsx'
import Konten from './componen/konten.jsx'
import Footer from './componen/footer.jsx'

function App() {

  return (
    <>
      <Navbar />

      <div className="container" id='home'>
        <Hero />
        <Konten />
      </div>

      <Footer />
    </>
  )
}

export default App
