import React from 'react'
import './ourDoctors.css'
import Slider from 'react-slick'
import placeholder from '../../../assets/user-placeholder.png'
import doctor1 from '../../../assets/doc-1.jpg'
import doctor2 from '../../../assets/doc-2.jpg'
import doctor3 from '../../../assets/doc-3.jpg'
import doctor4 from '../../../assets/doc-4.jpg'
import doctor5 from '../../../assets/doc-5.jpg'
import doctor6 from '../../../assets/doc-6.jpg'

const OurDoctors = () => {
  const doctors = [
    {
      id: 0,
      expertise: 'Specialist Doctor',
      name: 'Nada Macura',
      img: doctor1,
    },
    {
      id: 1,
      expertise: 'Generalist Doctor',
      name: 'Miodrag Petrovic',
      img: doctor2,
    },
    {
      id: 2,
      expertise: 'Generalist Doctor',
      name: 'Branimir Nestorovic',
      img: doctor3,
    },
    {
      id: 3,
      expertise: 'Specialist Doctor',
      name: 'Zeljko Mitrovic',
      img: doctor4,
    },
    {
      id: 4,
      expertise: 'Generalist Doctor',
      name: 'John Deo',
      img: doctor5,
    },
    {
      id: 5,
      expertise: 'Generalist Doctor',
      name: 'Ryan Target',
      img: doctor6,
    },
  ]

  const settings = {
    dots: true,
    infinite: false,
    rows: 1,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  }

  return (
    <div>
      <section className="doctors" id="doctors">
        <h1 className="heading">
          our <span>doctors</span>
        </h1>
        <div className="box-container">
          <Slider {...settings}>
            {doctors.map((doctor) => (
              <div className="box" key={doctor.id}>
                <img src={doctor.img} alt="" />
                <h3>{doctor.name}</h3>
                <span className="expertise-span">{doctor.expertise}</span>
                <div className="share">
                  <a href="#" className="fab fa-facebook-f"></a>
                  <a href="#" className="fab fa-twitter"></a>
                  <a href="#" className="fab fa-instagram"></a>
                  <a href="#" className="fab fa-linkedin"></a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  )
}

export default OurDoctors
