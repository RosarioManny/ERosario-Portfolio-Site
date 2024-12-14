import { Link } from "react-router-dom";
import { theme } from "../styles/style";
import { useState } from "react";

const About = () => {
  const [isDropdown, setIsDropdown] = useState(false)

  const handleClick = () => {
    setIsDropdown(!isDropdown)
  }

  return(
    <>
      <section className="place-items-center bg-royal">
        <h1 className={`${theme.heading.default}`}> About Me </h1>
        <div>
          <p className={`${theme.bodyText.default}`}>
            Creativity has always driven my journey from artist to software engineer. In the art world, I learned to approach challenges from different perspectives, pushing the boundaries of my work. 
            That same mindset led me to explore software engineering, where I apply creative thinking to technology. In my transition to full-stack software engineering, 
            I’ve developed strong technical expertise in JavaScript, React, Node.js, Python, and MongoDB, among other technologies.
            My background as an educator has sharpened my leadership and collaboration skills, while my artistic foundation enhances my approach to design and problem-solving. 
            I’m dedicated to blending creativity with technical precision to build user-centric solutions that make a meaningful impact.
          </p>
        </div>
        <h2 className={`${theme.subheading.default}`}>Professional Skillset:</h2>
        <div className={`${theme.container.default} ${theme.bodyText.default} mb-2 grid grid-cols-3 gap-9 transition ease-in-out duration-500 ${isDropdown ? 'max-h-full' : 'max-h-28 overflow-hidden'}`}>
          <img className="h-18" src="src/assets/js.png" alt="" />
          <img className="h-18" src="src/assets/icons8-html-logo-96.png" alt="" />
          <img className="h-18" src="src/assets/icons8-css-logo-96.png" alt="" />
          <img className="h-18" src="src/assets/icons8-django-96.png" alt="" />
          <img className="h-18" src="src/assets/icons8-node-js-96.png" alt="" />
          <img className="h-18" src="src/assets/icons8-python-96.png" alt="" />
          <img className="h-18" src="src/assets/icons8-react-native-96.png" alt="" />
          <img className="h-18" src="src/assets/icons8-visual-studio-96.png" alt="" />
          <img className="h-18" src="src/assets/icons8-figma-96.png" alt="" />
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