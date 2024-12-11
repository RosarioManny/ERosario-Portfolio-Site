import { Link } from "react-router-dom";
import { theme } from "/src/styles/style.js"

const Home = () => {

  return(
    <>
      <section>
        <div className="cool">
          <div className="slides">
            </div>
            Incoming error
            <br/>
            Your next Developer
          </div>
        <div className="container">
          <div className="slides">
            <h1> Emmanuel Rosario</h1>
            <h3>Full-Stack Software Developer_</h3> 
          </div>
        </div>
        <div className="container">
          <div className="slides">
            <p>
              <b>Hello,</b> 
                <br/>
                I hope to work with you in our next projects. To learn more about me please explore my page. 
                I know critical langauges like javascript, python, ejs, html, and more. If interested please, look at my 
                  <Link to='/about'> About me page </Link>
                where you will find my resume and further contacts. 
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home