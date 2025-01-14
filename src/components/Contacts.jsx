import { theme } from "../styles/style";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDarkMode } from "../utils/DarkModeContext";
import emailjs from "emailjs-com";

// const emailjsServiceID = process.env.REACT_APP_SERVICE_ID;
// const emailjsTemplateID = process.env.REACT_APP_TEMPLATE_ID;
// const emailjsUserID = process.env.REACT_APP_PUBLIC_KEY;


const Contacts = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID, 
      process.env.REACT_APP_TEMPLATE_ID, 
      e.target, 
      process.env.REACT_APP_PUBLIC_KEY
    )
    .then((result) => {
      alert('Message Sent Successfully!');
    }, (error) => {
      alert('Message Failed to Send.');
    });

    e.target.reset(); 
  };
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
        ${darkMode ? theme.darkMode.subheading : theme.lightMode.subheading} 
          typewriter typewriter-projects`
          }
          style={{ visibility: isAnimated ? "visible" : "hidden", }}>
            Contacts
        </h1>
        <p className={`${theme.subheading.default} !text-xl`}>Phone: (718)619-2138</p>
        <p className={`${theme.subheading.default} !text-xl`}>Email: rosario.emm47@gmail.com</p>
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
          <form 
          className={` 
            flex flex-col mt-8
            ${theme.container.default} 
            ${darkMode ? theme.darkMode.container : theme.lightMode.container} `}
          onSubmit={sendEmail}
          >
            <p className={`
              flex justify-center !text-2xl
              ${theme.subheading.default} 
              ${darkMode ? theme.darkMode.subheading : theme.lightMode.subheading}`
            }>
              Contact me!
            </p>
            <label htmlFor="nameInput" className={`${theme.bodyText.default} ${theme.lightMode.mainText} mb-1`}> Name:</label>
            <input 
              type="text" 
              name="nameInput" 
              id="nameInput"
              size="5"
              className="p-1"
              placeholder="Name"
              onChange={handleChange}
              required
            />
            <label htmlFor="emailInput"  className={`${theme.bodyText.default} ${theme.lightMode.mainText} mt-2 mb-1`}> Email:</label>
            <input 
              type="email" 
              name="emailInput" 
              id="emailInput"
              placeholder="Email address"
              className="p-1"
              onChange={handleChange}
            />
            <label htmlFor="message" className={`${theme.bodyText.default} ${theme.lightMode.mainText} mt-2 mb-1`}> Message:</label>
            <textarea 
              name="message" 
              id="message"
              rows="15"
              cols="35"
              placeholder="Your message"
              className="p-1"
              onChange={handleChange}
              required
            >
            </textarea>
            <div className="flex justify-end mt-3">
            <button 
            type="submit"
            className={`${theme.button.default} ${darkMode ? `${theme.darkMode.button}` : `${theme.lightMode.button}`}`}>
              Send Message
            </button>
            </div>
          </form>
      </section>
    </>
  )
}
export default Contacts