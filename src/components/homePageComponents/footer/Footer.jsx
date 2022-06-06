import React from 'react'
import './Footer'
import './footer.css'

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>Quick links</h3>
            <a href="/#home">
              <i className="fas fa-chevron-right"></i> home
            </a>
            <a href="/#services">
              <i className="fas fa-chevron-right"></i> services
            </a>
            <a href="/#about">
              <i className="fas fa-chevron-right"></i> about
            </a>
            <a href="/#doctors">
              <i className="fas fa-chevron-right"></i> doctors
            </a>
            <a href="/#book">
              <i className="fas fa-chevron-right"></i> book
            </a>
            <a href="/#review">
              <i className="fas fa-chevron-right"></i> review
            </a>
          </div>

          <div className="box">
            <h3>Our Services</h3>
            <a href="/#services">
              <i className="fas fa-chevron-right"></i> dental care
            </a>
            <a href="/#services">
              <i className="fas fa-chevron-right"></i> message therapy
            </a>
            <a href="/#services">
              <i className="fas fa-chevron-right"></i> cardioloty
            </a>
            <a href="/#services">
              <i className="fas fa-chevron-right"></i> diagnosis
            </a>
            <a href="/#services">
              <i className="fas fa-chevron-right"></i> ambulance service
            </a>
          </div>

          <div className="box">
            <h3>Contact Info</h3>
            <a href="#">
              <i className="fas fa-phone"></i> +381-011-456-789
            </a>
            <a href="#">
              <i className="fas fa-phone"></i> +381-64-542-32-32
            </a>
            <a href="#">
              <i className="fas fa-envelope"></i> greencare.support@gmail.com
            </a>
            <a href="#">
              <i className="fas fa-map-marker-alt"></i> Novi Sad, Serbia - 21101
            </a>
          </div>

          <div className="box">
            <h3>Follow Us</h3>
            <a href="#">
              <i className="fab fa-facebook-f"></i> facebook
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i> twitter
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i> twitter
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i> instagram
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i> linkedin
            </a>
            <a href="#">
              <i className="fab fa-pinterest"></i> pinterest
            </a>
          </div>
        </div>

        <div className="credit">
          created by <span>Greencare</span> | all rights reserved
        </div>
      </section>
    </div>
  )
}

export default Footer
