import React, {useEffect} from 'react'
import './homePage.css'
import Home from '../../components/homePageComponents/home/Home'
import OurServices from '../../components/homePageComponents/ourServices/OurServices'
import About from '../../components/homePageComponents/about/About'
import OurDoctors from '../../components/homePageComponents/ourDoctors/OurDoctors'
import BookNow from '../../components/homePageComponents/bookNow/BookNow'
import ClientsReview from '../../components/homePageComponents/clientsReview/ClientsReview'
import Footer from '../../components/homePageComponents/footer/Footer'
import {authService} from "../../api/AuthService"
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  var role = user.data.role;
  var expertise = user.data.expertise;
  
  useEffect(() => {
    if(authService.getCurrentUser() === null)
    {
      navigate("/registration");
      window.location.reload();
    }
    
  }, []);

  return (
    <div>
      <Home />
      <OurServices />
      <About />
      <OurDoctors />
      {role === 'Doctor' && expertise === 'Specialist' ?
      null : <BookNow />}
      <ClientsReview />
      <Footer />
    </div>
  )
}

export default HomePage
