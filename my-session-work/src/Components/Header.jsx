import React from 'react';
import '../styles/Header.scss'
import  logo from '../Logos/Skeleton png.png'
import  logo1 from '../Logos/PNG black fill.png'
import  logo2 from '../Logos/PNG black skeleton.png'



class Header extends React.Component{
render() {
    return (
      <div>
        <nav className="top-menu">
        <a className="navbar-logo" href="/home"><img src={logo1} height={'64px'} width={'64px'}></img></a>
        <ul className="menu-main">
          <li><a href="/home">Home</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/order">Order</a></li>
          <li><a href="my-session-work/src/Components/Header">Shop</a></li>
          <li><a href="my-session-work/src/Components/Header">Gallery</a></li>
          <li><a href="my-session-work/src/Components/Header">Contact</a></li>
        </ul>
      </nav>
    </div>
    );
  }
}
  export default Header;