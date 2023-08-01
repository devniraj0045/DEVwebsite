import React from 'react'
import { FaFacebookMessenger,FaLinkedin, FaWhatsapp,FaPhoneAlt} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import rahul from '../rahul.png'


const Team = () => {
  return (
  <>

<section className="our-team">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h2>Our Team Section</h2>
        <p></p>
      </div>
    </div>
    <hr className="mb-5 mt-4" />
    <div className="row">
      <div className="col-lg-3 col-md-6">
        <div className="member">
          <img src={rahul} className="img-fluid" alt />
          <div className="member-info">
            <div className="member-detail">
              <h4>Bigraj Sunuwar</h4>
              <span>Graphic Designer</span>
            </div>
            <div className="social">
           
        <a href='ff' className=''><FaFacebookMessenger /></a>
        <a href='ff' className=''><FaLinkedin /></a>
        <a href='ff' className=''><FaWhatsapp/></a>
        <a href='ff' className=''><FaPhoneAlt /></a>
        <br/> <span><Link>Aboutme</Link></span> 
      
      
            </div>
           
            
          </div>
        
        </div>
   <p></p>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="member">
          <img src={rahul} className="img-fluid" alt />
          <div className="member-info">
            <div className="member-detail">
              <h4>Kshittiz Chaudhary</h4>
              <span> Flutter Developer </span>
            </div>
            <div className="social">
           
        <a href='ff' className=''><FaFacebookMessenger /></a>
        <a href='ff' className=''><FaLinkedin /></a>
        <a href='ff' className=''><FaWhatsapp/></a>
        <a href='ff' className=''><FaPhoneAlt /></a>
        <br/> <span><Link>Aboutme</Link></span> 
      
      
            </div>
           
            
          </div>
        
        </div>
   <p></p>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="member">
          <img src={rahul} className="img-fluid" alt />
          <div className="member-info">
            <div className="member-detail">
              <h4>Suresh Rolaya</h4>
              <span>Web Developer </span>
            </div>
            <div className="social">
           
        <a href='ff' className=''><FaFacebookMessenger /></a>
        <a href='ff' className=''><FaLinkedin /></a>
        <a href='ff' className=''><FaWhatsapp/></a>
        <a href='ff' className=''><FaPhoneAlt /></a>
        <br/> <span><a href="https://rokayasuresh.github.io/MyPersonalPortfolio/">Aboutme</a></span> 
      
      
            </div>
           
            
          </div>
        
        </div>
   <p></p>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="member">
          <img src={rahul} className="img-fluid" alt />
          <div className="member-info">
            <div className="member-detail">
              <h4>Nikesh Deula</h4>
              <span>Web Developer</span>
            </div>
            <div className="social">
           
        <a href='ff' className=''><FaFacebookMessenger /></a>
        <a href='ff' className=''><FaLinkedin /></a>
        <a href='ff' className=''><FaWhatsapp/></a>
        <a href='ff' className=''><FaPhoneAlt /></a>
        <br/> <span><a href="https://rokayasuresh.github.io/MyPersonalPortfolio/">Aboutme</a></span> 
      
      
            </div>
           
            
          </div>
        
        </div>
   <p></p>
      </div>

    </div>
    </div>
    </section>







  </>
  

  )
}

export default Team
