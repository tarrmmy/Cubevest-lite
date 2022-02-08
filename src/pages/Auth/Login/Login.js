import React, { useState } from 'react';
import { connect } from 'react-redux';
import './style.css'

const mapStateToProp = ({ auth, dispatch }) => ({
  dispatch,
  auth
})

const Login = ({dispatch, auth}) => {
  const [data, setdata] = useState({email:'',password:''})

  const handleChange =(e)=>{
    const {value , name} = e.target
    setdata({...data, [name]:value})
   
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type:"auth/LOGIN",
      payload:data
    })
  }
  return (
    <div className='background'>
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
          <form className='form-input-email-password' onSubmit={(e)=>handleSubmit(e)}>
                      
            <label for="inputEmail4" className="form-label">Email or Phone Number</label>
            <input name="email" onChange={handleChange} type="email" className="form-control" id="inputEmail4"/>
                
            <label for="inputPassword4" className="down form-label">Password</label>
            <input name="password" onChange={handleChange} type="password" className="form-control" id="inputPassword4"/>        
            <button type="submit" className="btn btn-primary log">{auth.loading? 'loading...': 'login'}</button>
          </form>
        </div>
      </div>
        <div className='footer'>
          <p>Don't have an account? <a href="/signup" className='forgot'>Register</a></p>
          <p><a href='/Forgot' className='forgot'>Forgot password?</a></p>
        </div>
    </div>
  )
}

export default connect(mapStateToProp)(Login);



