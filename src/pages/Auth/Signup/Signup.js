import './Signup.css'
import { connect } from 'react-redux';
import React, { useState } from 'react';
//  import { Router } from 'react-router'


const mapStateToProp = ({ auth, dispatch }) => ({
  dispatch,
  auth
})
const Signup = ({dispatch, auth}) => {
  const [data, setdata] = useState({email:'',password:'',first_name:'',bvn:'', last_name:'', middle_name:'', phone_no:''})

  const handleChange =(e)=>{
    const {value , name} = e.target
    setdata({...data, [name]:value})
   
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type:"auth/SIGNUP",
      payload:data
    })
  }
  return (
    <div id="head">
      <h2 id="cube">Cubevest-lite</h2>
      {/* container starts */}
      <p id="container">
        <div id="create">
          <h3>Create a Secure Account</h3>
          <h4>Welcome to the future of Savings & Investment</h4>
        </div>
        <form className='form-input-email-password' onSubmit={(e)=>handleSubmit(e)}>
          <div className="Name">
            <h5>first_name</h5>
            <input onChange={handleChange} name="first_name" type="text" class="form-control" id="floatingInput" placeholder="Full Name" />
          </div>

          <div className="Name">
            <h5>last_name</h5>
            <input onChange={handleChange} name="last_name" type="text" class="form-control" id="floatingInput" placeholder="Email Address" />
          </div>

          <div className="Name">
            <h5>middle_name</h5>
            <input onChange={handleChange} name="middle_name" type="text" class="form-control" id="floatingInput" placeholder="Phone Number" />
          </div>

          <div className="Name">
            <h5>email </h5>
            <input onChange={handleChange} name="email" type="email" class="form-control" id="floatingPassword" placeholder="Password" />
          </div>

          <div className="Name">
            <h5>phone_no</h5>
            <input onChange={handleChange} name="phone_no" type="text" class="form-control" id="floatingPassword" placeholder="Password" />
          </div>

          <div className="Name">
            <h5>bvn</h5>
            <input onChange={handleChange} name="bvn" type="text" class="form-control" id="floatingPassword" placeholder="Password" />
          </div>

          <div className="Name">
            <h5>password</h5>
            <input onChange={handleChange} name="password" type="password" class="form-control" id="floatingInput" placeholder="Referrer Phone or Promo code" />
          </div>

          <button type="submit" className="button">{auth.loading? 'Loading...':'CREATE ACCOUNT'}</button>
        </form>
      </p>
      {/* container ends */}

      <h4 className="bottom">Already have an account?<a className="log" href='/login'> Log in </a></h4>
    </div>
  )
}

export default connect(mapStateToProp)(Signup);
