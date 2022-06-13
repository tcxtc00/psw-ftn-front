import React from 'react'
import { useState, useEffect } from 'react'
import './registration.css'
import SignUp from '../../components/registrationComponents/SignUp'
import LogIn from '../../components/registrationComponents/LogIn'
//import { ReactComponent as HomeImgSvg } from '../../assets/about-img.svg'

const Registration = () => {
  const [isSignUpForm, setIsSignUpForm] = useState(false)

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
  }, [])

  const changeFormOnClick = () => {
    setIsSignUpForm((prevIsSignUpForm) => !prevIsSignUpForm)
  }

  return (
    <div className="registration">
      <div className="left">
        <h3 className="heading">
          Welcome to <span>Greencare</span>
        </h3>
        <img src=""/>
        <p>
        We understand that everyone is unique and every patient is different, that's what makes us different.
        We've made it our Purpose to provide the best individualised specialist care for every patient we see. We want to help people feel better and recover faster.
        We're part of Serbian's largest family-owned private hospital group with over 35 years experience in providing award winning, innovative, personalised medicine for a range of mental health and orthopaedics conditions.
        </p>
        <p>
        We work as a team and are passionate about the health and wellbeing of our patients, supporting them every step of the way from treatment, rehabilitation, recovery and beyond.
        Welcome to Greencare Clinic. Giving you fast access to world-class experts and care, when you need it most.
        </p>
      </div>
      <div className="right">
        {isSignUpForm === true ? <SignUp /> : <LogIn />}
        {isSignUpForm === true ? (
          <p>
            Already have an account?
            <span onClick={changeFormOnClick} className="span-login-signup">
              Login
            </span>
          </p>
        ) : (
          <p>
            Don't have an account?
            <span onClick={changeFormOnClick} className="span-login-signup">
              Sign Up
            </span>
          </p>
        )}
      </div>
    </div>
  )
}

export default Registration
