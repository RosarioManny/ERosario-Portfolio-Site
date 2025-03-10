import { useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import { theme } from './styles/style'
import { DarkModeContext } from './utils/DarkModeContext'
import { ResponsiveProvider } from './utils/ResponsiveContext.jsx'
import './App.css'
import Navbar from './components/partials/_Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import About from './components/About'
import Footer from './components/partials/_Footer'
import Artfolio from './components/ProjectsDetails/Artfolio'
import Whataduudle from './components/ProjectsDetails/Whataduudle'
import Talkthroughit from './components/ProjectsDetails/Talkthroughit'
import ProjectDetails from './components/ProjectDetails.jsx'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  };

  // console.log("dMode?", darkMode)
  return (
    <ResponsiveProvider>
      <DarkModeContext.Provider 
      id={`${darkMode ? 'dark' : 'light'}`}
      value={{darkMode, toggleDarkMode}}>
        <main>
          <div className={`
          min-h-screen transition-colors duration-300 flex flex-grow flex-col
          ${darkMode ? theme.darkMode.background : theme.lightMode.background}
          `}>
            <Navbar element={Navbar} />
            <div className=''>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects/:project_id" element={<ProjectDetails />}/>
                <Route path="/projects/artfolio" element={<Artfolio />} />
                <Route path="/projects/whataduudle" element={<Whataduudle />} />
                <Route path="/projects/talkthroughit" element={<Talkthroughit />} />
              </Routes>
            </div>
            <Footer element={Footer}/>
          </div>
        </main>
      </DarkModeContext.Provider>
    </ResponsiveProvider>
  )
}

export default App