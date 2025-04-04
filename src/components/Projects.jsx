import { theme } from "/src/styles/style.js"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { useResponsive } from "../utils/ResponsiveContext";
import { useDarkMode } from "../utils/DarkModeContext";
import { projects } from "../utils/projects";
import Typewriter from "../utils/Typewriter";

const Projects = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const isMobile = useResponsive();

  return (
    <>
      <section className="place-items-center">
        <Typewriter 
        text="Projects"
        className={`
          ${theme.heading.default} 
          ${darkMode ? "text-tangerine" : "text-sunburst"} 
          `} 
        />
        <section className={isMobile ? "grid grid-cols-2 max-w-6xl" : ""}>
          {projects.map((project, idx) => (
            <div key={idx} className={`
            ${theme.card.projects} 
            ${darkMode ? 
              `${theme.darkMode.hoverCard}`
              : 
              `${theme.lightMode.hoverCard}`}
            `
            }>
              <Link to={`/projects/${project.id}`}>
                <img 
                  className="w-full"
                  src={`${import.meta.env.BASE_URL}${project.cover}`}
                  alt={`${project.cover_alt}`}
                />
                <div className={`
                  ${theme.container.img} 
                  ${theme.bodyText.card} 
                  ${darkMode ? 
                    `${theme.darkMode.container } ${theme.darkMode.mainText} `
                    : 
                    `${theme.lightMode.container } ${theme.lightMode.mainText}`}`
                  }>
                  <div className={`
                    ${theme.subheading.card} 
                    ${darkMode ? theme.darkMode.subheading :  theme.lightMode.subheading}`
                  }
                  >
                    {project.title}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </section>
      </section>
    </>
  )
}

export default Projects;
