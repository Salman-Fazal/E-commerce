import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionBox'>
      <div className='descriptionBox-navigate'>
      <div className='descriptionBox-nav-box'>Description</div>
      <div className='descriptionBox-nav-box fade'>Reviews
      (123)</div>
      </div>
      <div className='descriptionBox-description'>
        <p>
        An e-commerce website is an online platform designed to facilitate the buying and selling of products or services over the internet. It provides a digital storefront where businesses showcase their offerings, allowing customers to browse, select, and purchase items from the convenience of their devices. E-commerce websites often include features such as product catalogs, secure payment gateways, and user accounts, enhancing the shopping experience with options for product reviews, customer support, and order tracking. 
        </p>
        <p>
        By streamlining transactions and offering personalized experiences, e-commerce platforms make it easier for businesses to reach a global audience and cater to diverse customer needs.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox;
