import { Link, useParams, useNavigate } from "react-router-dom";
import { useDarkMode } from "../utils/DarkModeContext";
import { useState, useEffect} from "react"
import { useResponsive } from "../utils/ResponsiveContext";
import { projects } from "../utils/projects";
import { theme } from "../styles/style";

const ProjectDetails = () => {
const {darkMode, toggleDarkMode } = useDarkMode();
const [isAnimated, setIsAnimated] = useState(false)
const isMobile = useResponsive();

const meta_BASE_URL = import.meta.env.BASE_URL;
const [project, setProject] = useState({})
// Grab param number and subtract one. Find project by indeces
const projectId = (useParams().project_id - 1)

// Grab the project we want
const fetchProject = () => {
  try {
    const project_data = projects[projectId]
    console.log(project_data)
    setProject(project_data)
  } catch (error){
    console.log(error)
  }
}
// fetch the project details once
useEffect(() => {
  fetchProject();
}, [])

useEffect(() => {
  const timer = setTimeout(() => {
    setIsAnimated(true); 
  }, 601); 

  return () => clearTimeout(timer); 
}, []);
console.log(project.title)

return (
  // <>
  // <h1>HELLELEOL</h1>
  // <p>{`Project ID >> ${projectId}`}</p>
  // <p>{`Project >> ${project.title}`}</p>
  // </>
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
{`${project.title}`} 
</h1>
<div className="mx-4 mt-6" >
<img src={`${meta_BASE_URL}/${project.header_image}`} alt={`${project.header_alt}`} />
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
<img className="h-12" src={`${meta_BASE_URL}/assets/Logos/js.png`} alt='JavaScript Logo'/>
<img className="h-12" src={`${meta_BASE_URL}/assets/Logos/icons8-react-native-96.png`} alt='React Logo'/>
<img className="h-12" src={`${meta_BASE_URL}/assets/Logos/icons8-tailwind-css-96.png`} alt='Tailwind Logo'/>
<img className="h-12" src={`${meta_BASE_URL}/vite.svg`} alt="Vite Logo"/>
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
<img className="h-8" src={`${meta_BASE_URL}/assets/Logos/github-mark-white.png `}/>
<Link to="https://github.com/RosarioManny/TalkThrough.it-Front-End">FrontEnd</Link>
|
<Link to="https://github.com/Nottimlim/TalkThroughIt-Backend">BackEnd</Link>
</div>
</div>
</div>
<div className="mx-4 my-6">
<img src={`${meta_BASE_URL}/assets/Talkthroughit/ClientDashboard_Talkthroughit.png`}alt="Talk Through it - Client Dashboard" />
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
<img src={`${import.meta.env.BASE_URL}/assets/Talkthroughit/BrowseTherapist_Talkthroughit.png`} alt="Talk Through it - Browse Page" />
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

export default ProjectDetails