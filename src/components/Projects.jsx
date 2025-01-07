import { theme } from "/src/styles/style.js"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { useDarkMode } from "../utils/DarkModeContext";

const Projects = () => {
  const [isAnimated, setIsAnimated] = useState(false)
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true); 
    }, 501); 

    return () => clearTimeout(timer); 
  }, []);

  // Project data array
  const projects = [
    {
      name: "TalkThrough.It",
      description: "The value of Therapy and Mental health is immense. Clients & Therapists can create accounts, book appointments, browse therapists, etc!",
      link: "/projects/talkthroughit",
      image: "src/assets/Talkthroughit/talkthroughit.png",
      alt: "Talk through it - Therapy website"
    },
    {
      name: "Artfolio",
      description: "A place for artists to share their portfolio and artwork. Create an account, upload your photos and manage your profile!",
      link: "/projects/artfolio",
      image: "src/assets/Artfolio/artfolio.png",
      alt: "Artfolio - Art portfolio website"
    },
    {
      name: "Whataduudle",
      description: "Have fun and play with AI! A drawing game where AI guesses what you've drawn. If it guesses your drawing, YOU WIN!",
      link: "/projects/whataduudle",
      image: "src/assets/Whataduudle/whataduudle.png",
      alt: "What a doodle - AI drawing game website"
    }
  ];

  return (
    <>
      <section className="place-items-center">
        <h1 className={`${theme.heading.default} ${darkMode && theme.dark.subheading} typewriter typewriter-projects`} 
          style={{ visibility: isAnimated ? "visible" : "hidden" }}>
          Projects
        </h1>
        <section>
          {projects.map((project, index) => (
            <div key={index} className={`${theme.card.projects}`}>
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
      </section>
    </>
  )
}

export default Projects;
