import { theme } from "../../styles/style";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <section className="bg-midnight max-h-auto flex flex-col space-y-2 text-frost text-sm bg-midnight p-2 flex position-fixed bottom-0 right-0 left-0">
      <div> My personal website, created to showcase my skills as a full-stack software developer. </div>
      <div> Emmanuel Rosaio, rosarioemm47@gmail.com </div>
      <div><Link> Website Code  </Link></div>
    </section>
    </>
  )
}

export default Footer