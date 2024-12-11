// FIRE
import { useState } from "react";
import { Link } from "react-router-dom";
import { theme } from "/src/styles/style";

const Navbar = () =>  {
  return (
    <nav className={`${theme.nav.container}`} >
        <Link to="/">
          <h3>E.R.</h3>
        </Link>
      <button> D / L</button>
      <p className="flex space-x-7 top-0 right-0">
        <Link to="/projects">
          Projects
        </Link>
        <Link to="/contacts">
          Contacts
        </Link>
        <Link to="/about">
          About
        </Link>
      </p>
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