import { NavLink } from "react-router-dom" 
import "./Nav.css"

function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/quotes">See All</NavLink>
      <NavLink to="/addquote">Add New</NavLink>
    </nav>
  )
}

export default Nav