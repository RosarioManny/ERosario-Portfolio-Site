import { Link } from "react-router-dom";
import { theme } from "../../styles/style";
import { useDarkMode } from "../../utils/DarkModeContext";
import { useState, useEffect} from "react"
import { useResponsive } from "../../utils/ResponsiveContext";

const Whataduudle = () => {
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
      typewriter typewriter-projects-whataduudle
      `
      }
      style={{ visibility: isAnimated ? "visible" : "hidden", }}>
      Whataduudle
    </h1>
        <div className="mx-4 mt-6" >
          <img src={`${import.meta.env.BASE_URL}/assets/Whataduudle/whataduudle.png`} alt="What a doodle - Landing Page"/>
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
              A simple landing page. Focused on giving the user the rules of the game and ability to create their account.
            </p>
              <hr className="m-2 border-[1px]" />
            <p>
              Tech Stack:
            </p>
            <div className="flex flex-cols space-x-10 justify-center my-3">
              <img className="h-12" src={`${import.meta.env.BASE_URL}/assets/Logos/icons8-python-96.png`} alt='Pythong Logo'/>
              <img className="h-12" src={`${import.meta.env.BASE_URL}/assets/Logos/icons8-react-native-96.png`} alt='React Logo'/>
              <img className="h-12" src={`${import.meta.env.BASE_URL}/assets/Logos/icons8-tailwind-css-96.png`} alt='Tailwind Logo'/>
              <img className="h-12" src={`${import.meta.env.BASE_URL}/assets/Logos/icons8-django-100.png`} alt='Django Logo'/>
              <img className="h-12" src={`${import.meta.env.BASE_URL}/assets/Logos/icons8-figma-96.png`} alt='Figma Logo'/>
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
              <img className="h-8" src={`${import.meta.env.BASE_URL}/assets/Logos/github-mark-white.png`} />
              <Link to="https://github.com/Nottimlim/whataduudle-frontend">FrontEnd</Link>
              |
              <Link to="https://github.com/RosarioManny/duudle-backend">BackEnd</Link>
            </div>
          </div>
        </div>
        <div className="mx-4 my-6">
          <img src={`${import.meta.env.BASE_URL}/assets/Whataduudle/whataduudle_start.png`} alt="Prompt Phase" />
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
              Prompt Phase
            </h2>
            Once the user is signed in, they will immediatly navigate into the game a be shown the word for the round. 
            The word given is what you want to draw.           </p>
        </div>
        <div className="mx-4 my-6">
        <img src={`${import.meta.env.BASE_URL}/assets/Whataduudle/whataduudle_drawing.png`} alt="Drawing Phase" />
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
              Drawing Phase
            </h2>
            This is where the game takes place. The user now has 20 seconds to draw on the canvas. 
            Let's hope that the AI can identify your drawing as the word given. 
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
export default Whataduudle