// import React, { useState } from 'react'
// import { connect } from 'react-redux'
// import "./style.css";

// const Login = ({ login, dispatch }) => {
//   const [state, setstate] = useState(0)
//   const sayHello = (val) => {
//     setstate(val++)
//     dispatch({
//       type: "auth/CHANGE_NAME",
//       payload: { name: val }
//     })
//   }

//   return (
//     <div className="cl">
//       Welcome to login {login.name}
//       <button onClick={() => sayHello(state)}>Change My Name</button>
//     </div>
//   )
// }

// const mapStateToProp = ({ auth, dispatch }) => ({
//   dispatch,
//   login: auth
// })

// export default connect(mapStateToProp)(Login)


import React from 'react';
// import { Link } from 'react-router-dom';
import "./style.css";

const Login = () => {
  return (
    <div id='background'>
    
        <div className='header'> 
          <i className="piggy fas fa-piggy-bank"></i> 
          <h2>Cubevest-lite</h2>
        </div>

       <div className='form-space'>
           <div className='form-space-header'>
               <h1>Login to your account</h1>
               <p>securely login to your Cubevest-Lite</p>
           </div>

           <div className='form-input'>
           <form className='form-input-email-password'>
                       
                    <label for="inputEmail4" className="form-label">Email or Phone Number</label>
                    <input type="email" className="form-control" id="inputEmail4"/>
                       
                    <label for="inputPassword4" className="down form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4"/>        
            </form>
            <button type="button" className="btn btn-primary">log in</button>
           </div>
         </div>
                  <div className='footer'>
                       <p>Don't have an account? <a href="/signup" className='forgot'>Register</a></p>
                       <p><a href='' className='forgot'>Forgot password?</a></p>
                </div>
    </div>
  )
}

export default Login;



{/* <nav className="navbar navbar-fixed navbar-expand-lg navbar-light shadow bg-white">
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
</nav> */}