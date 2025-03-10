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

useEffect(() => {
  fetchProject();
}, [])

const meta_BASE_URL = import.meta.env.BASE_URL;

console.log("ID >>", projectId )
// const fetchProject = async () => {
//   try {
//     projectData = await projects
//   } catch (error) {
//     console.log(error)
//   }
// }
return (
  <>
  <h1>HELLELEOL</h1>
  <p>{`Project ID >> ${projectId}`}</p>
  <p>{`Project >> ${project.title}`}</p>
  </>
)
}

export default ProjectDetails