import { theme } from "../../styles/style";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../darkModeContext";

const Footer = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
    <section className={`${theme.container.footer} ${darkMode && theme.dark.footer} `}>
      <div> My personal website, created to showcase my skills as a full-stack software developer. </div>
      <button className="bg-sunburst text-midnight inline-flex justify-center p-1 w-1/4">
        <Link to="https://github.com/RosarioManny/My-Website.git"> Github </Link>
      </button>
      <div className={`${darkMode && theme.dark.subheading} `}> Created by: Emmanuel Rosaio </div>
    </section>
    </>
  )
}

export default Footer