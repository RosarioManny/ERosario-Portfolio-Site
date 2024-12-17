import { theme } from "../styles/style";
import { Link } from "react-router-dom";

const Contacts = () => {

  return (
    <>
      <section className="place-items-center bg-royal">
        <div className="bg-royal flex-auto flex-col justify-items-center space-y-4">
          <h1 className={`${theme.heading.default}`}>Contacts_</h1>
          <p className={`${theme.subheading.default}`}>Phone: (718)619-2138</p>
          <p className={`${theme.subheading.default}`}>Email: rosario.emm47@gmail.com</p>
          <div className={`${theme.container.socialsLogos} grid grid-cols-3 gap-2`}>
            <img className="h-10" src="src/assets/instagram-Black-White.png" alt="" />
            <Link to='https://github.com/RosarioManny'>
              <img className="h-10" src="src/assets/github_logo_BW.png" alt="" />
            </Link>
            <Link to='https://www.linkedin.com/in/emmanuel-rosario-mannys/'>
              <img className="h-10" src="src/assets/linkedin_logo_BW.png" alt="" />
            </Link>
          </div>
        </div>
        <form className={` ${theme.container.default} flex flex-col mt-8`}>
          <p className={`${theme.subheading.default} flex justify-center text-2xl`}>Contact me!</p>
          <label htmlFor="nameInput" className={`${theme.bodyText.default}`}> Name:</label>
          <input 
            type="text" 
            name="nameInput" 
            id="nameInput"
            size="5"
            className="flex"
          />
          <label htmlFor="emailInput"  className={`${theme.bodyText.default}`}> Email:</label>
          <input 
            type="email" 
            name="emailInput" 
            id="emailInput"
          />
          <label htmlFor="message" className={`${theme.bodyText.default}`}> Message:</label>
          <textarea 
            name="message" 
            id="message"
            rows="15"
            cols="35"
          >

          </textarea>
          

        </form>
      </section>
    </>
  )
}
export default Contacts