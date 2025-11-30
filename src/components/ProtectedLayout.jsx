import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  return (
    <main className="OuterCon">
      <div className="navbar">
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer/>
      </div>
    </main>
  );
};

export default ProtectedLayout;