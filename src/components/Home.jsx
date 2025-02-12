import { Link } from "react-router-dom";
import { theme } from "/src/styles/style.js";
import { useEffect, useState } from "react";
import { useDarkMode } from "../utils/DarkModeContext";
import { useResponsive } from "../utils/ResponsiveContext";
import GitHubCalendar from 'react-github-calendar';

const ANIMATION_TIMING = {
  firstName: 801,
  lastName: 2001
};

// Github Chart Year to date
const currentYear = new Date().getFullYear()

const githubStyle = {color: `#EAF6FF`, font: 'Pixelify Sans'}
const themeGithub = {
  dark: ['hsl(15 3% 25.9%)', 'hsl(39 100% 50%)'],
  light:  ['hsl(217 96.5% 11.2%)', 'hsl(46 83.4% 59.8%)']
}

const Home = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [nameAnimations, setNameAnimations] = useState({
    firstName: false,
    lastName: false
  });
  const isMobile = useResponsive();

  useEffect(() => {
    const timers = [
      setTimeout(
        () => setNameAnimations(prev => ({ ...prev, firstName: true })),
        ANIMATION_TIMING.firstName
      ),
      setTimeout(
        () => setNameAnimations(prev => ({ ...prev, lastName: true })),
        ANIMATION_TIMING.lastName
      )
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return(
    <section className="h-screen mx-9">
      <section className="flex-col">
        <div>
          <h1 className={`      
            ${ isMobile ? 
              `${theme.heading.home} text-8xl `
              : 
              `${theme.heading.home} 
                mt-20 flex flex-col`
            }
            ${darkMode ? theme.darkMode.mainText : theme.lightMode.mainText} 
            `
          }>
            <p className="typewriter typewriter-firstname font-Pixelify ">
              Emmanuel
            </p> 
            <p className={`typewriter typewriter-lastname` }
                style={{
                visibility: nameAnimations.firstName ? "visible" : "hidden", 
            }}>
              Rosario 
            </p> 
          </h1>
          <div className={`
            ${isMobile ? 
              `${theme.subheading.home} !text-2xl` 
              :
              `${theme.subheading.home}`
            }
            ${darkMode ? theme.darkMode.subheading : theme.lightMode.subheading}`
          }>
            <h3 className="">
              <p className={`typewriter typewriter-title` }
                style={{
                  visibility: nameAnimations.lastName ? "visible" : "hidden", 
              }}>
                Full-Stack Software Developer
              </p> 
            </h3>
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
      </section>
    </section>
  )
}

export default Home