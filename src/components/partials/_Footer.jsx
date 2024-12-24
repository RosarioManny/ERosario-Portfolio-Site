import { theme } from "../../styles/style";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <section className={`${theme.container.footer}`}>
      <div> My personal website, created to showcase my skills as a full-stack software developer. </div>
      <button className="bg-sunburst text-midnight inline-flex justify-center p-1 w-1/4">
        <Link to="https://github.com/RosarioManny/My-Website.git"> Github </Link>
      </button>
      <div> Created by: Emmanuel Rosaio </div>
    </section>
    </>
  )
}

export default Footer