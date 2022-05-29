import "./App.css";


import Header from "./components/Header";
import Footer from "./components/Footer";

import AdminHeader from "./components/AdminHeader";
import AdminFooter from "./components/AdminFooter";

import Menu from "./components/Menu";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Home from "./components/Home";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {

  if (true) {
    document.body.classList.add(
      'hold-transition',
      'layout-top-nav',
      'layout-footer-fixed'
    );
    return (
        <Router>
          <Header title="EEW Server" page="Home" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="users/*" element={<Header />} />
          </Routes>
          <Footer />
        </Router>
        
      );
  } 
  else 
  {
    document.body.classList.add(
      'hold-transition',
      'sidebar-mini',
      'layout-fixed'
    );
    return (
     
      <div className="wrapper">
        <AdminHeader title="EEW Server" page="Home" />
        <Menu />
        
        <Dashboard />
        <AdminFooter />
      </div>
    );
  }

}




  
export default App;
