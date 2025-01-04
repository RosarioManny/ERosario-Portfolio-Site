import { Link } from "react-router-dom";
import { theme } from "../../styles/style";
import { useDarkMode } from "../../darkModeContext";
import { useState, useEffect} from "react"

const Whataduudle = () => {
const {darkMode, toggleDarkMode } = useDarkMode();
const [isAnimated, setIsAnimated] = useState(false)

useEffect(() => {
  const timer = setTimeout(() => {
    setIsAnimated(true); 
  }, 601); 

  return () => clearTimeout(timer); 
}, []);

return (
  <>
    <section className="place-items-center">
    <h1 className={`${theme.heading.default}
        ${darkMode && theme.dark.subheading}
        typewriter typewriter-projects-whataduudle`
        }
        style={{ visibility: isAnimated ? "visible" : "hidden", }}>
          Whataduudle
        </h1>
        <div className="mx-4 mt-6" >
          <img src="../src/assets/Whataduudle/whataduudle.png" alt="Talk Throught It - Landing Page" />
        </div>
        <div className={`${theme.container.description} ${darkMode ? theme.dark.container : "bg-midnight"}`}>
          <div className={`${theme.bodyText.default} text-base p-2`}>
              <p> 
              <h2 className={`${theme.subheading.default} text-sunburst`}>
                Landing Page
              </h2>
              A simple landing page. Focused on giving the user the rules of the game and ability to create their account.
              </p>
              <hr className="m-2 border-[1px]" />
            <p>
              <b>Tech Stack:</b>
            </p>
              <div className="flex flex-cols space-x-3 justify-center my-3">
                <img className="h-12" src="../src/assets/Logos/icons8-python-96.png"/>
                <img className="h-12" src="../src/assets/Logos/icons8-react-native-96.png"/>
                <img className="h-12" src="../src/assets/Logos/icons8-tailwind-css-96.png"/>
                <img className="h-12" src="../src/assets/Logos/icons8-django-100.png"/>
                <img className="h-12" src="../src/assets/Logos/icons8-figma-96.png"/>
              </div>
            <div className="flex justify-center gap-2  place-items-center  inline-block bg-sunburst py-1 text-sm font-bold text-midnight">
                <img className="h-8" src="../src/assets/Logos/github_logo_BW.png" />
                <Link to="https://github.com/Nottimlim/whataduudle-frontend">FrontEnd</Link>
                |
                <Link to="https://github.com/RosarioManny/duudle-backend">BackEnd</Link>
            </div>
          </div>
        </div>
        <div className="mx-4 my-6">
            <img src="../src/assets/Whataduudle/whataduudle_start.png" alt="Artfolio - Art Details" />
          <p className={`${theme.bodyText.default} ${darkMode ? theme.dark.container : "bg-midnight"} p-2 block `}>
            <h2 className={`${theme.subheading.default} text-sunburst`}> 
              Prompt Phase
            </h2>
            Once the user is signed in, they will immediatly navigate into the game a be shown the word for the round. 
            The word given is what you want to draw. 
          </p>
        </div>
        <div className="mx-4 my-6">
            <img src="../src/assets/Whataduudle/whataduudle_drawing.png" alt="Artfolio - Profile page" />
          <p className={`${theme.bodyText.default} ${darkMode ? theme.dark.container : "bg-midnight"} p-2 block`}>
            <h2 className={`${theme.subheading.default} text-sunburst`}>
              Drawing Phase
            </h2>
            This is where the game takes place. The user now has 20 seconds to draw on the canvas. 
            Let's hope that the AI can identify your drawing as the word given.
          </p>
        </div>
    </section>
  </>
)

}

export default Whataduudle