import React from 'react';
import img from '../img/1.jpg';


export const HeaderUsers = () => {
  return <>
    <div className="tm-top-header">
      <div classNameName="container">
        <div className="row">
          <div className="tm-top-header-inner">
            <div className="tm-logo-container">
              <img src="img/logo.png" alt="Logo" className="tm-site-logo" />
              <h1 className="tm-site-name tm-handwriting-font">Touch Menu</h1>
            </div>
            <div className="mobile-menu-icon">
              <i className="fa fa-bars"></i>
            </div>
            <nav className="tm-nav">
              <ul>
                <li><a href="/home" className="active">Home</a></li>
                <li><a href="/cart">Cart</a></li>
                {/* <li><a href="/menu">Menu</a></li> */}
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </>
}