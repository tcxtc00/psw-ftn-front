import React from 'react'
import './bookNow.css'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as BookImg } from '../../../assets/book-img.svg'

const BookNow = () => {
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate('/check-ups')
  }

  return (
    <div>
      <section className="book" id="book">
        <h1 className="heading">
          <span>book</span> now
        </h1>
        <div className="row">
          <div className="image">
            <BookImg />
          </div>
          <form action="">
            <h3>See Available Check Ups</h3>
            <input type="text" placeholder="Doctor" className="box" />
            <input type="number" placeholder="Priority" className="box" />
            <input type="datetime-local" className="box" />
            <input type="datetime-local" className="box" />
            <input
              type="submit"
              value="Book Now"
              className="btn"
              onClick={handleSubmit}
            />
          </form>
        </div>
      </section>
    </div>
  )
}

export default BookNow
