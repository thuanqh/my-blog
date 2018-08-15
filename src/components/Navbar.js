import React from 'react';
import Link from 'gatsby-link';

const Navbar = () => (
  <section className="hero is-medium is-primary is-bold">
  
    <div className="hero-head">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item">
              <Link to="/">
                <img src="https://avatars2.githubusercontent.com/u/1658423?s=40&v=4" alt="Logo" />
                Jason Quach (Huu Thuan)
              </Link>
            </a>
            <span className="navbar-burger burger" data-target="navbarMenuHero">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHero" className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item is-active">
                Home
              </a>
              <a className="navbar-item">
                Category
              </a>
              <a className="navbar-item">
                About Me
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title">
          Welcome to My Tutorials.
        </h1>
        <h2 className="subtitle">
          A few things to share with you...
        </h2>
      </div>
    </div>
  </section>
)

export default Navbar
