import { theme } from "../../styles/style";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../utils/DarkModeContext";
import { useResponsive } from "../../utils/ResponsiveContext";

const Footer = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const isMobile = useResponsive();
  
  return (
    <>
      <div className={` space-y-4 grid grid-cols-1 justify-items-center  ${theme.container.footer} 
            ${darkMode ? theme.dark.footer : "bg-midnight"}
            `}>
        <section className="place-items-center w-fit">
            <p className={` ${theme.heading.default} ${darkMode ? `!text-tangerine` : "" }`}>
              Emmanuel Rosario | Portfolio
            </p>
          <p className={` py-3 text-center text-base ${isMobile ? "w-1/2" : ""}`}>
            My personal website, created to showcase my skills and projects as a full-stack software developer. 
            See my credentials like resume, certifications, degrees and more. Contact me at the given socials and contacts. 
          </p> 
        </section>
          {isMobile ? 
            (
              <div className="text-center py-2">
                <h1 className="font-semibold text-lg py-2"> Socials:</h1>
                <div className={` grid grid-cols-3 gap-2`}>
                  <Link to="https://www.instagram.com/it_sjustman.ny/">
                  <img className="h-10 hover:animate-pulse" src="src/assets/Logos/Instagram_Glyph_White.png" alt="" />
                  </Link>
                  <Link to='https://github.com/RosarioManny'>
                    <img className="h-10 hover:animate-pulse" src="src/assets/Logos/github-mark-white.png" alt="" />
                  </Link>
                  <Link to='https://www.linkedin.com/in/emmanuel-rosario-mannys/'>
                    <img className="h-10 hover:animate-pulse" src="src/assets/Logos/In-White-96.png" alt="" />
                  </Link>
                </div>
              </div>
            ) 
            : 
            (
              <p></p>  
            )
          }
            <button className={` 
              inline-flex justify-center p-1 
              ${darkMode ?  "bg-tangerine text-charcoal" : "text-xs bg-sunburst text-midnight"}
              ${isMobile ? "w-1/4" : "w-1/2"}`
              }
              >
              <Link to="https://github.com/RosarioManny/My-Website.git" className="font-semibold"> 
                Website Code
              </Link>
            </button>
            <div className={`font-semibold ${darkMode ? "text-tangerine" : "text-sunburst"}`}> 
            Created by: Emmanuel Rosario 
          </div>
      </div>
    </>
  )
}

export default Footer