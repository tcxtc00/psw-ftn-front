import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="logo">
        <i className="fas fa-heartbeat"></i> Greencare.
      </a>

      <nav className="navbar">
        <a href="/#home">Home</a>
        <a href="/#services">Services</a>
        <a href="/#about">About</a>
        <a href="/#doctors">Doctors</a>
        <a href="/#book" className="book-btn">
          Book
        </a>
        <a href="/my-check-ups">Check Ups</a>
        <a href="/#review">Review</a>
      </nav>

      <div id="menu-btn" className="fas fa-bars"></div>
    </header>
  )
}

export default Header
