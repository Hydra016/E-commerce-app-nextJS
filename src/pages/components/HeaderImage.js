import React from 'react'
import Link from 'next/link'

function HeaderImage() {
  return (
    <div className='ad-container'>
    <div className='heading-container'>
    <h2 className='heading-main'>Summer<span className='heading-sub'>Collection</span></h2>
    <span>get upto <span className='discount'>50%</span> off</span>
    <Link className='shop_now' href='/'><span className='shop_now_text'>Shop Now</span></Link>
    </div>
    <img src='https://wallpaperaccess.com/full/388706.jpg' alt='sub-image' className='nav-image'/>
    </div>
  )
}

export default HeaderImage