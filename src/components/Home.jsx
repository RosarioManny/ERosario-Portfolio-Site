import { Link } from "react-router-dom";
import { theme } from "/src/styles/style.js";
import { useEffect, useState, useRef } from "react";
import { useDarkMode } from "../utils/DarkModeContext";
import { useResponsive } from "../utils/ResponsiveContext";
import GitHubCalendar from 'react-github-calendar';


// Github Chart Year to date
const currentYear = new Date().getFullYear()

const githubStyle = {color: `#EAF6FF`, font: 'Pixelify Sans'}
const themeGithub = {
  dark: ['hsl(15 3% 25.9%)', 'hsl(39 100% 50%)'],
  light:  ['hsl(217 96.5% 11.2%)', 'hsl(46 83.4% 59.8%)']
}

const Home = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const isMobile = useResponsive();
  const typewriterRef = useRef(null)
  // Length of title
  useEffect(() => {
    if (typewriterRef.current) {
      const word = typewriterRef.current.textContent;
      const wordWidth = typewriterRef.current.scrollWidth;
      const steps = word.length;

      // Set CSS variables
      typewriterRef.current.style.setProperty("--word-width", `${wordWidth}`);
      typewriterRef.current.style.setProperty("--steps", steps);
    }
  }, []);

  return(
    <div className="mx-9 pb-20">
      <section className="flex-col">
        <div>
          <div >
            <h1 
            style={{width: "var(--word-width)"}} ref={typewriterRef} className={`
              ${isMobile ? `${theme.heading.home} text-8xl `: `${theme.heading.home} mt-20 flex flex-col`}
              ${darkMode ? theme.darkMode.mainText : theme.lightMode.mainText} 
              typewriter
            `}>
              Emmanuel Rosario 
            </h1>
            <h1>Full-Stack Developer</h1>
          </div>
        </div>
        <div className="flex flex-col place-items-center m-2">
          <p className={`
            my-16
            ${theme.bodyText.default} 
            ${theme.container.default} 
            ${darkMode ? 
            `${theme.darkMode.container} ${theme.darkMode.mainText}` 
            : 
            `${theme.lightMode.container} ${theme.lightMode.mainText}`} `
          }> 
            <p className="text-2xl ">
              Hello,
            </p>
              Welcome to my portfolio! As a passionate full-stack developer, I specialize in building dynamic, user-centered applications using <b>JavaScript, Python, HTML, and other key technologies.</b> Dive 
              into my projects to see how I bring ideas to life through code. Interested in learning more? 
              Head over to the <Link to='/about' className={`font-semibold tranisition-color duration-500 ${ darkMode ? `${theme.darkMode.highlight} hover:text-tangerine` : `${theme.lightMode.highlight} hover:text-sunburst`}`}> 
                About me page 
              </Link> for my resume and further contact details. I look forward to collaborating on exciting new projects with you or joining your team!"
          </p>
          <div className="flex gap-4 ">
            <img className='h-6' src={`${import.meta.env.BASE_URL}/assets/Logos/github-mark-white.png`}/>
            <p 
            className={`
              mb-4
              ${theme.bodyText.default} 
              ${darkMode ? 
                ` ${theme.darkMode.mainText}` 
                : 
                `${theme.lightMode.mainText}`} 
            `}>
              Github Activity 
            </p>
          </div>
          <div className="w-3/4">
            <GitHubCalendar 
            className="place-items-center transition-all duration-500 "
            username="RosarioManny" 
            year={currentYear}
            blockRadius={0}
            colorScheme={`${darkMode ? 'dark' : 'light'}`}
            theme={themeGithub}
            style={githubStyle}
            blockSize={16}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home