// FIRE
import { useState } from "react";
import { Link } from "react-router-dom";
import { theme } from "/src/styles/style";

const Navbar = () =>  {
  const [isToggled, setIsToggle] = useState(false)

  const handleClick = () => {
    setIsToggle(!isToggled)
  }
  return (
    <nav className={`${theme.container.nav} ${theme.bodyText.nav} overflow`}>
        <Link to="/home"> E.R.</Link>
        <button> D/L </button>
        <button onClick={handleClick} className="z-10 relative flex flex-col justify-center items-center space-y-1 p-9;">
        <span 
          className={`
            ${theme.navMenu.burger} 
            ${isToggled ? 'rotate-45 translate-y-2' : ''}`} 
        ></span>
        <span 
          className={`
            ${theme.navMenu.burger} 
            ${isToggled ? 'opacity-0' : 'opacity-100'}`} 
        ></span>
        <span 
          className={`
            ${theme.navMenu.burger} 
            ${isToggled ? '-rotate-45 -translate-y-2' : 'translate-y-0'}`} 
        ></span>
      </button>

      {/* Off-screen menu */}
      <div 
        className={`
          ${theme.navMenu.closed} 
          ${isToggled ? 'right-0' : '-right-[450px]'} transition-all duration-300 ease-in-out`}
      >
        <Link to="/projects" onClick={handleClick}>Projects</Link>
        <Link to="/contacts" onClick={handleClick}>Contacts</Link>
        <Link to="/about" onClick={handleClick}>About</Link>
      </div>
    </nav>
  )
}

export default Navbar

// Things to do in Navbar 
// C = Completed && I = Incompleted 
// About Link - C
// Contacts 
// Projects 
// Home 
// Aligned 