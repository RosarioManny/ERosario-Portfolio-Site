import { theme } from "../styles/style";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
import { useDarkMode } from "../utils/DarkModeContext";

const Contacts = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true); 
    }, 501); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      <section className="place-items-center">
        <div className=" flex-auto flex-col justify-items-center space-y-4">
        <h1 className={`
        ${theme.heading.default} 
        ${darkMode ? "text-tangerine" : "text-sunburst"} 
          typewriter typewriter-projects`
          }
          style={{ visibility: isAnimated ? "visible" : "hidden", }}>
            Contacts
        </h1>
        <p className={`${theme.subheading.default}`}>Phone: (718)619-2138</p>
        <p className={`${theme.subheading.default}`}>Email: rosario.emm47@gmail.com</p>
        <div className={`${theme.container.socialsLogos} grid grid-cols-3 gap-6`}>
          <Link to='https://github.com/RosarioManny'>
            <img className="h-10" src="src/assets/Logos/github-mark-white.png" alt="" />
          </Link>
          <Link to='https://www.linkedin.com/in/emmanuel-rosario-mannys/'>
            <img className="h-10" src="src/assets/Logos/In-White-96.png" alt="" />
          </Link>
          <Link to="https://www.instagram.com/it_sjustman.ny/">
            <img className="h-10 hover:animate-pulse" src="src/assets/Logos/Instagram_Glyph_White.png" alt="" />
          </Link>
        </div>
        </div>
        <form className={` ${theme.container.default} ${darkMode ? "bg-charcoal" : "bg-midnight"} flex flex-col mt-8`}>
          <p className={`${theme.subheading.default}  flex justify-center text-2xl`}>Contact me!</p>
          <label htmlFor="nameInput" className={`${theme.bodyText.default} mb-1`}> Name:</label>
          <input 
            type="text" 
            name="nameInput" 
            id="nameInput"
            size="5"
            className="p-1"
            placeholder="Name"
          />
          <label htmlFor="emailInput"  className={`${theme.bodyText.default} mt-2 mb-1`}> Email:</label>
          <input 
            type="email" 
            name="emailInput" 
            id="emailInput"
            placeholder="Email address"
            className="p-1"
          />
          <label htmlFor="message" className={`${theme.bodyText.default} mt-2 mb-1`}> Message:</label>
          <textarea 
            name="message" 
            id="message"
            rows="15"
            cols="35"
            placeholder="Your message"
            className="p-1"
          >

          </textarea>
          

        </form>
      </section>
    </>
  )
}
export default Contacts