// FIRE
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { theme } from "../../styles/style";
import { useDarkMode } from "../../utils/DarkModeContext";
import { useResponsive } from "../../utils/ResponsiveContext";

const Navbar = () =>  {
  const [isToggled, setIsToggle] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const isMobile = useResponsive();

  const handleClick = () => {
    setIsToggle(!isToggled)
  }
  

  return (
    <nav className={`
        h-14 z-10 overflow
        ${theme.container.nav} 
        ${theme.subheading.nav} 
        ${darkMode ? 
          ` ${theme.darkMode.subheading}`
          : 
          ` ${theme.lightMode.subheading}`
        } 
      `}
    >
          <Link to="/" className="text-2xl"> 
            E.R.
          </Link>
      {isMobile ? (
        // Desktop View 
        <>
          <div className="font-semibold transition-all duration-700 ">
            <button 
              onClick={toggleDarkMode}
              className=
              {`p-2 rounded h-fit text-base 
              ${darkMode ?  
                `${theme.darkMode.background} hover:border hover:border-2 hover:border-skyline`
                :
                `${theme.lightMode.background} hover:border hover:border-2 hover:border-skyline` } 
              `}
            >
              <p>
              {darkMode ?  "Light Mode" : "Dark Mode"}
              </p>
            </button>
          </div>
          <div>
          {["projects", "contacts", "about"].map((link) => (
          <Link 
            key={link} 
            to={`/${link}`} 
            // onClick={handleClick} 
            className={`
              p-3
              ${darkMode ? 
                theme.darkMode.hoverText
                : 
                theme.lightMode.hoverText
              }`
            }
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </Link>
              )
            )
          }
          </div>
        </>
      ) : (
        <> 
        {/* Mobile View  */}
          <div 
            onClick={toggleDarkMode}
            className=
            {` w-6 h-6 p-[2px] text-center text-sm rounded-full font-semibold transition-all duration-700 
            // ${darkMode ? "bg-midnight text-frost " : "bg-charcoal"} 
            `}
          >
            {darkMode ?  "L" : "D"}
          </div>
        {/* Burger */}
        <button onClick={handleClick} className="relative flex flex-col justify-center items-center space-y-1 p-2 z-10">
          <BurgerLine isToggled={isToggled} darkMode={darkMode} index={1} />
          <BurgerLine isToggled={isToggled} darkMode={darkMode} index={2} />
          <BurgerLine isToggled={isToggled} darkMode={darkMode} index={3} />
        </button>
        {/* Off-screen menu */}
        <div 
          className={`
          ${theme.navMenu.offScreen} 
          ${darkMode ? "bg-gradient-to-t from-onyx to-charcoal" : "bg-gradient-to-t from-midnight to-royal"} 
          ${isToggled ? 'right-0' : '-right-[450px]'} transition-all duration-300 ease-in-out`}
        >
        {["projects", "contacts", "about"].map((link) => (
        <Link 
          key={link} 
          to={`/${link}`} 
          onClick={handleClick} 
          className={`hover:animate-pulse p-2
              ${darkMode ? 
                theme.darkMode.hoverText
                : 
                theme.lightMode.hoverText
              }
            `}
        >
          {link.charAt(0).toUpperCase() + link.slice(1)}
        </Link>
        ))}
        </div>
      </>
      )}

    </nav>
  )
}

const BurgerLine = ({ isToggled, darkMode, index }) => {
  const lineClass = `block h-1 w-6 transition-transform duration-300 ease-in-out ${theme.navMenu.burger} ${darkMode ? theme.darkMode.button : ""}`;
  const transforms = [
    isToggled ? "rotate-45 translate-y-2" : "",
    isToggled ? "opacity-0" : "opacity-100",
    isToggled ? "-rotate-45 -translate-y-2" : "",
  ];
  return <span className={`${lineClass} ${transforms[index - 1]}`} />;
};

export default Navbar