import { Link } from "react-router-dom";
import { theme } from "/src/styles/style.js"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EnterSite = () => {
  const navigate = useNavigate();

  useEffect(() => {
    
  }, [])

  return(
    <>
      <section className={`${theme.heading.default} flex flex-col place-items-center`}>
          <h1 className={``}>
            Incoming error
          </h1>
          <h1>
            Your next Developer...
          </h1>
      </section>
    </>
  )
}

export default EnterSite