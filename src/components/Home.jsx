import { Link } from "react-router-dom";
import { theme } from "/src/styles/style.js";
import { useEffect, useState } from "react";

const Home = () => {
  const [firstNameFinished, setFirstNameFinished] = useState(false);
  const [lastNameFinished, setLastNameFinished] = useState(false)

  // This effect will track when the first name finishes its typing animation.
  useEffect(() => {
    const firstTimer = setTimeout(() => {
      setFirstNameFinished(true); 
    }, 1001); 

    const secondTimer = setTimeout(() => {
      setLastNameFinished(true);
    }, 2001)

    return () => clearTimeout(firstTimer, secondTimer); 
  }, []);
  
  return(
    <>
      <section className="flex-col">
        <div className="">
              <h1 className={`${theme.heading.home} flex flex-col`}>
                <p className="typewriter typewriter-firstname ">Emmanuel</p> 
                <p className={`typewriter typewriter-lastname` }
                  style={{
                    visibility: firstNameFinished ? "visible" : "hidden", 
                  }}
                  >
                  Rosario 
                </p> 
              </h1 >
          <div className={`${theme.subheading.home}`}>
            <h3 className="">
            <p className={`typewriter typewriter-title` }
                  style={{
                    visibility: lastNameFinished ? "visible" : "hidden", 
                  }}
                  >
                  Full-Stack Software Developer
                </p> 
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