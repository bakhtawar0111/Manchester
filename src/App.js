import './App.css';
import Intro from './components/Intro';
import Menu from './components/Menu';
import Navbar from './components/Navbar';

function App() {
  const handleMenuClick=()=>{
    const Menu=document.getElementById("Menu")
    Menu.scrollIntoView({behavior:"smooth"})
  }
  const handleContactClick=()=>{
    const Contact=document.getElementById("Contact")
    Contact.scrollIntoView({behavior:"smooth"})
  }
  return (
    <>
      <Navbar handleMenuClick={handleMenuClick} handleContactClick={handleContactClick}/>
      <Intro/>
      <Menu/>
    </>
  );
}

export default App;
