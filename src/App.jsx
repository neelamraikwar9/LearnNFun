
import './App.css'
import {Routes, Route} from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import About from './pages/About';
import JoinUs from './pages/JoinUs';
import Member from './pages/Member';
import Schedule from './pages/Schedule';

function App() {
  
  return (
    <>
      <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/join" element={<JoinUs/>}></Route>
      <Route path="/members" element={<Member/>}></Route>
      <Route path="/schedule" element={<Schedule/>}></Route>
      </Routes>
    </>
  )
}

export default App;
