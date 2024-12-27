import { theme } from "/src/styles/style.js"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";

const Projects = () => {
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true); 
    }, 501); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      <section className="place-items-center">
        <h1 className={`${theme.heading.default} 
        typewriter typewriter-projects`
        }
        style={{ visibility: isAnimated ? "visible" : "hidden", }}>
          Projects 
        </h1>
        <section className="">
          <div className={`${theme.card.projects}`}>
            <Link to="/projects/talkthroughit">
              <img 
                className="w-full"
                src="src/assets/Talkthroughit/talkthroughit.png" 
                alt="Talk through it - Therapy website" 
              />
            </Link>
            <div className="p-4 bg-midnight">
              <div className={`${theme.subheading.card}`}>
                TalkThrough.It
              </div>
              <p className={`${theme.bodyText.card}`}>
                The value of Therapy and Mental health is immense. <br/>
                Clients & Therapist can create accounts, book appointments, browser therapist, etc!
              </p>
            </div>
          </div>
          <div className={`${theme.card.projects}`}>
            <Link to="/projects/artfolio">
              <img 
                className="w-full"
                src="src/assets/Artfolio/artfolio.png"
                alt="Artfolio - Art portfolio website" 
              />
            </Link>
            <div className="p-4 bg-midnight">
              <div className={`${theme.subheading.card}`}>
                Artfolio
              </div>
                <p className={`${theme.bodyText.card}`}>
                  A place for artist to share their portfolio and artwork. Create an account, upload your photos and manage your profile!
                </p>
            </div>
          </div>
          <div className={`${theme.card.projects}`}>
            <Link to="/projects/whatduudle">
              <img 
                className="w-full"
                src="src/assets/Whataduudle/whataduudle.png" 
                alt="What a doodle - AI drawing game website" 
              />
            </Link >
            <div className="p-4 bg-midnight">
              <div className={`${theme.subheading.card}`}>
                Whataduudle
              </div>
              <p className={`${theme.bodyText.card}`}>
                Have fun and play with AI! A drawing game that AI guesses what you've drawn. If it can guesses your drawing, YOU WIN!
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Projects