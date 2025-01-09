import { theme } from "/src/styles/style.js"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { useResponsive } from "../utils/ResponsiveContext";
import { useDarkMode } from "../utils/DarkModeContext";
import { projects } from "../utils/projects";

const Projects = () => {
  const [isAnimated, setIsAnimated] = useState(false)
  const { darkMode, toggleDarkMode } = useDarkMode();
  const isMobile = useResponsive();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true); 
    }, 501); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      <section className="place-items-center">
        <h1 className={`
          ${theme.heading.default} 
          ${darkMode ? "text-tangerine" : "text-sunburst"} 
          typewriter typewriter-projects`
        } 
          style={{ visibility: isAnimated ? "visible" : "hidden" }}
        >
          Projects
        </h1>
        {isMobile ? (
        <section className="grid grid-cols-2 max-w-6xl">
          {projects.map((project, index) => (
            <div key={index} className={`${theme.card.projects} `}>
              <Link to={project.link}>
                <img 
                  className="w-full"
                  src={project.image}
                  alt={project.alt}
                />
              </Link>
              <div className={`${theme.container.img} ${theme.bodyText.card} ${darkMode ? theme.dark.container : "bg-midnight"}`}>
                <div className={`${theme.subheading.card} ${darkMode && theme.dark.subheading}`}>
                  {project.name}
                </div>
                  <p>{project.description}</p>
              </div>
            </div>
          ))}
        </section>
        ) : (
          <section className="">
          {projects.map((project, index) => (
            <div key={index} className={`${theme.card.projects} `}>
              <Link to={project.link}>
                <img 
                  className="w-full"
                  src={project.image}
                  alt={project.alt}
                />
              </Link>
              <div className={`${theme.container.img} ${theme.bodyText.card} ${darkMode ? theme.dark.container : "bg-midnight"}`}>
                <div className={`${theme.subheading.card} ${darkMode && theme.dark.subheading}`}>
                  {project.name}
                </div>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </section>
        )}
        
      </section>
    </>
  )
}

export default Projects;
