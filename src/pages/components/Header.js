import React from 'react'
import Link from 'next/link'
import HeaderImage from './HeaderImage'

function Header({dontShowHeaderImg, aboutHeader}) {
 
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
    <nav className={`navbar ${dontShowHeaderImg ? 'navbar-links-border' : null}`}>
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
    {
      dontShowHeaderImg ? null : <HeaderImage />
    }
    </>
  )
}

export default Header

