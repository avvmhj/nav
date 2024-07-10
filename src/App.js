import { useState } from 'react';
import './App.css';


function App() {
  const [showNavLinks, setShowNavLinks] = useState(false);

    const toggleNavLinks = () => {
        setShowNavLinks(!showNavLinks);
    };
  return (
  <>
          <nav className="navbar">
            <div className="nav-logo">Logo</div>
            <ul className={`nav-links ${showNavLinks ? 'nav-active' : ''}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="nav-toggle" onClick={toggleNavLinks}>
              BUTTON
            </div>
    
        
        </nav>
        

  </>
  );
}

export default App;

