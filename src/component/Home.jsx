import React from 'react'
import hd from '../hd.mp4';
import rahulhd from '../rahulhd.png'
import RahulCv from '../RahulCv.docx'
import Typed from 'react-typed'
import MySkills from './MySkills'
import Team from './Team';



const Home = () => {
  return (
    <>
 <div className="banner">
 <video  autoPlay muted loop>
        <source src={hd}type="video/mp4" />
      </video> 
  <div className="textBox">
  <h2>Rahul Kumar Thakur</h2>
      <span >
      <Typed   className='type'
        
        strings={[
              "I'm a Web Developer",
              "I'm a Flutter Developer",
              "I Love Software Development",
              
            ]}
            typeSpeed={50}
            backSpeed={70}
            loop
        
          />
      </span>
  
    <span className=' sp py-5'><a href={RahulCv} Download="Resume" target="_blank" alt="cv">Download CV </a></span> 
  </div>
  <div className="imgBox">
    <img src={rahulhd} alt="img" />
  </div>
</div>


< MySkills />
< Team />



    </>
  )
}

export default Home
