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
                <NavLink to="" className="liText">
                  About
                </NavLink>
              </li>
              <li className="liStyl">
                <NavLink to="" className="liText">
                  Member
                </NavLink>
              </li>

              <li className="liStyl">
                <NavLink to="" className="liText">
                  Schedule
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <button className="joinUs">Join us!</button>
      </nav>
    </main>
  );
};

export default Navbar;
