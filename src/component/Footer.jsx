import React from 'react'
import { FaFacebookMessenger,FaLinkedin, FaWhatsapp,FaPhoneAlt} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
   <>
  <footer>
  <div className="content">
    <div className="top">
      <div className="logo-details">
        <i className="fab fa-slack" />
        <span className="logo_name">RAHUL KUMAR THAKUR</span>
      </div>
      <div className="media-icons">
      <Link href='http://m.me/Devrahul2003' className=''><FaFacebookMessenger /></Link>
        <Link href='ff' className=''><FaLinkedin /></Link>
        <Link href='ff' className=''><FaWhatsapp/></Link>
        <Link href='ff' className=''><FaPhoneAlt /></Link>
      </div>
    </div>
    <div className="link-boxes">
      <ul className="box">
      
        <li><Link to="/">Home</Link></li>
        <li><Link to="/MySkills">MySkills</Link></li>
        <li><Link href="#">Linkbout us</Link></li>
        <li><Link href="#">Get started</Link></li>
      </ul>
      <ul className="box">
        <li className="link_name">MY SKILLS</li>
        <li><Link href="#">App Develop</Link></li>
        <li><Link href="#">Web design</Link></li>
        <li><Link href="#">Graphics</Link></li>
        <li><Link href="#">Hosting</Link></li>
      </ul>
      <ul className="box">
        <li className="link_name">KNOWLEGE</li>
        <li><Link href="#">HTML &amp; CSS</Link></li>
        <li><Link href="#">BOOTSTRAP</Link></li>
        <li><Link href="#">Photoshop</Link></li>
        <li><Link href="#">MS OFFICE</Link></li>
       
      </ul>
      <ul className="box">
        <li className="link_name">PROGRAMMING LANGUAGES</li>
        <li><Link href="#">JavaScript</Link></li>
        <li><Link href="#">JAVA</Link></li>
        <li><Link href="#">C PROGRAMMING</Link></li>

      
      </ul>
      <ul className="box input-box">
        
      </ul>
    </div>
  </div>
  <div className="bottom-details">
    <div className="bottom_text">
      <span className="copyright_text">Copyright © 2023 <a href="#">Solution Nepal.</a>All rights reserved</span>
      <span className="policy_terms">
        <Link href="#">Privacy policy</Link>
        <Link href="#">Terms &amp; condition</Link>
      </span>
    </div>
  </div>
</footer>

   </>
  )
}

export default Footer
