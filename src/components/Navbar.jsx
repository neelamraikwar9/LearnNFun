import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <main>
      <nav className="navContainer">
        <div className="navBar">
          <div className="lnf">
            <a href="/landing" className="lnf" style={{marginTop: ''}}>
            <img src="./images/image.png" alt="LNF Logo" style={{width:'5rem',height: '5rem', marginBottom: '1rem'}}/>
              <div 
              style={{marginTop: '0.9rem', 
              }}>
              Learn 'N' Fun
              </div>
            </a>
          </div>

          <div>
            <ul className="navItemCon">
              <li className="liStyl">
                <NavLink to="/landing" className="liText">
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

              {/* <li className="liStyl">
                <NavLink to="/chatbot" className="liText">
                  Chatbot
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>

        <NavLink to="/join"><button className="joinUs">Join us!</button></NavLink>
      </nav>
    </main>
  );
};

export default Navbar;
