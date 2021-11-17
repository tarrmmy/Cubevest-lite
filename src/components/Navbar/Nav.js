
import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <div>
         <nav className="navbar fixed-top navbar-expand-lg navbar-light shadow-sm">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Cubevest-lite</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-2">
      <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Save
    </a>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
      <li><a className="dropdown-item" href="/regular">Regular savings</a></li>
      <li><a className="dropdown-item" href="/safe">Safe to loan</a></li>
      <li><a className="dropdown-item" href="/target">Target savings</a></li>
    </ul>
    </li> 
        <li className="nav-item">
          <a className="nav-link" href="/invest">Invest</a>
        </li>
        <li className="nav-item">
          <a className="nav-link black" aria-current="page" href="/stories">Stories</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='/faq'>FAQs</a>
        </li>
      </ul>

      <div className='right'>
          <button className='sign'>Sign in</button>
          <button className='create'>Create free account</button>
      </div>


    </div>

        



  </div>
</nav> 
        </div>
    )
}

export default Nav
