import { Link } from "react-router-dom";
import { theme } from "../../styles/style";
import { useDarkMode } from "../../darkModeContext";
import { useState, useEffect} from "react"

const TalkThorughtit = () => {
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
        typewriter typewriter-projects-talkthroughit`
        }
        style={{ visibility: isAnimated ? "visible" : "hidden", }}>
          TalkThorught_it 
        </h1>
        <div className="mx-4 mt-6" >
          <img src="../src/assets/Talkthroughit/talkthroughit.png" alt="Talk Throught It - Landing Page" />
        </div>
        <div className={`${theme.container.description} ${darkMode ? theme.dark.container : "bg-midnight"}`}>
          <div className={`${theme.bodyText.default} text-base p-2`}>
              <p> 
              <h2 className={`${theme.subheading.default} text-sunburst`}>
                Landing Page
              </h2>
                An app made to help therapist and clients keep track of connect and get better mental health. Therapist and clients have their own portals.
                Therapist portal allows them to create dynamic schedules, accept bookings and list their services.
                Clients can browse therapist, favorite ones they like, book appointments and view upcoming ones. 
              </p>
              <hr className="m-2 border-[1px]" />
            <p>
              <b>Tech Stack:</b>
            </p>
              <div className="flex flex-cols space-x-10 justify-center my-3">
                <img className="h-12" src="../src/assets/Logos/js.png"/>
                <img className="h-12" src="../src/assets/Logos/icons8-react-native-96.png"/>
                <img className="h-12" src="../src/assets/Logos/icons8-tailwind-css-96.png"/>
              </div>
              <div className={`${theme.button.largeButton}`}>
                <img className="h-8" src="../src/assets/Logos/github_logo_BW.png" />
                <Link to="https://github.com/RosarioManny/TalkThrough.it-Front-End">FrontEnd</Link>
                |
                <Link to="https://github.com/Nottimlim/TalkThroughIt-Backend">BackEnd</Link>
            </div>
          </div>
        </div>
        <div className="mx-4 my-6">
            <img src="../src/assets/Talkthroughit/ClientDashboard_Talkthroughit.png" alt="Talk Through it - Client Dashboard" />
          <p className={`${theme.bodyText.default} ${darkMode ? theme.dark.container : "bg-midnight"} p-2 block `}>
            <h2 className={`${theme.subheading.default} text-sunburst`}> 
              Client Dashboard
            </h2>
            Where Clients can see their upcoming appointments, favorited therapist and total appointments.
          </p>
        </div>
        <div className="mx-4 my-6">
            <img src="../src/assets/Talkthroughit/BrowseTherapist_Talkthroughit.png" alt="Talk Through it - Browse Page" />
          <p className={`${theme.bodyText.default} ${darkMode ? theme.dark.container : "bg-midnight"} p-2 block`}>
            <h2 className={`${theme.subheading.default} text-sunburst`}>
              Browse Page
            </h2>
            The page where clients and Therapist can view. You can book appointments and favorite on this page. 
          </p>
        </div>
    </section>
  </>
)

}

export default TalkThorughtit