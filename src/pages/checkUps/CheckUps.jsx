import React, { useEffect } from 'react'
import { useState } from 'react'
import './checkups.css'

const CheckUps = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const checkUps = [
    {
      id: 0,
      title: 'Appointment num 1',
      doctor: 'Branimir Nestorovic',
    },
    {
      id: 1,
      title: 'Appointment num 2',
      doctor: 'Miodrag Petrovic',
    },
    {
      id: 2,
      title: 'Appointment num 3',
      doctor: 'Branimir Nestorovic',
    },
    {
      id: 3,
      title: 'Appointment num 4',
      doctor: 'Nada Macura',
    },
    {
      id: 4,
      title: 'Appointment num 5',
      doctor: 'Branimir Nestorovic',
    },
    {
      id: 5,
      title: 'Appointment num 6',
      doctor: 'Zeljko Mitrovic',
    },
    {
      id: 6,
      title: 'Appointment num 7',
      doctor: 'Branimir Nestorovic',
    },
    {
      id: 7,
      title: 'Appointment num 8',
      doctor: 'Branimir Nestorovic',
    },
    {
      id: 8,
      title: 'Appointment num 9',
      doctor: 'Nada Macura',
    },
  ]

  const [title, setTitle] = useState({
    greenText: 'Available',
    text: 'Check ups',
  })

  // const changeTitleOnClick = () => {
  //   setIsSignUpForm((prevIsSignUpForm) => !prevIsSignUpForm)
  // }

  return (
    <>
      <h5 className="heading-checkup">
        <span>{title.greenText}</span> {title.text}
      </h5>
      <div className="grid-container">
        {checkUps.map((checkUp) => (
          <form action="" key={checkUp.id}>
            <h3>{checkUp.title}</h3>
            <input
              disabled={true}
              type="number"
              placeholder={checkUp.doctor}
              className="box"
            />
            <input disabled={true} type="datetime-local" className="box" />
            <input disabled={true} type="datetime-local" className="box" />
            <input disabled={true} type="datetime-local" className="box" />
            <input type="submit" value="Book Now" className="btn" />
          </form>
        ))}
      </div>
    </>
  )
}

export default CheckUps
