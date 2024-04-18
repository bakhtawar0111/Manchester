import React from "react";
import Logo from './img/Logo.png'

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg" style={{backgroundColor:"rgba(236,50,55,255)"}}>
  <div className="container-fluid ">
    <a href="/"><img src={Logo} alt="Logo" width="125" height="55"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/Manchester" >Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/Menu" onClick={props.handleMenuClick}>Menu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/Contact Us" onClick={props.handleContactClick}>Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}
