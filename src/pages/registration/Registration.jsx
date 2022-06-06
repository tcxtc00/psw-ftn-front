import React from 'react'
import { useState, useEffect } from 'react'
import './registration.css'
import SignUp from '../../components/registrationComponents/SignUp'
import LogIn from '../../components/registrationComponents/LogIn'
import { ReactComponent as HomeImgSvg } from '../../assets/about-img.svg'

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
        <HomeImgSvg />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
          ducimus, quod ex cupiditate ullam in assumenda maiores et culpa odit
          tempora ipsam qui, quisquam quis facere iste fuga, minus nesciunt.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
          ducimus, quod ex cupiditate ullam in assumenda maiores et culpa odit
          tempora ipsam qui, quisquam quis facere iste fuga, minus nesciunt.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus vero
          ipsam laborum porro voluptates voluptatibus a nihil temporibus
          deserunt vel? Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Natus vero ipsam laborum porro voluptates voluptatibus a nihil
          temporibus deserunt vel?
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
            Already have an account?
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
