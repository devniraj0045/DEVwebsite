import React from 'react'

import { FaFacebookMessenger,FaLinkedin, FaWhatsapp,FaPhoneAlt} from 'react-icons/fa';
import { AiTwotoneMail } from "@react-icons/all-files/ai/AiTwotoneMail";

import red from '../red.png'
import { Link } from 'react-router-dom';





const Navbar = () => {
  return (
   <>
                <div className='py-1 bg-danger' id="home">
                <div class="container">
  <div class="row">
    <div class="col ft ">
   WE ARE HERE FOR THE SOLUTION
    </div>
   
    
    
    
    <div class="col fb">
      <a href='http://m.me/Devrahul2003' target="_blank" className="face">< FaFacebookMessenger /></a>
      <a href='https://www.linkedin.com/in/rahul-kumar-thakur-009226216/' target="_blank" className=''><FaLinkedin /></a>
      <a href='https://wa.me/9779821810341?text=Hi%20There!' target="_blank" className=''><FaWhatsapp /></a>
      <a href="tel:9761730002" class="  "> <FaPhoneAlt/><span></span></a>
      <a href='mailto:rahul98092@gmail.com' class=" "> <AiTwotoneMail /><span></span></a>


     
    </div>
  </div>
</div>

                </div>
                <nav className="navbar navbar-expand-lg navbar-light  px-5">
               <div className="container-fluid">
                <Link to=""className="navbar-brand" href="#"><img src={ red } alt="logo" className="logo"></img><strong py-2><i></i></strong> </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                    <li className="nav-item">
                    <Link className="nav-link  " aria-current="page" to="/DEVwebsite">HOME</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to ="/MySkills">MY SKILLS</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Team">OUR TEAM</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Aboutme">ABOUT ME</Link>
                    </li>


                </ul>

                </div>
            </div>
            </nav>


          

   </>

  )
}

export default Navbar
