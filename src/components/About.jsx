import { Link } from "react-router-dom";
import { theme } from "../styles/style";

const About = () => {

  return(
    <>
      <section className="place-items-center">
        <h1 className={`${theme.heading.default}`}> About Me </h1>
        <p></p>
        <h2 className={`${theme.subheading.default}`}>Professional Skillset:</h2>
        <ul>
        </ul>
        <h2 className={`${theme.subheading.default}`} >Resume:</h2>
        <Link to="/projects/resume">
          <img src="src/assets/Resume_2024.jpg" alt="" />
        </Link>
      </section>
    </>
  )
}

export default About