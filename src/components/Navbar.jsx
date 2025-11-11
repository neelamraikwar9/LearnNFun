import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <main>
      <nav className="navContainer">
        <div className="navBar">
          <div className="lnf">
            <a href="/" className="lnf">
              Learn 'N' Fun
            </a>
          </div>

          <div>
            <ul className="navItemCon">
              <li className="liStyl">
                <NavLink to="" className="liText">
                  Home
                </NavLink>
              </li>
              <li className="liStyl">
                <NavLink to="/about" className="liText">
                  About
                </NavLink>
              </li>
              {/* <li className="liStyl">
                <NavLink to="/members" className="liText">
                  Member
                </NavLink>
              </li> */}

              <li className="liStyl">
                <NavLink to="/schedule" className="liText">
                  Schedule
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <NavLink to="/join"><button className="joinUs">Join us!</button></NavLink>
      </nav>
    </main>
  );
};

export default Navbar;
