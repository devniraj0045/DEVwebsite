
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home'
import MySkills from './component/MySkills';
import Team from './component/Team';
import Footer from './component/Footer';
import About from './component/About';

import { Routes,Route } from 'react-router-dom';


function App() {
  return (
  
<>
   <Navbar />
  <Routes>
    <Route path='/DEVwebsite' element={<Home />} />
    <Route path='/MySkills' element={<MySkills />} />
    <Route path='/Team' element={< Team/>} />
    <Route path='/Aboutme' element={< About/>} />
   
     
  </Routes>
  < Footer /> 
  </>
   
   
    
  );
}

export default App;
