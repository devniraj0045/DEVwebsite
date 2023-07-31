
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home'
import MySkills from './component/MySkills';
import Team from './component/Team';
import Footer from './component/Footer';

import { Routes,Route } from 'react-router-dom';


function App() {
  return (
  
<>
   <Navbar />
  <Routes>
    <Route path='/devrahul' element={<Home />} />
    <Route path='/MySkills' element={<MySkills />} />
    <Route path='/Team' element={< Team/>} />
     
  </Routes>
  < Footer /> 
  </>
   
   
    
  );
}

export default App;
