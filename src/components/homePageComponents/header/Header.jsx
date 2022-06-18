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

  const onHomeClick = () => {
    navigate('/home/#home')
  }

  const onServicesClick = () => {
    navigate('/home/#services')
  }
  const onAboutClick = () => {
    navigate('/home/#about')
  }
  const onDoctorsClick = () => {
    navigate('/home/#doctors')
  }
  const onBookClick = () => {
    navigate('/home/#book')
  }
  const onUsersClick = () => {
    navigate('/home/#users')
  }
  const onReviewClick = () => {
    navigate('/home/#review')
  }

  const onLogoClick = () => {
    navigate('/home/#home')
  }

  return (
    <header className="header">
      <a href="/home/#home" onClick={onLogoClick} className="logo">
        <i className="fas fa-heartbeat"></i> Greencare.
      </a>

      <nav className="navbar">
        <a  href="/home/#home" onClick={onHomeClick}>Home</a>
        <a href="/home/#services" onClick={onServicesClick}>Services</a>
        <a href="/home/#about" onClick={onAboutClick}>About</a>
        <a href="/home/#doctors" onClick={onDoctorsClick}>Doctors</a>
        { role !== "Admin" ? <a href="/home/#book" onClick={onBookClick}> Book</a> : null }
        { role === "Admin" ? <a href="/users" onClick={onUsersClick}> Users</a> : null }
        { role === "Doctor" || role === "Admin" ? null : <a href="/my-check-ups">My Check Ups</a>}
        { role === "Doctor"? <a href="/pharmacy">Pharmacy</a> : null}
        <a href="/home/#review" onClick={onReviewClick}>Review</a>
        <a href="" onClick={onLogout}>Logout</a>
      </nav>

      <div id="menu-btn" className="fas fa-bars"></div>
    </header>
  )
}

export default Header
