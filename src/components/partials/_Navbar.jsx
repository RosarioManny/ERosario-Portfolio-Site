// FIRE
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { theme } from "/src/styles/style";

const Navbar = () =>  {
  const [isToggled, setIsToggle] = useState(false)

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
    <nav className={`${theme.container.nav} ${theme.bodyText.nav} z-10 overflow`}>
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
          ${theme.navMenu.offScreen} 
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