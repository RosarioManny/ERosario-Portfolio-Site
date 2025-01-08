import { Link } from "react-router-dom";
import { theme } from "/src/styles/style.js";
import { useEffect, useState } from "react";
import { useDarkMode } from "../utils/DarkModeContext";
import { useResponsive } from "../utils/ResponsiveContext";

const ANIMATION_TIMING = {
  firstName: 901,
  lastName: 2001
};

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
        <div className="">
              <h1 className={`
                  ${ isMobile ? 
                    `${theme.heading.home} text-8xl `
                    : 
                    `${theme.heading.home} 
                    mt-20 flex flex-col`
                  }
                  ${darkMode && theme.dark.home} 
                `
                }
              >
                <p className="typewriter typewriter-firstname">Emmanuel</p> 
                <p className={`typewriter typewriter-lastname` }
                  style={{
                    visibility: nameAnimations.firstName ? "visible" : "hidden", 
                  }}
                  >
                  Rosario 
                </p> 
              </h1 >
          <div className={`
            ${isMobile ? 
              `${theme.subheading.home} !text-2xl` 
              :
              `${theme.subheading.home}`
            }
            ${darkMode && theme.dark.subheading}`
            }
          >
            <h3 className="">
            <p className={`typewriter typewriter-title` }
              style={{
                visibility: nameAnimations.lastName ? "visible" : "hidden", 
              }}
              >
              Full-Stack Software Developer
            </p> 
            </h3>
          </div>
        </div>
          <div className="flex">
            <p className={`
              ${theme.bodyText.default} 
              ${theme.container.default} 
              ${darkMode ? theme.dark.container : "bg-midnight"} my-16`
              }
            > 
              <b>Hello,</b> 
                <br/>
                Welcome to my portfolio! As a passionate full-stack developer, I specialize in building dynamic, user-centered applications using <b>JavaScript, Python, HTML, and other key technologies.</b>
                Dive into my projects to see how I bring ideas to life through code. Interested in learning more? Head over to the  <br/>
                <Link to='/about' className={`font-semibold tranisition-color duration-500 ${ darkMode ? "text-tangerine hover:text-midnight" : "text-sunburst hover:text-skyline "}`}> 
                  About me page 
                </Link> for my resume and further contact details. I look forward to collaborating on exciting new projects!"
            </p>
          </div>
      </section>
    </section>
  )
}

export default Home