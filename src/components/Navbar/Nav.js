
import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <div>
         <nav className="navbar navbar-fixed navbar-expand-lg navbar-light shadow bg-white">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Cubevest-lite</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Save
    </a>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
      <li><a className="dropdown-item" href="#">Regular savings</a></li>
      <li><a className="dropdown-item" href="#">Safe to loan</a></li>
      <li><a className="dropdown-item" href="#">Target savings</a></li>
    </ul>
    </li> 
        <li className="nav-item">
          <a className="nav-link" href="#">Invest</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Stories</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='#'>FAQs</a>
        </li>
      </ul>
    </div>
  </div>
</nav> 
        </div>
    )
}

export default Nav