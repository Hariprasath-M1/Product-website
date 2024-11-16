import React from 'react';
import './css/Navbar.css';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav>
        <div className='logo'>
          <img src="logo3.png" alt="logo" />
          <span className='title'>E-Com</span>
        </div>
        <div className='navlinks'>
          <Link to="/" className='link'>HOME</Link>
          <NavLink to="/about" className='link'>ABOUT</NavLink>
          <Link to="/product" className='link'>PRODUCTS</Link>
          <NavLink to="/cart" className='link'>CART</NavLink>
        </div>
        <div className='login'>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
