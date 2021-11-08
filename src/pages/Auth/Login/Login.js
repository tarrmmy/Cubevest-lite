import React, { useState } from 'react'
import { connect } from 'react-redux'
import "./style.css";

const Login = ({ login, dispatch }) => {
  const [state, setstate] = useState(0)
  const sayHello = (val) => {
    setstate(val++)
    dispatch({
      type: "auth/CHANGE_NAME",
      payload: { name: val }
    })
  }
  return (
    <div className="cl">
      Welcome to login {login.name}
      <button onClick={() => sayHello(state)}>Change My Name</button>
    </div>
  )
}

const mapStateToProp = ({ auth, dispatch }) => ({
  dispatch,
  login: auth
})

export default connect(mapStateToProp)(Login)
