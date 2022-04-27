import React from 'react';
import '../styles/Header.scss'




function Header() {
    return (
      <div>
        <nav className="top-menu">
        <a className="navbar-logo" href="/home"><img src="https://html5book.ru/wp-content/uploads/2017/04/lily-logo.png"></img></a>
        <ul className="menu-main">
          <li><a href="/home">Home</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="">Story</a></li>
          <li><a href="">Shop</a></li>
          <li><a href="">Gallery</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
    </div>
    );
  }
  
  export default Header;