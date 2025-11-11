
import './App.css'
import {Routes, Route} from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import About from './pages/About';
import JoinUs from './pages/JoinUs';
import Schedule from './pages/Schedule';
import Navbar from './components/Navbar';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  
  return (
    <>
    <div className="navbar">
    <Navbar/>
    </div>
      <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/join" element={<JoinUs/>}></Route>
      <Route path="/schedule" element={<Schedule/>}></Route>
      </Routes>
       <ToastContainer />
      
    </>
  )
}

export default App;
