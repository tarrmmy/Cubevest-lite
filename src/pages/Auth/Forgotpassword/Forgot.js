
import './Forgot.css'
import { connect } from 'react-redux';
import React, { useState } from 'react';

const mapStateToProp = ({ auth, dispatch }) => ({
    dispatch,
    auth
  })
  
const Forgot = ({dispatch , auth}) => {
    const [data, setdata] = useState({email:''})

  const handleChange =(e)=>{
    const {value , name} = e.target
    setdata({...data, [name]:value})
   
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type:"auth/FORGOT",
      payload:data
    })
  }
    return (
      <div className='body'>
        <div className='fort'>
          <div className='fort-header'>
            <h1>Forgot Password</h1>
            <p>Enter your email to reset your password</p>
          </div>
          <div className='form-input'>
            <form className='form-input-email-password' onSubmit={(e)=>handleSubmit(e)}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" name="email"   onChange={handleChange} class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
              </div>
                <button type="submit" className="butten">RESET PASSWORD</button>
            </form>
          </div>
        </div>

      </div>
    )
}

export default connect(mapStateToProp)(Forgot);
