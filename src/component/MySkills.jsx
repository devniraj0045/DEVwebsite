import React from 'react'
import { FcGlobe,FcPhoneAndroid,FcPicture,FcServices} from "react-icons/fc";
const Services = () => {
  return (
    <div>
      <section>
  <div className="row">
    <h2 className="section-heading">MY SKILLS</h2>
  </div>
  <div className="row">
    <div className="column">
      <div className="card">
        <div className="icon-wrapper">
       < FcGlobe />
        </div>
        <h3>Front-End Development</h3>
        <p>
        Bringing websites to life with interactive and intuitive front-end development.
        </p>
      </div>
    </div>
    <div className="column">
      <div className="card">
        <div className="icon-wrapper">
          <FcPhoneAndroid />
        </div>
        <h3>Android Development</h3>
        <p>
        Empowering the world with smarter apps, one download at a time
        </p>
      </div>
    </div>
    <div className="column">
      <div className="card">
        <div className="icon-wrapper">
          <FcPhoneAndroid  />
        </div>
        <h3>Flutter Development</h3>
        <p>
        Build beautiful apps with Flutter, the future of mobile development
        </p>
      </div>
    </div>
    <div className="column">
      <div className="card">
        <div className="icon-wrapper">
          < FcPicture />
        </div>
        <h3>Graphics Design</h3>
        <p>
        Design is not just what it looks like, it's how it works.
        attractive Design
        </p>
      </div>
    </div>
    <div className="column">
      <div className="card">
        <div className="icon-wrapper">
          <FcServices />
        </div>
        <h3>Domain & Hosting</h3>
        <p>
          
        Secure your online presence with reliable domains and hosting solutions.
        </p>
      </div>
    </div>
    <div className="column">
      <div className="card">
        <div className="icon-wrapper">
          <FcGlobe />
        </div>
        <h3> Full Web Development</h3>
        <p>
        Transforming your ideas into functional and captivating websites.
        </p>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Services
