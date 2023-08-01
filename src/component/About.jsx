import React from 'react';
import { Routes, Route } from 'react-router-dom';
import rahul from '../rahul.png'

const About = () => {
  return (
    <>


      <div>
        <div className="container text-center">
          <div className="row">
            <div className="col-6">
              <div className="card hel" style={{ width: '25rem' }}>
                <img src={rahul} className="card-img-top" alt="img" />
                <div className="card-body">
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
            <div className="col-6">


              <div>
                <label htmlFor="HTML" className="label">HTML</label>
                <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                  <div className="progress-bar bg-success" style={{ width: '80%' }} />
                </div>
                <label htmlFor="CSS">CSS</label>
                <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                  <div className="progress-bar bg-info" style={{ width: '70%' }} />
                </div>
                <label htmlFor="JS">JavaScript</label>
                <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                  <div className="progress-bar bg-warning" style={{ width: '40%' }} />
                </div>
                <label htmlFor="Flutter">Flutter</label>
                <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                  <div className="progress-bar bg-danger" style={{ width: '30%' }} />
                </div>
                <label htmlFor="Laravel | PHP">Laravel | PHP</label>
                <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                  <div className="progress-bar bg-success" style={{ width: '50%' }} />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
 







    </>



  )
}

export default About;