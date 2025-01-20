import { Link } from "react-router-dom";
import { theme } from "../../styles/style";
import { useDarkMode } from "../../utils/DarkModeContext";
import { useState, useEffect} from "react"
import { useResponsive } from "../../utils/ResponsiveContext";

const Artfolio = () => {
const {darkMode, toggleDarkMode } = useDarkMode();
const [isAnimated, setIsAnimated] = useState(false)
const isMobile = useResponsive();

useEffect(() => {
  const timer = setTimeout(() => {
    setIsAnimated(true); 
  }, 601); 

  return () => clearTimeout(timer); 
}, []);

return (
  <div className="place-items-center">
    <section className={`
      place-items-center
      ${isMobile ? "w-1/2" : ""}
      `}
    >
    <h1 className={`
      ${theme.heading.default}
      ${darkMode ? theme.darkMode.subheading : theme.lightMode.subheading}
      typewriter typewriter-projects
      `
      }
      style={{ visibility: isAnimated ? "visible" : "hidden", }}
    >
      Artfolio
    </h1>
        <div className="mx-4 mt-6" >
          <img src="../src/assets/Artfolio/artfolio.png" alt="Talk Throught It - Landing Page" />
        </div>
        <div className={`
          ${theme.container.description} 
          ${darkMode ? theme.darkMode.container : theme.lightMode.container}`
          }
        >
          <div className={`
              text-base p-2
              ${theme.bodyText.default}
              ${darkMode ? 
                `${theme.darkMode.container} ${theme.darkMode.mainText}` 
                : 
                `${theme.lightMode.container} ${theme.lightMode.mainText}`
              }`
            }
          >
            <p> 
              <h2 className={`
                ${theme.subheading.default} 
                ${darkMode ? theme.darkMode.subheading : theme.lightMode.subheading}`
              }
              >
                Landing Page
              </h2>
              The landing page where you can view post even without having to create an account. 
              This app made to help artist keep track of their artworks and build their portfolio's. 
              They can see also view other artist's work and art journey alongside them. 
            </p>
              <hr className="m-2 border-[1px]" />
            <p>
              Tech Stack:
            </p>
            <div className="flex flex-cols space-x-10 justify-center my-3">
              <img className="h-12" src="../src/assets/Logos/icons8-ejs-96.png"/>
              <img className="h-12" src="../src/assets/Logos/icons8-html-logo-96.png"/>
              <img className="h-12" src="../src/assets/Logos/icons8-css-logo-96.png"/>
            </div>
            <div className={`
              ${theme.button.largeButton}
              ${darkMode ? 
                `${theme.darkMode.button}`
                :
                `${theme.lightMode.button}`
              }`
              }
            >
              <Link to="https://github.com/RosarioManny/Artfolio.git">  
                <div className={`${theme.button.largeButton}`}>
                    <img className="h-8" src="../src/assets/Logos/github-mark-white.png" />
                    Github
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="mx-4 my-6">
          <img src="../src/assets/Artfolio/Artfolio-PostDetails.png" alt="Artfolio - Art Details" />
          <p className={`
              p-2  
              ${theme.bodyText.default} 
              ${darkMode ? 
                `${theme.darkMode.container} ${theme.darkMode.mainText}` 
                : 
                `${theme.lightMode.container} ${theme.lightMode.mainText}`
              } 
            `}
          >
            <h2 className={`
              ${theme.subheading.default} 
              ${darkMode ? theme.darkMode.subheading : theme.lightMode.subheading}`
              }
            > 
              Art Details
            </h2>
            Where you can see the larger image of the artwork and the artwork's details including medium, date, creator, and more.
          </p>
        </div>
        <div className="mx-4 my-6">
        <img src="../src/assets/Artfolio/Artfolio-Profile.png" alt="Artfolio - Profile page" />
          <p className={`
            p-2
              ${theme.bodyText.default} 
              ${darkMode ? 
                `${theme.darkMode.container} ${theme.darkMode.mainText}` 
                : 
                `${theme.lightMode.container} ${theme.lightMode.mainText}`
              }`
            }
          >
            <h2 className={`
                ${theme.subheading.default} 
                ${darkMode ? theme.darkMode.subheading : theme.lightMode.subheading}`
              }
            >
              Profile Page
            </h2>
            Where users can upload their artworks, edit their profile and view their works. They can go into the artworks and see the art's details.
          </p>
          <div className="flex justify-end mt-3">
            <Link to="/projects" className={`${theme.button.default} ${darkMode ? `${theme.darkMode.button}` : `${theme.lightMode.button}`}`}> 
              Back To Projects
            </Link>
          </div>
        </div>
    </section>
  </div>
)

}

export default Artfolio