import React from "react";
import { useState } from "react";
import Page from "./Page";


export default function Login(props) {

  const [data, setData]=useState(
    {
      username: "",
      password: ""
    }
  );
  const inputEvent = (event)=>{
    const {name,value} =event.target;
    setData((preVal)=>{
      return{
        ...preVal,
        [name]: value
      }
    })
  }

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

  const [loggedIn, setLogin]=useState("false");


  const loginCheck= ()=>{
    if(data.username==="govind" && data.password==="Govind@123")
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
 
  const pageInfo = {
    heading: "Login",
    subheading: "",
    navLinks:{
      login:"Login"
    }
  };
  const content= (
<div className="d-flex justify-content-center py-5">
<div className="login-box  ">
        <div className="card card-outline card-primary ">
          <div className="card-body ">
            <p className="login-box-msg">Login in to Dashboard</p>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  name="username"
                  value={data.username}
                  onChange={inputEvent}
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
                  name="password"
                  value={data.password}
                  onChange={inputEvent}
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
  
  );

  return (
    <div>
      <Page pageInfo={pageInfo} content={content} alert={alert}/>


     
     </div>
     
  );
}
