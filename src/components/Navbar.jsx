import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <main>
      {/* <h1>navbar</h1> */}
      
      <nav className="navContainer">
        <a href="">LNF</a>
        <ul className="ulCon">
          <li className="liStyl">
            <NavLink to="" className="liText">Home</NavLink>
          </li>
          <li className="liStyl">
            <NavLink to="" className="liText">About</NavLink>
          </li>
          <li className="liStyl">
            <NavLink to="" className="liText">Member</NavLink>
          </li>
          
          <li className="liStyl">
            <NavLink to="" className="liText">Schedule</NavLink>
          </li>
        </ul>
        <button className="joinUs">Join us!</button>
      </nav>
    </main>
  );
};

export default Navbar;
