import React from 'react'
import Link from 'next/link'

function Header() {
 
  return (
    <>
    <div className='details-container'>
      <div className='details-container-first'>
      <div className='details-detail location'>
      <img className='details-icon' src='https://cdn-icons-png.flaticon.com/128/2838/2838912.png' />
      <span className='detail-text'>Brīvības gatve 372, Riga LV-1006</span>
      </div>
      <div className='details-detail'>
        <img className='details-icon' src='https://cdn-icons-png.flaticon.com/128/159/159832.png'/>
        <span className='detail-text'>+371-26-691-517</span>
      </div>
      </div>
      <div className='details-container-first'>
      <Link href='/' className='details-detail'>
      <span className='socials'>follow us on socials</span>
      <img className='details-icon' src='https://cdn-icons-png.flaticon.com/128/1968/1968750.png' />
      </Link>
      </div>
    </div>
    <nav className='navbar'>
        <div>
            <img src='https://cdn-icons-png.flaticon.com/128/4507/4507860.png' className='logo' />
        </div>
        <div className='navbar-links'>
            <Link className='navbar-link' href={'/'}>Home</Link>
            <Link className='navbar-link' href={`/men's clothing`}>Men</Link>
            <Link className='navbar-link' href={`/women's clothing`}>Women</Link>
            <Link className='navbar-link' href={'/jewelery'}>Jewelery</Link>
            <Link className='navbar-link' href={'/electronics'}>Electronics</Link>
            <Link className='navbar-link' href={'/About'}>About</Link>
        </div>
        <Link className='cart-container' href='/'>
            <span className='cart-text'>Cart/0.0$</span>
            <img src='https://cdn-icons-png.flaticon.com/128/649/649931.png' className='cart-icon' />
        </Link>
    </nav>
    <div className='ad-container'>
    <div className='heading-container'>
    <h2 className='heading-main'>Summer<span className='heading-sub'>Collection</span></h2>
    <span>get upto <span className='discount'>50%</span> off</span>
    <Link className='shop_now' href='/'><span className='shop_now_text'>Shop Now</span></Link>
    </div>
    <img src='https://wallpaperaccess.com/full/388706.jpg' alt='sub-image' className='nav-image'/>
    </div>
    </>
  )
}

export default Header

