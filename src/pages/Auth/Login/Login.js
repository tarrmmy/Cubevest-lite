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
import './style.css'

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



