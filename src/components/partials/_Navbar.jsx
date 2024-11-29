// FIRE
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () =>  {
  return (
    <nav>
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