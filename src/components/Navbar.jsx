import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      {/* <h1>navbar</h1> */}
      <nav>
        <a href="">LNF</a>
        <ul>
          <li>
            <NavLink to="">Home</NavLink>
          </li>
          <li>
            <NavLink to="">About Us</NavLink>
          </li>
          <li>
            <NavLink to="">Join Us</NavLink>
          </li>
          <li>
            <NavLink to="">Weekly Activities</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
