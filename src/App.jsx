import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/HeroSection/Hero'
import { Usecase } from './components/Usecase/Usecase'
import { Offers } from './components/Offers/Offers'
import Partners from './components/Partners/Partners'
import { Platforms } from './components/Platforms/Platforms'
import { Footer } from './components/Footer/Footer'
import { SiteFooter } from './components/Footer/SiteFooter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='app-container'>
    <Navbar/>
    <Hero/>
    <Usecase/>
    <Offers/>
    <Partners/>
    <Platforms/>
    <Footer/>
    <SiteFooter/>
    </div>
    </>
  )
}

export default App
