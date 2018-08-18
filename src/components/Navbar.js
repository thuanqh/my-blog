import React from 'react';
import Link from 'gatsby-link';

const Navbar = () => (
    <nav className="navbar is-transparent is-fixed-top" id="topnav">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
              <img src="https://avatars2.githubusercontent.com/u/1658423?s=40&v=4" alt="Logo" />
              Jason Quach (Huu Thuan)
          </Link>
          <span className="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item is-active">
              Home
            </a>
            <a className="navbar-item">
              Tutorials
            </a>
            <a className="navbar-item">
              Blog
            </a>
            <a className="navbar-item">
              About Me
            </a>
            <a className="navbar-item">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
)

export default Navbar
