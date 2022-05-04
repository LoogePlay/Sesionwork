import React from 'react';
import '../styles/Header.scss'
import  logo from'../Logos/Skeleton png.png'
import  logo1 from'../Logos/PNG black fill.png'
import  logo2 from'../Logos/PNG black skeleton.png'




function Header() {
    return (
      <div>
        <nav className="top-menu">
        <a className="navbar-logo" href="/home"><img src={logo1} height={'64px'} width={'64px'}></img></a>
        <ul className="menu-main">
          <li><a href="/home">Home</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/order">Order</a></li>
          <li><a href="">Shop</a></li>
          <li><a href="">Gallery</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
    </div>
    );
  }
  
  export default Header;