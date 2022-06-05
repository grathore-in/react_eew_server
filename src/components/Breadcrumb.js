import React from "react";

import { Link } from "react-router-dom";

export default function Breadcrumb(props) {
  function isLast(index) {
    return index === props.crumbs.length - 1;
  }

  return (
    <div>
      <div className="content-header">
        <div className="container">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">
                {" "}
                {props.heading} <small>{props.subheading} </small>
              </h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                {props.crumbs.map((crumb, ci) => {
                  return isLast(ci) ? (
                    <li className="breadcrumb-item active">{crumb}</li>
                  ) : (
                    <li className="breadcrumb-item">
                      <Link to={crumb}>{crumb}</Link>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
