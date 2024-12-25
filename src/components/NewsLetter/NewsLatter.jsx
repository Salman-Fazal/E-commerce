import React from 'react'
import './NewsLetter.css'
const NewsLatter = () => {
  return (
 
    <div className='newsletter'>
      <h1> GET Exclusive Offers On Your Email </h1>
      <p>Subscribe to our newsletter</p>
      <div>
        <input type='email' placeholder='Your Email id'/>
        <button>Subscribe</button>
      </div>
    </div>

  )
}

export default NewsLatter
