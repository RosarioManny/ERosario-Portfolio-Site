import { Link } from "react-router-dom";
import { theme } from "../../styles/style";
import { useDarkMode } from "../../utils/DarkModeContext";
import { useState, useEffect} from "react"
import { useResponsive } from "../../utils/ResponsiveContext";

const TalkThorughtit = () => {
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
    <h1 className={`${theme.heading.default}
        ${darkMode ? theme.darkMode.subheading : theme.lightMode.subheading}
        typewriter typewriter-projects-talkthroughit`
        }
        style={{ visibility: isAnimated ? "visible" : "hidden", }}>
          TalkThorught_it 
        </h1>
        <div className="mx-4 mt-6" >
          <img src="../src/assets/Talkthroughit/talkthroughit.png" alt="Talk Throught It - Landing Page" />
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
              An app made to help therapist and clients keep track of connect and get better mental health. Therapist and clients have their own portals.                Therapist portal allows them to create dynamic schedules, accept bookings and list their services.
              Clients can browse therapist, favorites ones they like, book appointments and view upcoming ones.
            </p>
              <hr className="m-2 border-[1px]" />
            <p>
              Tech Stack:
            </p>
              <div className="flex flex-cols space-x-10 justify-center my-3">
                <img className="h-12" src="../src/assets/Logos/js.png"/>
                <img className="h-12" src="../src/assets/Logos/icons8-react-native-96.png"/>
                <img className="h-12" src="../src/assets/Logos/icons8-tailwind-css-96.png"/>
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
                <img className="h-8" src="../src/assets/Logos/github-mark-white.png" />
                <Link to="https://github.com/RosarioManny/TalkThrough.it-Front-End">FrontEnd</Link>
                |
                <Link to="https://github.com/Nottimlim/TalkThroughIt-Backend">BackEnd</Link>
            </div>
          </div>
        </div>
        <div className="mx-4 my-6">
            <img src="../src/assets/Talkthroughit/ClientDashboard_Talkthroughit.png" alt="Talk Through it - Client Dashboard" />
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
              Client Dashboard
            </h2>
            Where Clients can see their upcoming appointments, favorited therapist and total appointments.
          </p>
        </div>
        <div className="mx-4 my-6">
            <img src="../src/assets/Talkthroughit/BrowseTherapist_Talkthroughit.png" alt="Talk Through it - Browse Page" />
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
              Browse Page
            </h2>
            The page where clients and Therapist can view. You can book appointments and favorite on this page. 
          </p>
        </div>
    </section>
  </div>
)

}

export default TalkThorughtit