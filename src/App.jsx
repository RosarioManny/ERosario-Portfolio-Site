import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { theme } from './styles/style'
import { DarkModeContext } from './darkModeContext'
import './App.css'
import Navbar from './components/partials/_Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import About from './components/About'
import EnterSite from './components/EnterSite'
import Footer from './components/partials/_Footer'
import Artfolio from './components/ProjectsDetails/Artfolio'
import Whataduudle from './components/ProjectsDetails/Whataduudle'
import Talkthroughit from './components/ProjectsDetails/Talkthroughit'

// darkMode={darkMode} onDarkModeToggle={() => setDarkMode(!darkMode)} 
function App() {
  const [darkMode, setDarkMode] = useState(false);


  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  };

  return (
    <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
      <main >
        <div className={`
        min-h-screen transition-colors duration-300 flex flex-grow flex-col
        ${darkMode ? theme.dark.bg : "bg-royal"}
        `}>
          <Navbar element={Navbar} />
          <div className=''>
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
          </div>
          <Footer element={Footer}/>
        </div>
      </main>
    </DarkModeContext.Provider>
  )
}

export default App