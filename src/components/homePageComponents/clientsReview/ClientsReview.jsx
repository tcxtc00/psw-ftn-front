import React, {useState,useEffect} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './clientsReview.css'
import placeholderImg from '../../../assets/user-placeholder.png'

import {feedbackService} from '../../../api/FeedbackService'

const ClientsReview = () => {

  const [reviews, setReviews] = useState([]);

  const settings = {
    dots: true,
    infinite: false,
    rows: 1,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
  }

  useEffect(() => {
    (async () => {
      const responseData = await feedbackService.getAllFeedbacks();
      setReviews([...responseData]);
      console.log('feedbacks', responseData);
    })();
  }, [setReviews]);

  return (
    <div>
      <section className="review" id="review">
        <h1 className="heading">
          client's <span>review</span>
        </h1>
        <div className="box-container">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div className="box" key={index}>
                {review.patient.imageUrl !== null ? <img src={review.patient.imageUrl} alt="" /> : <img src={placeholderImg} alt="" />}
                <h3>{review.patient.firstName} {review.patient.lastName}</h3>
                <div className="stars">
               { [...Array(review.grade)].map((e, i) => <i className="fas fa-star" key={i}></i>)}
                </div>
                <p className="text">
                  {review.comment}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  )
}

export default ClientsReview
