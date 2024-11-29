// FIRE
import { useState } from "react";
import { Link } from "react-router-dom";
import { theme } from "../../styles/style";

const Navbar = () =>  {
  return (
    <nav className={`${theme.nav.wrapper}p-4 mb-6 bg-sunglow-50/50 border-l-4 border-sunglow-500`} >
      <h3>
        <Link to="/">
          <p>E.R.</p>
        </Link>
      </h3>
      <Link to="/projects">
        <p>Projects</p>
      </Link>
      <Link to="/contacts">
        <p>Contacts</p>
      </Link>
      <Link to="/about">
        <p>About</p>
      </Link>
    </nav>
  )
}

export default Navbar

// Things to do in Navbar 
// C = Completed && I = Incompleted 
// About Link - C
// Contacts 
// Projects 
// Home 
// Aligned 