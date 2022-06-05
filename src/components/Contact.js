import React from 'react'
import Page from './Page';

export default function Contact() {
  const pageInfo = {
    heading: "Contact Us",
    subheading: "",
    navLinks:{
      contact: "Contact Us"
    }
  };
  const content= (
    <>
<section className="content">
  
  {/* Default box */}
  <div className="card">
    <div className="card-body row">
        <div className="col-12 text-center align-items-center">
          <h2>SHRI Pvt. Ltd.</h2>
          <p >I-9, TIDES, IIT Roorkee, Roorkee-247667<br />
            Phone: +91-7599372457
          </p>
        </div>
      </div>
      <div className="card-body row">
      <div className="col-md-6 col-sm-12 my-5">
        <div id="map-container-google-1" className="z-depth-1-half map-container" style={{height: 500}}>
          <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} style={{border: 0}} allowFullScreen />
        </div>
      </div>
      <div className="col-md-6 col-sm-12 my-5">
        <div className="form-group">
          <label htmlFor="inputName">Name</label>
          <input type="text" id="inputName" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail">E-Mail</label>
          <input type="email" id="inputEmail" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="inputSubject">Subject</label>
          <input type="text" id="inputSubject" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="inputMessage">Message</label>
          <textarea id="inputMessage" className="form-control" rows={4} defaultValue={""} />
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-primary" defaultValue="Send message" />
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );


  return (
    <Page pageInfo={pageInfo} content={content} />
  )
}
