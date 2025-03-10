import { Link, useParams, useNavigate } from "react-router-dom";
import { useDarkMode } from "../utils/DarkModeContext";
import { useState, useEffect} from "react"
import { useResponsive } from "../utils/ResponsiveContext";
import { projects } from "../utils/projects";
import { theme } from "../styles/style";
import Card from "./ProjectCards";

const ProjectDetails = () => {
const {darkMode, toggleDarkMode } = useDarkMode();
const [isAnimated, setIsAnimated] = useState(false)
const isMobile = useResponsive();
const [loading, setLoading] = useState(true);

const meta_BASE_URL = import.meta.env.BASE_URL;
const [project, setProject] = useState({})
// Grab param number and subtract one. Find project by indeces
const projectId = (useParams().project_id - 1)

// Grab the project we want
const fetchProject = async () => {
  try {
    const project_data = await projects[projectId]
    console.log(project_data)
    setProject(project_data)
    setLoading(false)
  } catch (error){
    console.log(error)
    setLoading(false)
  }
}
// fetch the project details once
useEffect(() => {
  fetchProject();
}, [])
// Timer for title Animation
useEffect(() => {
  const timer = setTimeout(() => {
    setIsAnimated(true); 
  }, 601); 

  return () => clearTimeout(timer); 
}, []);

if (loading) {
  return <div>Loading...</div>;
}
return (
  <div className="place-items-center"> 
    <section className={`place-items-center ${isMobile ? "w-1/2" : ""}`}>
        <h1 className={`${theme.heading.default} ${darkMode ? theme.darkMode.subheading : theme.lightMode.subheading} typewriter typewriter-projects-talkthroughit`}
          style={{ visibility: isAnimated ? "visible" : "hidden" }}>
          {project.title || "Loading..."}
        </h1>

        {/* Loop through cards and render each one */}
        {project.cards && project.cards.map((card, idx) => (
          <Card
            key={idx}
            card={card}
            meta_BASE_URL={meta_BASE_URL}
            darkMode={darkMode}
            theme={theme}
            tech_stack={idx === 0 ? project.tech_stack : []}
            github={ idx === 0 ? project.github : ""}
            isFirstCard={idx === 0}
          />
        ))}

        {/* Back to Projects Link */}
        <div className="flex justify-end mt-3">
          <Link to="/projects" className={`${theme.button.default} ${darkMode ? `${theme.darkMode.button}` : `${theme.lightMode.button}`}`}>
            Back To Projects
          </Link>
        </div>
      </section>
  </div>
)
}

export default ProjectDetails