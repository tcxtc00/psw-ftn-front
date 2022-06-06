import React from 'react'
import './home.css'
import { ReactComponent as HomeImgSvg } from '../../../assets/home-img.svg'

const Home = () => {
  return (
    <div>
      <section className="home" id="home">
        <div className="image">
          <HomeImgSvg />
        </div>

        <div className="content">
          <h3>Stay Safe, Stay Healthy</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed
            autem vero? Magnam, est laboriosam!
          </p>
          <a href="#" className="btn">
            Contact Us <span className="fas fa-chevron-right"></span>
          </a>
        </div>
      </section>
      <section className="icons-container">
        <div className="icons">
          <i className="fas fa-user-md"></i>
          <h3>140+</h3>
          <p>doctors at work</p>
        </div>

        <div className="icons">
          <i className="fas fa-users"></i>
          <h3>1040+</h3>
          <p>satisfied patients</p>
        </div>

        <div className="icons">
          <i className="fas fa-procedures"></i>
          <h3>500+</h3>
          <p>bed facility</p>
        </div>

        <div className="icons">
          <i className="fas fa-hospital"></i>
          <h3>80+</h3>
          <p>available hospitals</p>
        </div>
      </section>
    </div>
  )
}

export default Home
