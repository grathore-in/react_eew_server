import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="main-footer fixed-bottom ">
       <div className="container">
          <strong>
            Copyright © {(new Date().getFullYear())} <a href="https://shriseismic.com">Seismic Hazard and Risk Investigations</a>. 
          </strong> 
          <div className="float-right d-none d-sm-inline ">
            Onsite EEW System
          </div>
       </div>
      </footer>
    </>
  )
}
