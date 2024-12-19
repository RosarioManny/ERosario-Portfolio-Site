import { theme } from "/src/styles/style.js"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";

const Projects = () => {
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true); 
    }, 1000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      <section className="place-items-center bg-royal">
        <h1 className={`${theme.heading.default} 
        typewriter typewriter-projects`
        }
        style={{ visibility: isAnimated ? "visible" : "hidden", }}>
          Projects 
        </h1>
        <section className="">
          <div className="max-w-sm max-h-min overflow-hidden mx-4 my-6 hover:shadow-xl hover:border-solid hover:border-obsidian hover:border-4">
              <img className="w-full"src="src/assets/talkthroughit.png" alt="Talk through it - therapy website" />
            <div className="p-4 bg-midnight">
              <div className="font-bold text-xl mb-2 text-sunburst">
                TalkThrough.It
              </div>
              <p className="text-frost text-base text-[13px]">
                The value of Therapy and Mental health is immense. <br/>
                Clients & Therapist can create accounts, book appointments, browser therapist, etc!
              </p>
            </div>
          </div>
          <div className="max-w-sm overflow-hidden mx-4 my-6 hover:shadow-xl hover:border-solid hover:border-obsidian hover:border-4">
            <Link to="/projects/artfolio">
              <img className="w-full"src="src/assets/artfolio.png" alt="Artfolio - Art portfolio website" />
            </Link>
            <div className="p-4 bg-midnight">
              <div className="font-bold text-xl mb-2 text-sunburst">
                Artfolio
              </div>
                <p className="text-frost text-base text-[13px]">
                  A place for artist to share their portfolio and artwork. Create an account, upload your photos and manage your profile!
                </p>
            </div>
          </div>
          <div className="max-w-sm overflow-hidden mx-4 my-6 hover:shadow-xl hover:border-solid hover:border-obsidian hover:border-4">
              <img className="w-full"src="src/assets/talkthroughit.png" alt="What a doodle - AI drawing game website" />
            <div className="px-6 py-4 bg-midnight">
              <div className="font-bold text-xl mb-2 text-sunburst">
                Whataduudle
              </div>
              <p className="text-frost text-base text-[13px]">
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