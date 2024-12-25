import React from 'react'
import './CSS/LoginSignUp.css'

const LoginSignUp = () => {
  return (
    <div className='loginSignup'>
      <div className='loginSignup-container'>
        <h1>Sign Up</h1>
        <div className='signup-fields'>
          <input type='text' placeholder='Your Name'/>
          <input type='email' placeholder='Enter your email'/>
          <input type='password' placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='loginSignup-login'>Already have an account? <span>Login Here</span> </p>
        <div className='loginSignup-agree'>
          <input type='checkBox' name='jo b hoga' id=''/>
          <p> By Continuing, i agree to the terms of use & privacy police.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp
