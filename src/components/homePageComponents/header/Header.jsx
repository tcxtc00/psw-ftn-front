import React from 'react'
import './header.css'
import { authService } from '../../../api/AuthService'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem("user"));
  const role = user.data.role;

  const onLogout = (e) => {
    e.preventDefault()
    authService.logout();
    navigate('/registration')
  }

  const onServicesClick = (e) => {
    navigate('/#services')
  }
  const onAboutClick = (e) => {
    navigate('/#about')
  }
  const onDoctorsClick = (e) => {
    navigate('/#doctors')
  }
  const onBookClick = (e) => {
    navigate('/#book')
  }
  const onUsersClick = (e) => {
    navigate('/#users')
  }
  const onReviewClick = (e) => {
    navigate('/#review')
  }

  return (
    <header className="header">
      <a href="#" className="logo">
        <i className="fas fa-heartbeat"></i> Greencare.
      </a>

      <nav className="navbar">
        <a href="/#home">Home</a>
        <a href="/#services" onClick={onServicesClick}>Services</a>
        <a href="/#about" onClick={onAboutClick}>About</a>
        <a href="/#doctors" onClick={onDoctorsClick}>Doctors</a>
        { role !== "Admin" ? <a href="/#book" onClick={onBookClick}> Book</a> : null }
        { role === "Admin" ? <a href="/users" onClick={onUsersClick}> Users</a> : null }
        { role === "Doctor" || role === "Admin" ? null : <a href="/my-check-ups">My Check Ups</a>}
        { role === "Doctor"? <a href="/pharmacy">Pharmacy</a> : null}
        <a href="/#review" onClick={onReviewClick}>Review</a>
        <a href="" onClick={onLogout}>Logout</a>
      </nav>

      <div id="menu-btn" className="fas fa-bars"></div>
    </header>
  )
}

export default Header
