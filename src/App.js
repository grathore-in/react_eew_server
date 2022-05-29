import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Login from "./components/Login";



function App() {

  if (true) {
    return (
       <Login/>
      );
  } else {
    return (
      <div className="wrapper">
        <Header title="EEW Server" page="Home" />
        <Menu />
        
        <Dashboard />
        <Footer />
      </div>
    );
  }
}
export default App;
