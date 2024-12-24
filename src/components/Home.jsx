import { Link } from "react-router-dom";
import { theme } from "/src/styles/style.js";
import { useEffect, useState } from "react";

const ANIMATION_TIMING = {
  firstName: 901,
  lastName: 2001
};
const Home = () => {
  const [nameAnimations, setNameAnimations] = useState({
    firstName: false,
    lastName: false
  });

  useEffect(() => {
    const timers = [
      setTimeout(
        () => setNameAnimations(prev => ({ ...prev, firstName: true })),
        ANIMATION_TIMING.firstName
      ),
      setTimeout(
        () => setNameAnimations(prev => ({ ...prev, lastName: true })),
        ANIMATION_TIMING.lastName
      )
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return(
    <section className="bg-onyx h-screen">
      <section className="flex-col">
        <div className="">
              <h1 className={`${theme.heading.home} mt-20 flex flex-col`}>
                <p className="typewriter typewriter-firstname">Emmanuel</p> 
                <p className={`typewriter typewriter-lastname` }
                  style={{
                    visibility: nameAnimations.firstName ? "visible" : "hidden", 
                  }}
                  >
                  Rosario 
                </p> 
              </h1 >
          <div className={`${theme.subheading.home}`}>
            <h3 className="">
            <p className={`typewriter typewriter-title` }
                  style={{
                    visibility: nameAnimations.lastName ? "visible" : "hidden", 
                  }}
                  >
                  Full-Stack Software Developer
                </p> 
            </h3>
          </div>
        </div>
        <div className="">
          <div className="">
            <p className={`${theme.bodyText.default} ${theme.container.default} my-16`}> 
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
    </section>
  )
}

export default Home