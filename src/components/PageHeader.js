import React from 'react'
import { Link } from "react-router-dom";

export default function PageHeader(props) {
    
    function isLast(index) {
        return index === Object.keys(props.pageInfo.navLinks).length - 1;
    }


  return (
      
      <div className="content-header">
        <div className="container">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">
                {props.pageInfo.heading} <small>{props.pageInfo.subheading} </small>  
              </h1>
            </div>
            
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"> <Link to="/">Home</Link></li>
                { Object.keys(props.pageInfo.navLinks).map((crumb, ci) => {
                  return isLast(ci) ? (
                    <li key={ci} className="breadcrumb-item active">{props.pageInfo.navLinks[crumb]}</li>
                  ) : (
                    <li key={ci} className="breadcrumb-item">
                      <Link to={crumb}>{props.pageInfo.navLinks[crumb]}</Link>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
  )
}
