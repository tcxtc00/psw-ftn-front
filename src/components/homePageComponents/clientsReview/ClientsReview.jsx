import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './clientsReview.css'
import placeholderImg from '../../../assets/user-placeholder.png'
import ModalFeedback from './modalFeedback/ModalFeedback'
import { toast } from 'react-toastify'

import { feedbackService } from '../../../api/FeedbackService'

const ClientsReview = () => {
  const [reviews, setReviews] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const user = JSON.parse(localStorage.getItem("user"));
  const role = user.data.role;

  const settings = {
    dots: true,
    infinite: false,
    rows: 1,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
  }

  useEffect(() => {
    ;(async () => {
      const responseData = await feedbackService.getAllFeedbacks()
      setReviews([...responseData])
      console.log('feedbacks', responseData)
    })()
  }, [setReviews])

  const leaveFeedback = (params) => {
    return async (event) => {
      event.preventDefault()
      try {
        const res = await feedbackService.leaveFeedback({...params})
        console.log(res)

        if(res.status === 200)
        {
          toast.success("Success")
          setIsOpen(false);
        }

      } catch (err) {
        toast.error(err.response.data.message)
        console.log(err.response.data)
      }
    }
  }

  return (
    <div>
      <section className="review" id="review">
        <h1 className="heading">
          client's <span>review</span>
        </h1>
        <div className="box-container">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              review.isForDisplay ?  
              
              <div className="box" key={index}>
              {review.incognito ? <img src={placeholderImg} alt="" /> :
                review.patient.imageUrl !== null ? (
                  <img src={review.patient.imageUrl} alt="" />
                ) : (
                  <img src={placeholderImg} alt="" />
                )}

                {review.incognito ? <h3>Anonimus</h3> : <h3>
                {review.patient.firstName} {review.patient.lastName}
                </h3>}

                <div className="stars">
                  {[...Array(review.grade)].map((e, i) => (
                    <i className="fas fa-star" key={i}></i>
                  ))}
                </div>
                <p className="text">{review.comment}</p>
              </div> : null
            ))}
          </Slider>
        </div>
        {role === "Patient" ? 
        <div className="center">
        <a className="btn margin-btn" onClick={() => setIsOpen(true)}>
          Leave Feedback <span className="fas fa-chevron-right"></span>
        </a>
        <ModalFeedback 
          open={isOpen} 
          onClose={() => setIsOpen(false)}
          leaveFeedback={leaveFeedback}>
        </ModalFeedback>
      </div>
      : null}
      </section>
    </div>
  )
}

export default ClientsReview