import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import AdminHeader from "./components/AdminHeader";
import AdminFooter from "./components/AdminFooter";

import Menu from "./components/Menu";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";
import Help from "./components/Help";
import Contact from "./components/Contact"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
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
              <Route path="/about" element={<About />} />
              <Route path="/help" element={<Help  />} />
              <Route path="/contact" element={<Contact  />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to ="/" />}/>
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
