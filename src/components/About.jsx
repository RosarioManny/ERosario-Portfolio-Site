import { Link } from "react-router-dom";
import { theme } from "../styles/style";
import { useEffect, useState } from "react";
import { useDarkMode } from "../darkModeContext";

const About = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode(); 

  const logos = [
    { src: 'src/assets/Logos/js.png', alt: 'JavaScript Logo', delay: 150},
    { src: 'src/assets/Logos/icons8-python-96.png', alt: 'Python Logo', delay: 150},
    { src: 'src/assets/Logos/icons8-tailwind-css-96.png', alt: 'Tailwind CSS Logo', delay: 150},
    { src: 'src/assets/Logos/postman-icon.png', alt: 'Postman API Logo', delay: 150},
    { src: 'src/assets/Logos/icons8-html-logo-96.png', alt: 'HTML Logo', delay: 150},
    { src: 'src/assets/Logos/icons8-css-logo-96.png', alt: 'CSS Logo', delay: 150},
    { src: 'src/assets/Logos/icons8-node-js-96.png', alt: 'Node JS Logo', delay: 150},
    { src: 'src/assets/Logos/icons8-react-native-96.png', alt: 'React Native Logo', delay: 300},
    { src: 'src/assets/Logos/icons8-figma-96.png', alt: 'Figma Logo', delay: 300},
    { src: 'src/assets/Logos/icons8-visual-studio-96.png', alt: 'Visual Studio Code Logo', delay: 300},
    { src: 'src/assets/Logos/icons8-ejs-96.png', alt: 'EJS Logo', delay: 500},
    { src: 'src/assets/Logos/icons8-django-100.png', alt: 'Django Logo', delay: 500},
    { src: 'src/assets/Logos/icons8-postgresql-96.png', alt: 'PostgreSQL Logo', delay: 500},
  ]

  const topThreeLogos = 3;
  const handleClick = () => {
    setIsDropdown(!isDropdown)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(!isAnimated); 
    }, 501); 

    return () => clearTimeout(timer); 
  }, []);

  return(
    <>
      <section className="place-items-center">
      <h1 className={`${theme.heading.default} 
        typewriter typewriter-projects`
        }
        style={{ visibility: isAnimated ? "visible" : "hidden", }}>
          About Me 
        </h1>
        <div>
          <p className={`${theme.bodyText.default} ${theme.container.default}  ${darkMode ? "bg-charcoal" : "bg-midnight"}`}>
            Creativity has always driven my journey from artist to software engineer. In the art world, I learned to approach challenges from different perspectives, pushing the boundaries of my work. 
            That same mindset led me to explore software engineering, where I apply creative thinking to technology. In my transition to full-stack software engineering, 
            I’ve developed strong technical expertise in JavaScript, React, Node.js, Python, and MongoDB, among other technologies.
            My background as an educator has sharpened my leadership and collaboration skills, while my artistic foundation enhances my approach to design and problem-solving. 
            I’m dedicated to blending creativity with technical precision to build user-centric solutions that make a meaningful impact.
          </p>
        </div>
        <h2 className={`${theme.subheading.default}`}>Professional Skillset:</h2>
        <div className={`
        ${theme.container.default} 
        ${theme.bodyText.default} 
        overflow-hidden grid grid-cols-3 gap-9 transform ease-in-out duration-700 
        ${darkMode ? "bg-charcoal" : "bg-midnight"}
        ${isDropdown ? 'max-h-[800px]' : 'max-h-28'} `}
        >
          {logos.map((logo, index) => {
            const visible = index < topThreeLogos;
            return (
              <img 
              key={logo.alt}
              className={`h-18 transition-opacity duration-300 ease-in overflow-hidden ${
                !visible ? `delay-${logo.delay} ${isDropdown ? 'opacity-100' : 'opacity-0'}` : ''}
                `
              }
              src={logo.src}
              alt={logo.alt}
              />
            )
            })
          }
        </div>
        <div className={`${theme.container.button}`}>
          <button
          onClick={handleClick}
          >
          {isDropdown ? "Show Less" : "Show More"}
          </button>
        </div>
        <h2 className={`${theme.subheading.default}`}>Resume:</h2>
          <div className="m-9">
            <img className={`${theme.container.img}  ${darkMode ? "bg-charcoal" : "bg-midnight"}`} 
            src="src/assets/Resume_2024.jpg" 
            alt="Emmanuel Rosario's Resume" 
          />
          </div>
      </section>
    </>
  )
}

export default About