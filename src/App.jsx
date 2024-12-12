import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/partials/_Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import About from './components/About'
import EnterSite from './components/EnterSite'


function App() {
  return (
    <>
    <Navbar element={Navbar}/>
    <Routes>
      <Route path='/' element={<EnterSite />} />
      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  )
}

export default App
