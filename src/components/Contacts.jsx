import { theme } from "../styles/style";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef} from "react";
import { useDarkMode } from "../utils/DarkModeContext";
import { useResponsive } from "../utils/ResponsiveContext";
import Typewriter from "../utils/Typewriter";
import emailjs from '@emailjs/browser';

const emailjsServiceID = import.meta.env.VITE_SERVICE_ID;
const emailjsTemplateID = import.meta.env.VITE_TEMPLATE_ID;
const emailjsPublicKey = import.meta.env.VITE_PUBLIC_KEY;

const Contacts = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const isMobile = useResponsive()
  const form = useRef();
  const socials = [
    {
      href: "https://www.instagram.com/it_sjustman.ny/",
      src: "/assets/Logos/Instagram_Glyph_White.png",
      alt: "Instagram Logo",
    },
    {
      href: "https://github.com/RosarioManny",
      src: "/assets/Logos/github-mark-white.png",
      alt: "Github Logo",
    },
    {
      href: "https://www.linkedin.com/in/emmanuel-rosario-mannys/",
      src: "/assets/Logos/Linked-In-White-96.png",
      alt: "LinkedIn Logo",
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(`${emailjsServiceID}`, `${emailjsTemplateID}`, form.current, {
        publicKey: `${emailjsPublicKey}`,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      e.target.reset()
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
        <Typewriter 
        isMobile={`${isMobile ? "" : "!text-4xl"}`}
        text="Contacts"
        className={`
        ${theme.heading.default}
        ${darkMode ? theme.darkMode.subheading : theme.lightMode.subheading} 
        `
          }
        />

        <p className={`${theme.subheading.default} !text-xl`}>Phone: (718)619-2138</p>
        <p className={`${theme.subheading.default} !text-xl`}>Email: rosario.emm47@gmail.com</p>
        <div className={`${theme.container.socialsLogos} grid grid-cols-3 gap-6`}>
          {socials.map(({ href, src, alt }) => (
            <Link key={href} to={href}>
              <img className="h-12 hover:animate-pulse" src={`${import.meta.env.BASE_URL}${src}`} alt={alt} />
            </Link>
          ))}
        </div>
        </div>
          <form 
          className={` 
            flex flex-col mt-8
            ${theme.container.default} 
            ${darkMode ? theme.darkMode.container : theme.lightMode.container} `}
          onSubmit={sendEmail}
          ref={form}
          >
            <p className={`
              flex justify-center !text-2xl
              ${theme.subheading.default} 
              ${darkMode ? theme.darkMode.subheading : theme.lightMode.subheading}`
            }>
              Contact me!
            </p>
              <label htmlFor="from_name" className={`${theme.bodyText.default} ${theme.lightMode.mainText} mb-1`}> 
                Name: 
              </label>
              <input 
              type="text" 
              id="from_name"
              name="from_name" 
              placeholder="Name"
              className="p-1"
              required
              />
              <label htmlFor="email"  className={`${theme.bodyText.default} ${theme.lightMode.mainText} mt-2 mb-1`}>
                Email: 
              </label>
              <input 
              type="email" 
              name="email"
              id="email"
              placeholder="Email to contact back"
              className="p-1"
              required
              />
              <label htmlFor="message" className={`${theme.bodyText.default} ${theme.lightMode.mainText} mt-2 mb-1`}> 
                Message: 
              </label>
              <textarea 
              name="message"
              id="message"
              rows="15"
              cols="35"
              placeholder="Your message"
              className="p-1"
              required
              />
              <div className="flex justify-end mt-3">
                <button 
                className={`${theme.button.default} ${darkMode ? `${theme.darkMode.button} ${theme.darkMode.hoverButton}` : ` ${theme.lightMode.hoverButton} ${theme.lightMode.button}`}`}
                type="submit" 
                >
                Send
                </button>
              </div>
          </form>
      </section>
    </>
  )
}
export default Contacts