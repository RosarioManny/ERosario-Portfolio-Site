import { Link } from "react-router-dom";
import { theme } from "../styles/style";
import { useEffect, useState } from "react";

const About = () => {
  const [isDropdown, setIsDropdown] = useState(false)
  const [isAnimated, setIsAnimated] = useState(false)

  const handleClick = () => {
    setIsDropdown(!isDropdown)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true); 
    }, 501); 

    return () => clearTimeout(timer); 
  }, []);

  return(
    <>
      <section className="place-items-center bg-royal">
      <h1 className={`${theme.heading.default} 
        typewriter typewriter-projects`
        }
        style={{ visibility: isAnimated ? "visible" : "hidden", }}>
          About Me 
        </h1>
        <div>
          <p className={`${theme.bodyText.default} ${theme.container.default}`}>
            Creativity has always driven my journey from artist to software engineer. In the art world, I learned to approach challenges from different perspectives, pushing the boundaries of my work. 
            That same mindset led me to explore software engineering, where I apply creative thinking to technology. In my transition to full-stack software engineering, 
            I’ve developed strong technical expertise in JavaScript, React, Node.js, Python, and MongoDB, among other technologies.
            My background as an educator has sharpened my leadership and collaboration skills, while my artistic foundation enhances my approach to design and problem-solving. 
            I’m dedicated to blending creativity with technical precision to build user-centric solutions that make a meaningful impact.
          </p>
        </div>
        <h2 className={`${theme.subheading.default}`}>Professional Skillset:</h2>
        <div className={`${theme.container.default} ${theme.bodyText.default} mb-2 grid grid-cols-3 gap-9 transition ease-in-out duration-500 ${isDropdown ? 'max-h-full' : 'max-h-28 overflow-hidden'}`}>
          <img className="h-18" src="src/assets/Logos/js.png" alt="JavaScript Logo" />
          <img className="h-18" src="src/assets/Logos/icons8-python-96.png" alt="Python Logo" />
          <img className="h-18" src="src/assets/Logos/icons8-tailwind-css-96.png" alt="Tailwind CSS Logo" />
          <img className="h-18" src="src/assets/Logos/postman-icon.png" alt="Postman API Logo" />
          <img className="h-18" src="src/assets/Logos/icons8-html-logo-96.png" alt="HTML Logo" />
          <img className="h-18" src="src/assets/Logos/icons8-css-logo-96.png" alt="CSS Logo" />
          <img className="h-18" src="src/assets/Logos/icons8-node-js-96.png" alt="Node JS Logo" />
          <img className="h-18" src="src/assets/Logos/icons8-react-native-96.png" alt="React native Logo" />
          <img className="h-18" src="src/assets/Logos/icons8-django-96.png" alt="Django Logo" />
          <img className="h-18" src="src/assets/Logos/icons8-figma-96.png" alt="Figma Logo" />
          <img className="h-18" src="src/assets/Logos/icons8-visual-studio-96.png" alt="Visual Studio Code Logo" />
          <img className="h-18" src="src/assets/Logos/icons8-ejs-96.png" alt="EJS Logo" />
          <img className="h-18" src="src/assets/Logos/icons8-postgresql-96.png" alt="EJS Logo" />
        </div>
          <button
          onClick={handleClick}
          className={`${theme.container.default} bg-sunburst`}
          >
          {isDropdown ? "Show Less" : "Show More"}
          </button>
        <h2 className={`${theme.subheading.default}`} >Resume:</h2>
          <div className="m-9">
            <img className={`${theme.container.img}`} src="src/assets/Resume_2024.jpg" alt="" />
          </div>
      </section>
    </>
  )
}

export default About