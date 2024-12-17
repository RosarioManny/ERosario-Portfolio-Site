import { theme } from "../../styles/style";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <section className="bg-midnight items-center m-max flex flex-col space-y-1 text-frost text-sm p-2 flex position-fixed bottom-0 right-0 left-0">
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