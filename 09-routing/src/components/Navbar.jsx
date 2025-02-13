import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <NavLink className={(elem) => 
                {return elem.isActive ? "red" : ""}}
                 to="/"><li>Home</li></NavLink>
            <NavLink className={(elem) => 
                {return elem.isActive ? "red" : ""}} 
                to="/about"><li>About</li></NavLink>
            <NavLink className={(elem) => 
                {return elem.isActive ? "red" : ""}} 
                to="/contact"><li>Contact</li></NavLink>
        </nav>
    </div>
  )
}

export default Navbar