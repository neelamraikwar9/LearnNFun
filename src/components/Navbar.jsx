import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <main>
      {/* <h1>navbar</h1> */}

      <nav style={{backgroundColor:'#010a4dff', height: '5rem', padding: '1rem 1.9rem', margin: '0rem', position: 'fixed', width: '86rem', }}>
        <a href="">LNF</a>
        <ul style={{ display: 'flex', gap: '2rem', justifyContent: "center", alignItems: "flex-end"}}>
          <li className="liStyl">
            <NavLink to="" className="liText">Home</NavLink>
          </li>
          <li className="liStyl">
            <NavLink to="" className="liText">About Us</NavLink>
          </li>
          <li className="liStyl">
            <NavLink to="" className="liText">Join Us</NavLink>
          </li>
          <li className="liStyl">
            <NavLink to="" className="liText">Weekly Activities</NavLink>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default Navbar;
