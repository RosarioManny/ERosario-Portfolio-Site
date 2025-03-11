import { logos } from "../utils/logos";
import { theme } from "../styles/style";
import { useState } from "react";
import { useDarkMode } from "../utils/DarkModeContext";
import { useResponsive } from "../utils/ResponsiveContext";
import Typewriter from "../utils/Typewriter";

const About = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode(); 
  const isMobile = useResponsive();

  const topThreeLogos = isMobile ? "4" : "3"
  const handleClick = () => {
    setIsDropdown(!isDropdown)
  }

  return(
    <>
      <section className="place-items-center">
      <Typewriter 
      text="About Me"
      className={`
        ${theme.heading.default} 
        ${darkMode ? "text-tangerine" : "text-sunburst"} 
        typewriter typewriter-projects`
        }
        />
        <div>
          <p className={`
            ${theme.bodyText.default} 
            ${theme.container.default}  
            ${darkMode ? 
              `${theme.darkMode.mainText} ${theme.darkMode.container}` 
              : 
              `${theme.lightMode.mainText} ${theme.lightMode.container}`}`}
          >
            Creativity has always driven my journey from artist to software engineer. In the art world, I learned to approach challenges from different perspectives, pushing the boundaries of my work. 
            That same mindset led me to explore software engineering, where I apply creative thinking to technology. In my transition to full-stack software engineering, 
            I’ve developed strong technical expertise in JavaScript, React, Node.js, Python, and MongoDB, among other technologies.
            My background as an educator has sharpened my leadership and collaboration skills, while my artistic foundation enhances my approach to design and problem-solving. 
            I’m dedicated to blending creativity with technical precision to build user-centric solutions that make a meaningful impact.
          </p>
        </div>
        <h2 className={`${theme.subheading.default}`}>Technical Proficiencies:</h2>
        <div className={`
        ${theme.container.default} 
        ${theme.bodyText.default} 
        overflow-hidden transform ease-in-out grid gap-9 duration-700  
        ${isMobile ? "grid-cols-4" : "grid-cols-3"}
        
        ${darkMode ? "bg-charcoal" : "bg-midnight"}
        ${isDropdown ? 'max-h-[800px]' : 'max-h-28'} `}
        >
          {logos.map((logo, index) => {
            const visible = index < topThreeLogos;
            return (
              <img 
              key={logo.alt}
              className={`h-20 transition-opacity duration-300 ease-in overflow-hidden ${
                !visible ? `delay-${logo.delay} ${isDropdown ? 'opacity-100' : 'opacity-0'}` : ''}
                `
              }
              src={`${import.meta.env.BASE_URL}${logo.src}`}
              alt={logo.alt}
              />
            )
            })
          }
        </div>
        <div className={`
          ${theme.button.default}
          ${darkMode ? 
            `${theme.darkMode.button} ${theme.darkMode.hoverButton}` 
            : 
            `${theme.lightMode.button}  ${theme.lightMode.hoverButton}`} 
          `}
          >
          <button
          onClick={handleClick}
          >
          {isDropdown ? "Show Less" : "Show More"}
          </button>
        </div>
        <h2 className={`${theme.subheading.default}`}>Resume:</h2>
          <div className="m-9">
            <img className={`${theme.container.img}  ${darkMode ? "bg-charcoal" : "bg-midnight"}`} 
            src={`${import.meta.env.BASE_URL}/Rosario_Emmanuel_Resume_2025.png`}
            alt="Emmanuel Rosario's Resume" 
          />
          </div>
      </section>
    </>
  )
}

export default About