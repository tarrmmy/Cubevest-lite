import React from 'react'
import './Signup.css'
const Signup = () => {
  return (
    <div id="head">

     <div className="pig">
      <i className="piggy fas fa-piggy-bank"></i> 
      <h2 id="cube">Cubevest-lite</h2>
     </div>
     
     {/* container starts */}
      <p id="container">
        <div id="create">
          <h3>Create a Secure Account</h3>
          <h4>Welcome to the future of Savings & Investment</h4>
        </div>
        <div className="Name">
          <h5>Full Name</h5>
          <input type="text" class="form-control" id="floatingInput" placeholder="Full Name"/>
        </div>
      
        <div className="Name">
          <h5>Email Address</h5>
          <input type="email" class="form-control" id="floatingInput" placeholder="Email Address"/>
        </div>

        <div className="Name">
          <h5>Phone Number</h5>
          <input type="text" class="form-control" id="floatingInput" placeholder="Phone Number"/>
        </div>  

        {/* <div className="Name">
          <h5>Password</h5>
          <input type="email" class="form-control" id="floatingInput" placeholder="Password"/>
        </div> */}

        <div className="Name">
          <h5>Password</h5>
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
        </div>

        <div className="Name">
          <h5>Referrer Phone or Promo Code(Optional)</h5>
          <input type="text" class="form-control" id="floatingInput" placeholder="Referrer Phone or Promo code"/>
        </div>
        <div>
          <h5 className="How">How Did You Hear About Us?(Optional)</h5>
          <select class="form-select" aria-label="Default select example" id="select">
            <option className="option" selected>Click To Select</option>
            <option value="1">Facebook</option>
            <option value="2">Twitter</option>
            <option value="3">Whatsapp</option>
            <option value="4">Instagram</option>
            <option value="5">Family/Friend/Co-worker</option>
            <option value="6">Google Playstore</option>
            <option value="7">Online Blog</option>
            <option value="8">Local Newspapers</option>
            <option value="9">Others</option>
          </select>
        </div>

        <button>CREATE ACCOUNT</button>
     </p>
     {/* container ends */}

     <h4 className="bottom">Already have an account? <a className="log" href="">Log in</a></h4>
    </div>
  )
}

export default Signup;
