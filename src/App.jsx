
import './App.css'
import {Routes, Route} from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import About from './pages/About';
import JoinUs from './pages/JoinUs';
import Schedule from './pages/Schedule';
import Navbar from './components/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import Footer from './components/Footer';
// import Chatbot from './pages/Chatbot';
import Signup from './pages/Signup';
import Login from './pages/Login';
// import ProtectedLayout from './components/ProtectedLayout';
// import ProtectedRoute from './components/ProtectedRoute'
// import { Authprovider } from './context/AuthContext';

function App() {
  return (
    <>
    <div className="navbar">
    <Navbar/>
    </div>
    {/* <Authprovider> */}
      <Routes>
      {/* <Route path="/" element={<Login/>}></Route>
      <Route path="/sign-up" element={<Signup/>}></Route>
      <Route path="" element={<ProtectedLayout/>}> */}
      {/* <Route element={<ProtectedRoute/>}> */}
       <Route path="/landing" element={<LandingPage/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/join" element={<JoinUs/>}></Route>
      <Route path="/schedule" element={<Schedule/>}></Route>
      {/* <Route path="/chatbot" element={<Chatbot/>}></Route> */}
      {/* </Route> */}
      {/* </Route> */}
      </Routes>
       <ToastContainer />
       {/* </Authprovider> */}
       <div>
        <Footer/>
       </div>
      
    </>
  )
}

export default App;
