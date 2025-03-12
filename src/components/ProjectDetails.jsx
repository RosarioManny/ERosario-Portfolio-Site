import { Link, useParams, useNavigate } from "react-router-dom";
import { useDarkMode } from "../utils/DarkModeContext";
import { useState, useEffect, useRef} from "react"
import { useResponsive } from "../utils/ResponsiveContext";
import { projects } from "../utils/projects";
import { theme } from "../styles/style";
import Card from "../utils/ProjectCards";
import Typewriter from "../utils/Typewriter";

const ProjectDetails = () => {
const {darkMode, toggleDarkMode } = useDarkMode();
const [isAnimated, setIsAnimated] = useState(false)
const isMobile = useResponsive();
const [loading, setLoading] = useState(true);
const [project, setProject] = useState({})


const meta_BASE_URL = import.meta.env.BASE_URL;
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

const typewriterRef = useRef(null)
// Length of title
useEffect(() => {
  if (typewriterRef.current) {
    const word = typewriterRef.current.textContent;
    const wordWidth = typewriterRef.current.scrollWidth;
    const steps = word.length;

    // Set CSS variables
    typewriterRef.current.style.setProperty("--word-width", `${wordWidth}`);
    typewriterRef.current.style.setProperty("--steps", steps);
  }
}, []);
// Timer for title Animation
useEffect(() => {
  const timer = setTimeout(() => {
    setIsAnimated(true); 
  }); 

  return () => clearTimeout(timer); 
}, []);

if (loading) {
  return <div className={`text-center ${theme.heading.default} ${darkMode ? theme.darkMode.subheading : theme.lightMode.subheading}`}>Loading...</div>;
}
return (
  <div className="place-items-center"> 
    <section className={`place-items-center ${isMobile ? "w-1/2" : ""}`}>
        <Typewriter
          text={`${project.title}`}
          className={`${theme.heading.default} ${darkMode ? theme.darkMode.subheading : theme.lightMode.subheading} typewriter typewriter-projects`}
          style={{ width: "var(--word-width)", visibility: isAnimated ? "visible" : "hidden" }}
          ref={typewriterRef}
          />
        {/* Loop through cards and render each one */}
        {project.cards && project.cards.map((card, idx) => (
          <Card
            key={idx}
            card={card}
            meta_BASE_URL={meta_BASE_URL}
            darkMode={darkMode}
            theme={theme}
            isMobile={isMobile}
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