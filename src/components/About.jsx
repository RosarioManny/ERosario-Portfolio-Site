import { Link } from "react-router-dom";

const About = () => {

  return(
    <>
      <section>
        <h1> About Me </h1>
        <h2>Professional Skillset:</h2>
        <ul>
          <img src="src/assets/Python_BlackWhite_logo.png" alt="" />
          <img src="src/assets/JS_BlackWhite_logo.svg" alt="" />
        </ul>
        <h2>Resume:</h2>
        <Link to="/projects/resume">
          <img src="src/assets/Resume_2024.jpg" alt="" />
        </Link>
      </section>
    </>
  )
}

export default About