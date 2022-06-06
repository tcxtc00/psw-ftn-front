import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './clientsReview.css'
import placeholderImg from '../../../assets/user-placeholder.png'

const ClientsReview = () => {
  const reviews = [
    {
      id: 0,
      name: 'Petar Petrovic',
    },
    {
      id: 1,
      name: 'Miodrag Bojanic',
    },
    {
      id: 2,
      name: 'Mitar Miric',
    },
    {
      id: 3,
      name: 'Dusko Simic',
    },
    {
      id: 4,
      name: 'Garry Medel',
    },
    {
      id: 5,
      name: 'Shon Dyiche',
    },
  ]

  const grades = [
    {
      grade: 0,
    },
    {
      grade: 1,
    },
    {
      grade: 2,
    },
    {
      grade: 3,
    },
    {
      grade: 4,
    },
    {
      grade: 5,
    },
  ]

  const settings = {
    dots: true,
    infinite: false,
    rows: 1,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
  }

  return (
    <div>
      <section className="review" id="review">
        <h1 className="heading">
          client's <span>review</span>
        </h1>
        <div className="box-container">
          <Slider {...settings}>
            {reviews.map((review) => (
              <div className="box" key={review.id}>
                <img src={placeholderImg} alt="" />
                <h3>{review.name}</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam sapiente nihil aperiam? Repellat sequi nisi aliquid
                  perspiciatis libero nobis rem numquam nesciunt alias sapiente
                  minus voluptatem, reiciendis consequuntur optio dolorem!
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
