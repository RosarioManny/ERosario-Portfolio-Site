import { Link } from "react-router-dom";
import { theme } from "/src/styles/style.js";
import { useEffect, useState } from "react";

const Home = () => {
  
  return(
    <>
      <section className="flex-col">
        <div className="">
              <h1 className={`${theme.heading.home} typewriter-firstname `}>
                <p>Emmanuel</p> 
              </h1 >
              <h1 className={`${theme.heading.home} `}>
                <p>Rosario </p> 
              </h1 >
            {/* Typing animation applied to "Full-Stack Software Developer" */}
          <div className={`${theme.subheading.home}`}>
            <h3 className="">
              Full-Stack Software Developer<p className=""></p>
            </h3>
          </div>
        </div>
        <div className="container">
          <div className="slides">
            <p className={`${theme.bodyText.default} ${theme.container.default}`}> 
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