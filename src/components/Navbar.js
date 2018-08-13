import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar is-transparent is-fixed-top">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Jason Quach (Huu Thuan)" style={{ width: '88px' }} />
          </figure>
        </Link>

        <a className="navbar-burger" role="button" data-target="navMenu" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-menu" id="navMenu">
        <div className="navbar-start">
          
        </div>
        <div className="navbar-end">
          <Link className="navbar-item" to="/about">
            About Me
          </Link>
          <Link className="navbar-item" to="/products">
            Products
          </Link>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar
