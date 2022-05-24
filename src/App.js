
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  return (
    <div className='wrapper'>
      <Header title="EEW Server" page="Home"/>
      <Menu/>
      <Dashboard/>
      <Footer/>
    </div>
  );
}
export default App;
