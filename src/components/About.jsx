import { Link } from "react-router-dom";
import { theme } from "../styles/style";

const About = () => {

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
        <ul className={`${theme.container.default} ${theme.bodyText.default}`}>
          <li>Peace</li>
        </ul>
        <h2 className={`${theme.subheading.default}`} >Resume:</h2>
          <div className="m-9">
          <img className={`${theme.container.img}`} src="src/assets/Resume_2024.jpg" alt="" />
          </div>
      </section>
    </>
  )
}

export default About