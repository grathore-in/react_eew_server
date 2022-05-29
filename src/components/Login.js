import React from "react";
import { useState } from "react";
import Alert from './Alert';


export default function Login(props) {

  const[alert, setAlert]=useState(null);
    const showAlert = (title, message, type)=>{
        setAlert({
            title:title,
            message: message,
            type: type
        })
        setTimeout (()=>{
          setAlert(null);
        }, 1500)
    }

  const [username, setUsername]=useState("");
  const [password, setPassword]=useState("");
  const [loggedIn, setLogin]=useState("false");

  const upadteUsername = (event)=> {
    setUsername(event.target.value);
  }

  const upadtePassword = (event)=> {
    setPassword(event.target.value);    
  }

  const loginCheck= ()=>{
    if(username==="govind" && password==="Govind@123")
    {
      setLogin("True");
      showAlert("Logged In","Proceeding for Dashboard.","success");
    }
    else
    {
      setLogin("False");
      showAlert("Failed","Username && Password are not matching.","warning");
    }
  }
 
 
  return (
    <div className="content-wrapper">

<div className="content-header">
    <div className="container">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0"> Top Navigation <small>Example 3.0</small></h1>
        </div>{/* /.col */}
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Layout</a></li>
            <li className="breadcrumb-item active">Top Navigation</li>
          </ol>
        </div>{/* /.col */}
      </div>{/* /.row */}
    </div>{/* /.container-fluid */}
  </div>
  {/* /.content-header */}
  {/* Main content */}
  <div className="content">
    <div className="container">
      <div className="row">


     <Alert alert={alert} />
      <div className="login-box ">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <a href="/" className="h1">
              <b>EEW</b>Server
            </a>
          </div>
          <div className="card-body">
            <p className="login-box-msg">Login in to Dashboard {loggedIn}</p>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={upadteUsername}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={upadtePassword}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block" onClick={loginCheck}>
                    Sign In
                  </button>
                </div>
              </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  );
}
