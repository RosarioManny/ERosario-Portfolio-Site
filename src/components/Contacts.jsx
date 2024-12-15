import { theme } from "../styles/style";

const Contacts = () => {

  return (
    <>
      <section className="place-items-center bg-royal">
        <h1 className={`${theme.heading.default}`}>Contacts_</h1>
        <p className={`${theme.subheading.default}`}>Phone: (718)619-2138</p>
        <p className={`${theme.subheading.default}`}>Email: rosario.emm47@gmail.com</p>
        <p className={`${theme.container.socialsLogos}`}>Socials: rosario.emm47@gmail.com</p>
        <form className={` ${theme.container.default} flex flex-col m-16`}>
          <p className={`${theme.subheading.default} `}>Contact me!</p>
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