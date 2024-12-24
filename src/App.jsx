import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/partials/_Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import About from './components/About'
import EnterSite from './components/EnterSite'
import Footer from './components/partials/_Footer'
import Artfolio from './components/ProjectsDetails/Artfolio'
import Whataduudle from './components/ProjectsDetails/Whataduudle'
import Talkthroughit from './components/ProjectsDetails/Talkthrough_it'

function App() {
  return (
    <div className="bg-onyx min-h-screen flex flex-col">
      <Navbar element={Navbar}/>
      <main className=''>
        <Routes>
          <Route path="/" element={<EnterSite />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects/artfolio" element={<Artfolio />} />
          <Route path="/projects/whataduudle" element={<Whataduudle />} />
          <Route path="/projects/talkthroughit" element={<Talkthroughit />} />
        </Routes>
      </main>
      <Footer element={Footer}/>
    </div>
    
  )
}

export default App
