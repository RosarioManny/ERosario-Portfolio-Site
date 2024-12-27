// FIRE
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { theme } from "/src/styles/style";
import { useDarkMode } from "../../darkModeContext";

const Navbar = () =>  {
  const [isToggled, setIsToggle] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  const handleClick = () => {
    setIsToggle(!isToggled)
  }
  
  useEffect(() => {
    if (isToggled) {
       // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto"; 
    }
    return () => {
      // Cleanup when component is unmounted or state changes
      document.body.style.overflow = "auto"; // Ensure scrolling is re-enabled
    };
  }, [isToggled]);


  return (
    <nav className={`${theme.container.nav} ${theme.subheading.nav} ${darkMode && theme.dark.nav} z-10 overflow`}>
        <Link to="/home"> E.R.</Link>
        <button 
        onClick={toggleDarkMode}
        className='
        w-6 h-6 text-sm rounded-full bg-sunburst text-midnight font-semibold 
        dark:text-onyx dark:bg-frost'
        >
          {darkMode ? "L" : "D"}
        </button>
        <button onClick={handleClick} className="z-10 relative flex flex-col justify-center items-center space-y-1 p-9;">
          <span 
            className={`
              ${theme.navMenu.burger} ${darkMode && theme.dark.burger} 
              ${isToggled ? 'rotate-45 translate-y-2' : ''}`} 
          ></span>
          <span 
            className={`
              ${theme.navMenu.burger} ${darkMode && theme.dark.burger} 
              ${isToggled ? 'opacity-0' : 'opacity-100'}`} 
          ></span>
          <span 
            className={`
              ${theme.navMenu.burger} ${darkMode && theme.dark.burger} 
              ${isToggled ? '-rotate-45 -translate-y-2' : 'translate-y-0'}`} 
          ></span>
        </button>

      {/* Off-screen menu */}
      <div 
        className={`
          ${theme.navMenu.offScreen}  ${darkMode && theme.dark.container} 
          ${isToggled ? 'right-0' : ' -right-[450px]'} overscroll-none transition-all duration-300 ease-in-out`}
      >
        <Link to="/projects" onClick={handleClick}>Projects</Link>
        <Link to="/contacts" onClick={handleClick}>Contacts</Link>
        <Link to="/about" onClick={handleClick}>About</Link>
      </div>
    </nav>
  )
}

export default Navbar