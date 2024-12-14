import { Link } from "react-router-dom";
import { theme } from "/src/styles/style.js"

const Home = () => {

  
  return(
    <>
      <section className="flex-col">
        <div className="container">
          <div className="slides">
            <h1 className={`${theme.heading.home}`}> Emmanuel <br/>Rosario</h1>
            <h3 className={`${theme.subheading.home}`}>Full-Stack Software Developer_</h3> 
          </div>
        </div>
        <div className="container">
          <div className="slides">
            <p className={`${theme.bodyText.default}`}> 
              <b>Hello,</b> 
                <br/>
                I hope to work with you in our next projects. To learn more about me please explore my page. 
                I know critical langauges like <b>JavaScript, Python, EJS, HTML, and more!</b> If interested please, look at my 
                  <Link to='/about' className="text-sunburst"> About me page </Link>
                where you will find my resume and further contacts. 
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home