import React, { useState } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import './style.css'

const Login = ({ dispatch, auth }) => {
  const [data, setdata] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    const { value, name } = e.target
    setdata({ ...data, [name]: value })
  }
  console.log(auth)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type: "auth/CHANGE_NAME",
      payload: { name: "firstname" }
    })
  }
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
            <input type="email" className="form-control" id="inputEmail4" />

            <label for="inputPassword4" className="down form-label">Password</label>
            <input type="password" className="form-control" id="inputPassword4" />
          </form>
          <button type="button" className="btn btn-primary">log in</button>
        </div>
      </div>
      <div className='footer'>
        <p>Don't have an account? <a href='/signup' className='forgot'>Register</a></p>
        <p><a href='' className='forgot'>Forgot password?</a></p>
      </div>
    </div>
  )
}

const mapStateToProp = ({ auth, dispatch }) => ({
  dispatch,
  login: auth
})


export default Login



