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
const fetchProject = async () => {
  try {
    const project_data = await projects[projectId]
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

if (project.card1){
  console.log("Card 1 >>", project.card1)
}
else {
  console.log("No Card >>", project)
}
return (
  <div>
    <h1>{project.title}</h1>
    {project.card1 && (
      <div>
        <img src={`${meta_BASE_URL}${project.card1.image}`}/>
        <h2>{project.card1.header}</h2>
        <p>{project.card1.desc}</p>
      </div>
    )}
  </div>
)
}

export default ProjectDetails