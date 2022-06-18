import React, {useEffect, useState} from 'react'
import './ourDoctors.css'
import Slider from 'react-slick'
import placeholderImg from '../../../assets/user-placeholder.png'


import { checkUpService } from '../../../api/CheckupService'

const OurDoctors = () => {

  const [doctors, setDoctors] = useState([]);

  const settings = {
    dots: true,
    infinite: false,
    rows: 1,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  }

  useEffect(() => {
    (async () => {
      const responseData = await checkUpService.getAllDoctors();
      setDoctors([...responseData]);
      console.log('doctors', responseData);
    })();
  }, [setDoctors]);

  return (
    <div>
      <section className="doctors" id="doctors">
        <h1 className="heading">
          our <span>doctors</span>
        </h1>
        <div className="box-container">
          <Slider {...settings}>
            {doctors.map((doctor, index) => (
              <div className="box" key={index}>
              {doctor.imageUrl !== null ? <img src={doctor.imageUrl} alt="" /> : <img src={placeholderImg} alt="" />}
                <h3>{doctor.firstName} {doctor.lastName}</h3>
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
